from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the app index but you put nothing in url (is empty).")

def indexIndex(request):
    return HttpResponse("Hello, world. You're at the app index but you put Index after /.")