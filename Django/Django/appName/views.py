from django.shortcuts import render, get_object_or_404
from .models import ModeloTest
from django.http import HttpResponse
from django.template import loader
from django.views import generic

def start(request):
    date = ModeloTest.objects.all()
    return HttpResponse(date.values())

def only(request, pk):
    date = ModeloTest.objects.get(pk=pk)
    date = {"date": date}
    template = loader.get_template("only.html")
    return HttpResponse(template.render(date, request))

# class onlyView(generic.DetailView):
#     model = ModeloTest
#     template_name = "only.html"