from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework import generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated
from django.db.models import F
from django.db.models.functions import Round

from . import serializers

from django.contrib.auth.models import User
from ..models import Biggest_Profit_Loss, Coins_Price, Coins_list, Group_Members, Crypto_Group

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

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({"request": self.request})
        return context

class CryptoJoinGroupView(generics.CreateAPIView):
    serializer_class = serializers.CryptoJoinGroupSerializer

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getGroupsMembers(request):
    user = request.user
    try:
        groups = Group_Members.objects.filter(user_id=user.id).values_list('crypto_group_id', flat=True)
        groups = Crypto_Group.objects.filter(id__in=groups)
        
        serializer = serializers.CryptoGroupGetSerializer(groups, many=True)
        return Response(serializer.data)
    except:
        # return Response(404)
        pass

@api_view(['GET'])
def CryptoBiggestProfitLossGet(request):
    queryset = Biggest_Profit_Loss.objects.all().order_by('-difference')
    serializer = serializers.CryptoBiggestProfitLossGetSerializer(queryset, many=True)
    return Response(serializer.data)
    # queryset = Biggest_Profit_Loss.objects.all().order_by('-difference')

@api_view(['GET'])
def CryptoBiggestProfitLossAllDataBestGet(request):
    queryset = Biggest_Profit_Loss.objects.all().order_by('-difference')
    coin = Coins_list.objects.get(name=queryset[0].name)
    best = Coins_Price.objects.filter(coin_id=coin)
    serializer = serializers.CryptoBiggestProfitLossllDataBestGetSerializer(best, many=True)
    return Response([
        {"id": coin.name,
    "color": "hsl(14, 94%, 51%)","data":serializer.data}])

@api_view(['GET'])
def CryptoBiggestProfitLossAllDataWorstGet(request):
    queryset = Biggest_Profit_Loss.objects.all().order_by('difference')
    coin = Coins_list.objects.get(name=queryset[0].name)
    best = Coins_Price.objects.filter(coin_id=coin)
    serializer = serializers.CryptoBiggestProfitLossllDataWorstGetSerializer(best, many=True)
    return Response([
        {"id": coin.name,
    "color": "hsl(281, 86%, 49%)","data":serializer.data}])

