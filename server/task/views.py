from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from task.serializer import userDataSeria
from rest_framework.views import APIView
from rest_framework.response import Response


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


class user(APIView):
    serializer_class = userDataSeria

    def post(self, request):
        serializer = userDataSeria(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(True)
        return Response(False)
