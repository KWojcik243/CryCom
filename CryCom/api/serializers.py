from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

from django.contrib.auth.models import User
from ..models import Group_Members, Crypto_Group

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
    
class CryptoGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crypto_Group
        fields = ("name", "crypto_type")