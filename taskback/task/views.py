from django.shortcuts import render
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import AddMemberSerializer, CitySerializer, CountrySerializer, UserSerializer
import jwt
import datetime
from .models import City, Country, User

# Create your views here.


class signIn(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class logIn(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('user not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('wrong password!')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm="HS256")
        response = Response()
        # response.set_cookie(key='jwt', value=token)
        response.data = {
            'jwt': token
        }

        return response


class addCountry(APIView):

    def post(self, request):
        serializer = CountrySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def get(self, request):
        countries = Country.objects.all().values('id', 'name')
        return Response(countries)


class addCity(APIView):
    def post(self, request):
        serializer = CitySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def get(self, request):
        citeis = City.objects.filter(country=1).values_list('name')
        city = []
        for x in citeis:
            city.append(x[0])
        return Response(city)


class AddMember(APIView):
    def post(self, request):
        serializer = AddMemberSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
