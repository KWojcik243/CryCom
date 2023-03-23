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
    