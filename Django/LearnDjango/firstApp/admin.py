from django.contrib import admin
from .models import Address, Person, School

admin.site.register(Address)
admin.site.register(Person)
admin.site.register(School)