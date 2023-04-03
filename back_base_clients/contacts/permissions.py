from rest_framework import permissions
from rest_framework.views import Request, View


class ContactOwner(permissions.BasePermission):
    def has_permission(self, request: Request, view: View):
        return (
            request.method in permissions.SAFE_METHODS or request.user.is_authenticated
        )
