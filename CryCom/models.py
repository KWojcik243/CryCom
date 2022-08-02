from django.db import models


class CryptoValue(models.Model):
    full_name = models.CharField(max_length=20)
    code = models.CharField(max_length=10)
    price = models.FloatField()
