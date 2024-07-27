# For Start with Django, first write in prompt
    py -m pip install Django
## this install the django  library

## After install the django library (or if you already have or do you think you have, run this code to see what version is you django)
    py -m django --version

## you start you project django do this code
    django-admin startproject "project_name"
### Some things to note
- This strat a project in the folder that run this code
- the 'project_name' is the name of this project and try avoid name you project with test or django due to the conflict that occurs around these two 

## After create you project, you can init the server and see if is run or not doing this code
    py manage.py runserver

## After turn on you server and see is running ok do this code that create the app folder in your project to organize your code in a modular and reusable way
    py manage.py startapp "app_name"
### Some things to note
- you can have n app for make you project or a app to many project but not the reverse
- the 'app_name' is the name of this app

# Views.py
## Is the logic of you project that can make in def or class and return a response what is the html you what for example, this code below is a example of simple view that return the text in html
### app/views.py
    from django.http import HttpResponse

    def index(request):
        return HttpResponse("Hello, world. You're at the app index but you put nothing in url (is empty).")

    def indexIndex(request):
        return HttpResponse("Hello, world. You're at the app index but you put index after /.")
## In this code i create two def that have the same text with modification in finish
### Some things to note
- this view in question is inside an app what you see
- the views can be in the project of in yours apps, the diference betwwen is the project view is the view that not required any app to run and in the app view is that need this app to load or form you view

# Urls.py
## this file map the url say in the system what do if this url is call, example of the urls.py below
### app/urls.py
    from django.urls import path

    from . import views

    urlpatterns = [
        path("", views.index, name="index"),
        path("Index", views.indexIndex, name="indexIndex")
    ]
### project/urls.py
    from django.contrib import admin
    from django.urls import include, path

    urlpatterns = [
        path("app/", include("polls.urls")),
        path("admin/", admin.site.urls),
    ]

I will explain what happend in project after do this and what is,
<p>let's talk about the first code, the first line inside the list urlpatterns i say what empty in url (127.0.0.1:8000/) load/get the index view (is the name of def in view -> views.index) and is name is index .... stay path("", views.index, name='index'),
<p>and in second i put with the url /Index show the indexIndex view and the name is "indexIndex" stay path("Index", views.indexIndex, name="indexIndex"), 
<p>if you notic this is make in app so this route is not find if i only start the server before i need say the second code that is in project and he is to control the url in server,
<p>i say to him what is a route call app/ (127.0.0.1:8000/app) that is the all path of urls.py for that app, doing this he not need re-map the url because i say in the url 127.0.0.1:8000/app have the '127.0.0.1:8000/app/' and '127.0.0.1:8000/app/index'

## In the root of you project you have the urls.py file, that say what route (127.0.0.1:8000/...) you project have 
## you can say what url reverse is if you have give one name in the urls.py (for you app)
    app_name = "begin"
    urlpatterns = [
        path("", views.IndexView.as_view(), name="index"),
        path("<int:pk>/", views.DetailView.as_view(), name="detail"),
    ]
## so if make one link tag, example
    <li><a href="{% url 'begin:start' "if what pass something" %}">....</a></li>
## the url begin:start make it go the route "start" because the url pick up the name in the urls.py

# settings.py
## In this file you can edit many config about the project
### Important, before change something in settings.py talk with a person that hava and know the system best that you because one change fail in production can open for hack
## he some setting present in the file
- INSTALLED_APPS - list the apps use in you project
- MIDDLEWARE
- DATABASES
- TEMPLATES
- ROOT_URLCONF - That say what is the project or app main urlpatterns

### Inside the settings.py have the INSTALLED_APPS what say the apps what this project use, some apps that already come with project (django.) need you only table in db, so run this code  abouve and save it
    py manage.py migrate

# models.py
## He you create you db table, the basic sctur for this is 
```python
    class Address(models.Model):
        address = models.CharField(max_length=120)
        number = models.BigIntegerField(max_length=5)
        complement = models.CharField(max_length=50)
        city = models.CharField(max_length=80)
        state= models.CharField(max_length=50)
 ```
### one import think you note is the model will not be create so you need say the path of you app in INSTALLED_APPS in settings.py, you need add is a config of you app that you create the modal specific the path here is location, staying "app".apps."configName" the "app" is the name of you app, apps is the folder ("apps.py") he stay the "configName" and "configName" is the name of a class inside the apps.py, the tree stay like this,
```python
    INSTALLED_APPS = [
        "app.apps.configName",
        "django.contrib.admin",
        "django.contrib.auth",
    ]
```

### to code init and create yours migration inside the models.py of you app you need run this code
    py manage.py makemigrations "app"
- the "app" is the name of you aplication
- this is create the migrations for those change you do in models.py
### After apply the change you do in model you need create the tables in sql doing 
    py manage.py migrate 

# admin.py
### Is the Basic control of you project, in he you can manage yours db and you can edit who data will show for each app by the admin.py of each app
- To create and edit the data of you app in admin you need create the intefac/data show in app/admin.py

### You create a user to access the admin interfac doing
    py manage.py createsuperuser
- To access the admin you need start the server and go to url /admin/ (if you not change it in project/url.py)

### How i say abouve you need create in "app/admin.py" what will show in admin about you app in case the models, this is the basic structure
```python 
    from django.contrib import admin
    from .models import youModelI, youModelII

    admin.site.register(youModelI)
    admin.site.register(youModelII)
```

/CORE/


# Template
## He is a folder that you put yours Html page and call he in views.py (you must need create this folder, you can create the folder template and inside subFolders, template < initapp < .html)
    def only(request, pk):
        date = ModeloTest.objects.get(pk=pk)
        date = {"date": date}
        template = loader.get_template("only.html")
        return HttpResponse(template.render(date, request))
## He is a class
    class onlyView(generic.DetailView):
        model = ModeloTest
        template_name = "only.html"


## the template_name = "polls/detail.html" say in templates folder inside the polls have another folder polls what in is the .html files

# static
## He put all you .css first inside the polls create a folder call static and inside create polls folder and yours css and png's for example is pick by this folder

# Admin Customize

# Test ...

