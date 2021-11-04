from rest_framework import serializers
from task.models import UserData


class userDataSeria (serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = ('id', 'email', 'password')
