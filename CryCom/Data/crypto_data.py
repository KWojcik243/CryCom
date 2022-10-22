from pycoingecko import CoinGeckoAPI
from pandas import DataFrame
from datetime import datetime

class CryptoData:
    cg = CoinGeckoAPI()

    def get_historical_data(self, crypto_id:str, currency:str = 'usd', days:int = 1) -> DataFrame:
        """Method for getting historical data from CoinGecko

        Args:
            crypto_id (str): Name or id of coin from CoinGecko.
            currency (str, optional): Currency in witch you will get data. Defaults to 'usd'.
            days (int, optional): 1 day from query time = 5 minute interval data,
                                            1 - 90 days from query time = hourly data,
                                            above 90 days from query time = daily data (00:00 UTC). Defaults to 1.

        Returns:
            DataFrame: Dataframe that have as index date and column value
        """
        data = list(self.cg.get_coin_market_chart_by_id(id=crypto_id, vs_currency=currency, days=days).values())[0]
        date, value = [], []
        for item in data:
            date.append(datetime.fromtimestamp(item[0]/1000))
            value.append(round(item[1], 2))

        df = DataFrame()
        df.index = date
        df['value'] = value

        return df

    def get_actual_data(self, crypto_ids:list or str, currency:str = 'usd') -> dict:
        """Method for getting actual data from CoinGecko

        Args:
            crypto_ids (list or str): Name/names or id/ids of coin/coins from CoinGecko.
            currency (str, optional): Currency in witch you will get data.. Defaults to 'usd'.

        Returns:
            dict: Dictionary that returns {Coin name:{currency, value}}
        """
        return self.cg.get_price(ids=crypto_ids, vs_currencies=currency)
    
    def get_supported_list_coins_ids(self) -> list:
        """Method for getting list of ids supported by CoinGecko

        Returns:
            list: list of ids
        """
        data = self.cg.get_coins_markets(vs_currency='usd')
        ids = []
        for item in data:
            ids.append(item['id'])
        return ids
