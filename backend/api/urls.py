from django.contrib import admin
from django.urls import path, include
from .views import Email

urlpatterns = [
    path('email', Email.as_view())
]