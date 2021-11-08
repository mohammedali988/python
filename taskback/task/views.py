from django.shortcuts import get_object_or_404, render
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import AddMemberSerializer, CitySerializer, CountrySerializer, UserSerializer
import jwt
import datetime
from .models import City, Country, Member, User

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
        countries = Country.objects.all().values_list('id', 'name')
        return Response(countries)


class addCity(APIView):
    def post(self, request):
        serializer = CitySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class city(APIView):

    def get(self, request, id):
        exact = get_object_or_404(City, id=id)
        print(id, "hereeeeeeeeeeeeeee")
        citeis = City.objects.filter(country=id).values_list('id', 'name')
        city = []
        for x in citeis:
            city.append(x[0])
        return Response(citeis)


class AddMember(APIView):
    serializer_class = AddMemberSerializer

    def post(self, request, *args, **kwargs):
        print(request.data, "hiiiiiii")
        firstName = request.data['firstName']
        lastName = request.data['lastName']
        gender = request.data['gender']
        dateOfBirth = request.data['dateOfBirth']
        phoneNo = request.data['phoneNo']
        emailAddress = request.data['emailAddress']
        image = request.data['image']
        notes = request.data['notes']
        print(request.data['country'], 'hereeeeeeeeeeeeee')

        country = setattr(Member, 'country', request.data['country'])
        # print(type(int(country)), "hiiiiiiiii")
        city = setattr(Member, 'city', request.data['city'])
        active = request.data['active']
        Member.objects.create(
            firstName=firstName, lastName=lastName, gender=gender,
            dateOfBirth=dateOfBirth, phoneNo=phoneNo, emailAddress=emailAddress,
            image=image, notes=notes, country=country, city=city, active=active)

        return Response({'message': "Member Adedd"})

    def get(self, request):
        members = Member.objects.all().values('id', 'firstName', 'lastName',
                                              'gender', 'country', 'notes', 'active')
        return Response(members)

        # serializer = AddMemberSerializer(data=request.data)
        # print(serializer, "hereeeeeeeeeeeeee")
        # serializer.is_valid(raise_exception=True)
        # serializer.save()
