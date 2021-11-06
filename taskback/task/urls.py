from django.urls import path
from .views import AddMember, addCity, addCountry, logIn, signIn

urlpatterns = [
    path('signIn', signIn.as_view()),
    path('logIn', logIn.as_view()),
    path('addMember', AddMember.as_view()),
    path('country', addCountry.as_view()),
    path('city', addCity.as_view()),
]
