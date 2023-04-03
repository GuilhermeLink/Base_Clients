from django.db import models
from users.models import User


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=255)
    phones = models.CharField(max_length=20)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __repr__(self) -> str:
        return f"<Contact [{self.id}] - {self.title}>"
