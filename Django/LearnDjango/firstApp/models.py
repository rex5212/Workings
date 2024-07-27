from django.db import models

class TypePerson():
    personHole = [
        ("T", "teach"),
        ("D", "director"),
        ("S", "studant"),
    ]

class Address(models.Model):
    address = models.CharField(max_length=120)
    number = models.BigIntegerField()
    complement = models.CharField(max_length=50)
    city = models.CharField(max_length=80)
    state = models.CharField(max_length=50)
    
class School(models.Model):
    name = models.CharField(max_length=100)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)

class Person(models.Model):
    name = models.CharField(max_length=100)
    mail = models.CharField(max_length=150, null=True, unique=True)
    # type = models.Choices(TypePerson.personHole)
     