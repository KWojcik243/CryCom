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
    
    # cd = CryptoData()
    # ic = InfluxCl()

    # list_coins = cd.get_supported_list_coins_ids()
    # data = cd.get_actual_data(list_coins)

    # values = []
    # date = []
    # now = datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
    # for x in data.values():
    #     for y in x.values():
    #         values.append(y)
    #         date.append(now)
            
    # df = DataFrame()
    # df.index = date
    # df['value'] = values

    # ic.write_data(df, list_coins)
    