from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


class Country(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class City(models.Model):
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    name = models.CharField(max_length=225)


def upload_path(instance, filename):
    return '/'.join(['profileImage', str(instance.firstName), filename])


class Member(models.Model):
    firstName = models.CharField(max_length=225, default=None)
    lastName = models.CharField(max_length=225, default=None)
    gender = models.CharField(max_length=225, default=None)
    dateOfBirth = models.CharField(max_length=225, default=None)
    phoneNo = models.IntegerField(default=None)
    emailAddress = models.CharField(max_length=255, default=None)
    image = models.ImageField(null=True, upload_to=upload_path, default=None)
    notes = models.TextField(default=None)
    active = models.BooleanField(default=False)
    country = models.ForeignKey(
        Country, default=None, on_delete=models.CASCADE)
    city = models.ForeignKey(City, default=None, on_delete=models.CASCADE)


# Create your models here.
