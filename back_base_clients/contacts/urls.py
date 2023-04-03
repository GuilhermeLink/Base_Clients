from django.urls import path
from .views import ContactView, ContactDetailView


urlpatterns = [
    path("contacts/", ContactView.as_view()),
    path("contacts/<int:contact_id>/", ContactDetailView.as_view()),
]
