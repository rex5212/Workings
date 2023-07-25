from django.db import models

class ModeloTest(models.Model):
    campoTestI = models.CharField(max_length=200)
    campoTestII = models.BooleanField(null=True)