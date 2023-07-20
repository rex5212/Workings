### For Start with Django, first write in prompt
    py -m pip install Django

### For Start the Server you write
    py manage.py runserver

### For Create Prompt Instance you write
    py manage.py shell

## Models ...
    py manage.py migrate
    py manage.py makemigrations polls
## Admin User ...
    py manage.py createsuperuser

## polls
    py manage.py startapp polls

## urls
# you can say what url reverse is for example app_name=polls 
    app_name = "polls"
    urlpatterns = [
        path("", views.IndexView.as_view(), name="index"),
        path("<int:pk>/", views.DetailView.as_view(), name="detail"),
    ]
# so if make one link tag, example
    <li><a href="{% url 'polls:detail' question.id %}">{{ question.question_text }}</a></li>
# the url polls:index make it go the route "index" because the url pick up the name in the urls.py

## Template
# He put yours Html page and call he in views.py 
    class DetailView(generic.DetailView):
        model = Question
        template_name = "polls/detail.html"

        def get_queryset(self):
            """
            Excludes any questions that aren't published yet.
            """
            return Question.objects.filter(pub_date__lte=timezone.now())
# the template_name = "polls/detail.html" say in templates folder inside the polls have another folder polls what in is the .html files

## static
# He put all you .css first inside the polls create a folder call static and inside create polls folder and yours css and png's for example is pick by this folder

## Admin Customize

### Test ...

