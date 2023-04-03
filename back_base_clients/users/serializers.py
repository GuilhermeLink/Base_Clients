from rest_framework import serializers
from .models import User
from rest_framework.validators import UniqueValidator


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'password', 'email', 'phones']
        extra_kwargs = {
            'password': {'write_only': True},
            'name': {'validators': [UniqueValidator(queryset=User.objects.all(), message="username already taken.")]},
            'email': {'validators': [UniqueValidator(queryset=User.objects.all(), message="email already registered.")]}
        }

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            instance.set_password(validated_data['password'])
        return super().update(instance, validated_data)  


class LoginSerializer(serializers.Serializer):   
    name = serializers.CharField(max_length=150, write_only=True)
    password = serializers.CharField(max_length=127, write_only=True)