from django.urls import path
from . import views
from .views import ClientView, ClientUpdateView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path("clients/", ClientView.as_view()),
    path("clients/login/", TokenObtainPairView.as_view()),
    path("refresh/", TokenRefreshView.as_view()),
    path("clients/<int:user_id>/", ClientUpdateView.as_view())
]
