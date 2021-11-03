from django.db import models


class UserData(models.Model):
    email = models.EmailField(max_length=300)
    password = models.CharField(max_length=500)
