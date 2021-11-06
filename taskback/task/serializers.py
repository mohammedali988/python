from rest_framework import serializers
from .models import City, Member, User, Country


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'password')

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)

        instance.save()
        return instance


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['name']


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ['name', 'country']


class AddMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['id', 'firstName', 'lastName', 'gender', 'dateOfBirth',
                  'phoneNo', 'emailAddress', 'notes', 'active', 'country', 'city']
