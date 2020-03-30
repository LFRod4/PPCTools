from django.shortcuts import render
from django.views import View
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse

from rest_framework.decorators import APIView
from rest_framework.response import Response

#Create your views here.
class Email(APIView):


    def post(self, request):
        contactInfo = request.data['contactInfo']
        subject = 'Bradynce Tools Lead'
        message = "Name: " +  contactInfo['name'] + "\n" + "Phone: " + contactInfo['phone'] + "\n" + "Email " +  contactInfo['email'] + "\n" + "Business Name: " + contactInfo['businessName']
        email_from = settings.EMAIL_HOST_USER
        recipient_list = ['luis@bradynce.com',]
        send_mail( subject, message, email_from, recipient_list )

        return HttpResponse('success')



