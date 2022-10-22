import datetime
from celery import shared_task
from celery.utils.log import get_task_logger
# from CryCom.Data.crypto_data import CryptoData
# from CryCom.Data.influx_cl import InfluxCl
# import pandas


logger = get_task_logger(__name__)

# def sample_task():
@shared_task
def update_influxdb():
    logger.info("Inserting data")
    
    # cd = CryptoData()
    # ic = InfluxCl()

    # list_coins = cd.get_supported_list_coins_ids()
    # data = cd.get_actual_data(list_coins)
    # for item in list_coins:
    #     df = pandas.DataFrame()
    #     df['value']=[data[item]['usd']]
    #     df['date']=datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    #     df = df.set_index('date')
    #     df.index.name = None
    #     ic.write_data(data=df,measurement=item)
    