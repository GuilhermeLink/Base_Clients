from rest_framework import serializers
from .models import Contact


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'phones', 'client', 'data_registro']
        read_only_fields = ['id', 'data_registro']
