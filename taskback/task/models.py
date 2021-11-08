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
    firstName = models.CharField(max_length=225)
    lastName = models.CharField(max_length=225)
    gender = models.CharField(max_length=225)
    dateOfBirth = models.CharField(max_length=225)
    phoneNo = models.IntegerField()
    emailAddress = models.CharField(max_length=255)
    image = models.ImageField(null=True, upload_to=upload_path)
    notes = models.TextField()
    active = models.BooleanField(default=False)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    city = models.ForeignKey(City, on_delete=models.CASCADE)


# Create your models here.
