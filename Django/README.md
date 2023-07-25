### For Start with Django, first write in prompt
    py -m pip install Django
### After
    django-admin startproject "project_name"
### After
    py manage.py startapp "app_name"
### This Create the App folder in your project, you can have n app for make you project

### For Start the Server you write
    py manage.py runserver

### For Create Prompt Instance you write
    py manage.py shell

## Models
# Go in the app that you create and open the models.py, this is the sqlite script;
# After that create yours column, and in setting.py in the root for you project go to INSTALLED_APPS and put the config in (the config is the apps.py file for you app), specific the path here is location
    INSTALLED_APPS = [
        'appName.apps.AppnameConfig',
        'django.contrib.admin',
        'django.contrib.auth',
        ...,
    ]
# After that start thes Installed_apps
    py manage.py makemigrations
# And init you Model
    py manage.py migrate
## Admin User ...
    py manage.py createsuperuser

### Views
# the Logic for you project, in that you can create the function or class what is see in the url,
    def start(request):
    date = ModeloTest.objects.all()
    return HttpResponse(date.values())


### Urls
# In the root of you project you have the urls.py file, that say what route (127.0.0.1:8000/...) you project have 
# you can say what url reverse is if you have give one name in the urls.py (for you app)
    app_name = "begin"
    urlpatterns = [
        path("", views.IndexView.as_view(), name="index"),
        path("<int:pk>/", views.DetailView.as_view(), name="detail"),
    ]
# so if make one link tag, example
    <li><a href="{% url 'begin:start' "if what pass something" %}">....</a></li>
# the url begin:start make it go the route "start" because the url pick up the name in the urls.py

## Template
# He is a folder that you put yours Html page and call he in views.py (you must need create this folder, you can create the folder template and inside subFolders, template < initapp < .html)
    def only(request, pk):
        date = ModeloTest.objects.get(pk=pk)
        date = {"date": date}
        template = loader.get_template("only.html")
        return HttpResponse(template.render(date, request))
# He is a class
    class onlyView(generic.DetailView):
        model = ModeloTest
        template_name = "only.html"


# the template_name = "polls/detail.html" say in templates folder inside the polls have another folder polls what in is the .html files

## static
# He put all you .css first inside the polls create a folder call static and inside create polls folder and yours css and png's for example is pick by this folder

## Admin Customize

### Test ...

