from django.conf.urls import url
from task import views


urlpatterns = [
    url('/user/', views.user),
    url('', views.index),
]
