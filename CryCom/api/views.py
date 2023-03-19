from rest_framework.response import Response
from rest_framework import generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated

from . import serializers

from django.contrib.auth.models import User
from ..models import Group_Members, Crypto_Group

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes=[
        '/api/token',
        '/api/token/refresh',
    ]
    return Response(routes)


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.RegisterSerializer

class CryptoGroupView(generics.CreateAPIView):
    serializer_class = serializers.CryptoGroupSerializer

class CryptoJoinGroupView(generics.CreateAPIView):
    serializer_class = serializers.CryptoJoinGroupSerializer

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getGroupsMembers(request):
    user = request.user
    groups = Group_Members.objects.filter(user_id=user.id).values_list('id', flat=True).values('id')
    print(groups[0]["id"])
    groups = Crypto_Group.objects.filter(id=groups[0]["id"])
    serializer = serializers.CryptoGroupGetSerializer(groups, many=True)
    return Response(serializer.data)

