from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=255)
    phones = models.CharField(max_length=20)
    user = models.ForeignKey("users.User", on_delete=models.CASCADE, related_name="contacts")

    def __repr__(self) -> str:
        return f"<Contact [{self.id}] - {self.title}>"
