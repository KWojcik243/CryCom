import uuid
from django.db import models
from django.contrib.auth.models import User


class Crypto_Value(models.Model):
    full_name = models.CharField(max_length=20)
    code = models.CharField(max_length=10)
    price = models.FloatField()


class Blog_Post(models.Model):  # Model under development
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    time = models.DateField()
    blog_content = models.CharField(max_length=400)


class Crypto_Group(models.Model):
    token = models.CharField(max_length=100, blank=True, unique=True, default=uuid.uuid4)
    name = models.CharField(max_length=20)
    crypto_type = models.TextField() # 0 = If there have to be only one type of currency in the groups, 1 - in other cases
    password = models.CharField(max_length=20)


class Group_Members(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    crypto_group = models.ForeignKey(Crypto_Group, on_delete=models.CASCADE)
    owner = models.BooleanField(default=1) # 1 = If owner, 0 - in other cases


class Team_Coins(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    crypto_name = models.CharField(max_length=24)
    buy_value = models.FloatField()
    amount = models.FloatField()
    actual_value = models.FloatField()
    profit = models.FloatField()
    buy_price = models.FloatField()
    crypto_group = models.ForeignKey(Crypto_Group, on_delete=models.CASCADE)

class Biggest_Profit_Loss(models.Model):
    name = models.CharField(max_length=30)
    last_week_price = models.FloatField()
    todays_price = models.FloatField()
    difference = models.FloatField()


