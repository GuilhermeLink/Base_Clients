from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Contact
from .serializers import ContactSerializer
from .permissions import ContactOwner
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.authentication import JWTAuthentication


class ContactView(APIView):
    authentication_classes = [JWTAuthentication]

    def get(self, request): 
        contacts = Contact.objects.filter(client=request.user)
        serializer = ContactSerializer(contacts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(client=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ContactDetailView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [ContactOwner]

    def get(self, request, contact_id):
        contact = get_object_or_404(Contact, id=contact_id)
        serializer = ContactSerializer(contact)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, contact_id):
        contact = get_object_or_404(Contact, id=contact_id)
        serializer = ContactSerializer(contact, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, contact_id):
        contact = get_object_or_404(Contact, id=contact_id)
        contact.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
