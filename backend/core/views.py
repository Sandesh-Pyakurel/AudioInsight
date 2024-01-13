import shutil
import string
import random
import os
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from .renderers import UserRenderer
from .models import User, AudioInsight
from .serializers import UserRegisterationSerializer, UserLoginSerializer, UserProfileSerializer, AudioProcessSerializer

from .logic.check import select_convert


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = UserRegisterationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = get_tokens_for_user(user)
        return Response({'token':token, 'msg':'Registration Successful'}, status=status.HTTP_201_CREATED)


class UserLoginView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    username = serializer.data.get('username')
    password = serializer.data.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        token = get_tokens_for_user(user)
        return Response({'token':token, 'msg':'Login Success'}, status=status.HTTP_200_OK)
    else:
        Response({'errors':{'non_field_errors':['Email or Password is not Valid']}}, status=status.HTTP_404_NOT_FOUND)


class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)
  

class AudioProcessView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        audio = AudioInsight.objects.all().filter(user=request.user)
        serializer = AudioProcessSerializer(audio, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = AudioProcessSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        audio = serializer.save()
        audiofile = audio.audio
        audiofile = audiofile
        audiotype = audio.type

        res = ''.join(random.choices(string.ascii_lowercase + string.digits, k=5))
        docum = select_convert('media/' + str(audiofile), audiotype)
        print(docum)
        new_path = docum + res + '.docx'
        os.rename(docum, new_path)
        shutil.move(new_path, 'media/core/logic/documents/')
        audio.document = request.build_absolute_uri('/') + 'media/' + new_path
        print(audio.document)
        audio.save()

        return Response(serializer.data, status=status.HTTP_200_OK)