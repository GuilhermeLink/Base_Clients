
from rest_framework import permissions
from rest_framework.views import Request, View
from .models import User


class AdminPermission(permissions.BasePermission):
    def has_permission(self, request: Request, view: View):
        return (
            request.method in permissions.SAFE_METHODS or request.user.is_authenticated and request.user.is_superuser
        )


class ClientPermission(permissions.BasePermission):
    def has_object_permission(self, request: Request, view: View, user: User):
        return (
            request.user.is_authenticated and request.user.is_superuser or request.user.is_authenticated and request.user == user
        )
