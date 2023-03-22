import datetime
import os
import sys

from pandas import DataFrame
 
current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
 
sys.path.append(parent)

from CryCom.Data.crypto_data import CryptoData
from CryCom.Data.influx_cl import InfluxCl



cd = CryptoData()
ic = InfluxCl()

list_coins = cd.get_supported_list_coins_ids()
data = cd.get_actual_data(list_coins)
print(list_coins)

values = []
date = []
list_coins = []
now = datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
for coins, x in data.items():
    for y in x.values():
        values.append(y)
        date.append(now)
        list_coins.append(coins)
        
df = DataFrame()
df.index = date
df['value'] = values

ic.write_data(df, list_coins)