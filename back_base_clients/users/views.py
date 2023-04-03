from django.shortcuts import render
from rest_framework.views import APIView, Request, Response, status
from .models import User
from .serializers import ClientSerializer
from .permissions import AdminPermission, ClientPermission
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.shortcuts import get_object_or_404


class ClientView(APIView):
    permission_classes = [AdminPermission]

    def get(self, request: Request) -> Response:

        users = User.objects.all()
        serializer = ClientSerializer(users, many=True)

        return Response(serializer.data, status.HTTP_200_OK)

    def post(self, request: Request) -> Response:
        serializer = ClientSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status.HTTP_201_CREATED)


class ClientUpdateView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [ClientPermission]
 
    def get(self, request: Request, user_id: int) -> Response:
        user = get_object_or_404(User, id=user_id)
        self.check_object_permissions(request, user)

        serializer = ClientSerializer(user)
       
        return Response(serializer.data, status.HTTP_200_OK)

    def patch(self, request: Request, user_id: int) -> Response:
        user = get_object_or_404(User, id=user_id)
        self.check_object_permissions(request, user)

        serializer = ClientSerializer(user, request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status.HTTP_200_OK)
