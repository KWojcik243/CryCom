import datetime
import os
import sys
from celery import shared_task
from celery.utils.log import get_task_logger
import pandas as pd

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
@shared_task   
def biggest_profit_loss_update():
    from CryCom.models import Coins_list, Coins_Price, Biggest_Profit_Loss
    Biggest_Profit_Loss.objects.all().delete()
    cl = Coins_list.objects.all()
    df = pd.DataFrame(columns=["name","last week price", "todays price", "difference"])
    for coin in  cl:
        now = datetime.datetime.now()
        week_old = datetime.datetime.now() - datetime.timedelta(days=7)
        coins_value = Coins_Price.objects.filter(coin=coin).filter(date__range=(week_old, now))
        df2 = pd.DataFrame({"name": [coin.name],
                    "last week price": [coins_value[0].price],
                        "todays price": [coins_value[len(coins_value)-1].price], 
                        "difference": [coins_value[len(coins_value)-1].price-coins_value[0].price]})
        df = df.append(df2, ignore_index = True)
    df = df.sort_values(by=['difference'], ascending=True)
    for i in range(10):
        max = Biggest_Profit_Loss()
        min = Biggest_Profit_Loss()
        min.name = df.iloc[i,0]
        min.last_week_price = df.iloc[i,1]
        min.todays_price = df.iloc[i,2]
        min.difference = df.iloc[i,3]
        max.name = df.iloc[-1-i,0]
        max.last_week_price = df.iloc[-1-i,1]
        max.todays_price = df.iloc[-1-i,2]
        max.difference = df.iloc[-1-i,3]
        min.save()
        max.save()
