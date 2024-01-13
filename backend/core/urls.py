from django.urls import path

from rest_framework_simplejwt import views as jwt_views

from .views import UserRegistrationView, UserLoginView, UserProfileView, AudioProcessView

urlpatterns = [
    path('auth/users/', UserRegistrationView.as_view()),
    path('auth/jwt/create/', UserLoginView.as_view()),
    path('auth/jwt/refresh/', jwt_views.TokenRefreshView.as_view()),
    path('auth/users/me/', UserProfileView.as_view()),
    path('api/audioprocess/', AudioProcessView.as_view()),
]
