from django.urls import path
from .views import AddMember, addCity, addCountry, city, logIn, signIn

urlpatterns = [
    path('signIn', signIn.as_view()),
    path('logIn', logIn.as_view()),
    path('Member', AddMember.as_view()),
    path('country', addCountry.as_view()),
    path('add-city', addCity.as_view()),
    path('fetch-city/<int:id>', city.as_view()),
]
