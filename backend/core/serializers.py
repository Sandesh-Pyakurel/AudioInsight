from rest_framework import serializers

from .models import User, AudioInsight

class UserRegisterationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username','first_name','last_name', 'password']
        extra_kwargs={
            'password':{'write_only':True}
        }

    def create(self, validate_data):
        return User.objects.create_user(**validate_data)


class UserLoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=255)
    class Meta:
        model = User
        fields = ['username','password']


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name']


class AudioProcessSerializer(serializers.ModelSerializer):
    class Meta:
        model = AudioInsight
        fields = ['id', 'user', 'audio', 'type','document', 'doc_name']

        extra_kwargs = {
            'audio':{'write_only':True},
            'document':{'read_only':True}
        }