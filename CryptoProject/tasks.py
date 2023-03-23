import datetime
import os
import sys
from celery import shared_task
from celery.utils.log import get_task_logger
from pandas import DataFrame

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)

sys.path.append(parent)

from CryCom.Data.crypto_data import CryptoData
from CryCom.Data.influx_cl import InfluxCl



logger = get_task_logger(__name__)


@shared_task
def update_influxdb():
    logger.info("Inserting data")


@shared_task   
def update_coins_list():
    from CryCom.models import Coins_list
    cd = CryptoData()
    list_coins = cd.get_supported_list_coins_ids()

    for coin in list_coins:
        try:
            coin_obj = Coins_list()
            coin_obj.name = coin
            coin_obj.save()
        except:
            pass

@shared_task   
def update_coins_price():
    from CryCom.models import Coins_list, Coins_Price
    cd = CryptoData()
    cl = Coins_list.objects.all()
    for coin in  cl:
        data = cd.get_actual_data(coin.name)
        coin_value = Coins_Price()
        coin_value.coin = coin
        coin_value.date = str(datetime.datetime.now())
        coin_value.price = data[coin.name]["usd"]
        coin_value.save()

# @shared_task   
# def update_coins_price():
#     cd = CryptoData()
    
#     cl = Coins_list.objects.all()
#     for coin in  cl:
#         print(coin.name)
#         data = cd.get_historical_data(coin.name,days=3650)
#         for i in range(len(data)):
#             coin_value = Coins_Price()
#             coin_value.coin = coin
#             coin_value.date = data.index[i]
#             coin_value.price = data.iat[i, 0]
#             coin_value.save()
   
