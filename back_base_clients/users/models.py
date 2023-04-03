from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    name = models.CharField(max_length=150)
    email = models.EmailField(max_length=150)
    phones = models.CharField(max_length=20)

    def __repr__(self) -> str:
        return f"<Client [{self.id}] - {self.first_name} {self.last_name}>"