from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

from django.contrib.auth.models import User
from ..models import Biggest_Profit_Loss, Coins_Price, Group_Members, Crypto_Group

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email')
        extra_kwargs = {
            'username': {'required': True},
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
        )

        
        user.set_password(validated_data['password'])
        user.save()

        return user
    
class CryptoGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crypto_Group
        fields = ("name", "password", "crypto_type")
    def create(self, validated_data):
        cg = Crypto_Group.objects.create(
            name = validated_data["name"],
            crypto_type = validated_data["crypto_type"],
            password = validated_data["password"]
        ) 

        cg.save()
        return cg
    
class CryptoGroupGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crypto_Group
        fields = ("name", "crypto_type")

class CryptoJoinGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group_Members
        fields = ("crypto_group", "user", "owner")
    
    def validate(self, attrs):
        try:
            group = Crypto_Group.objects.get(room_token=attrs['room_token'])
            if group.password != attrs['password']:
                raise serializers.ValidationError({"error": "Password or token didn't match."})
        except:
            raise serializers.ValidationError({"error": "Password or token didn't match."})

        return attrs

    def create(self, validated_data):
        group = Crypto_Group.objects.get(room_token=validated_data['room_token'])
        member = Group_Members.objects.create(
            crypto_group_id = group.id,
            user_id = validated_data["user_id"],
            owner = True
        )

        return member
    
class CryptoBiggestProfitLossGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Biggest_Profit_Loss
        fields = "__all__"

class CryptoBiggestProfitLossllDataBestGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coins_Price
        fields = "__all__"