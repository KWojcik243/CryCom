from pycoingecko import CoinGeckoAPI

class CryptoData:
    cg = CoinGeckoAPI()
    def get_historical_data(self, crypto_id:str, currency:str = 'usd', days:int = 1) -> list:
        """Method for getting historical data from CoinGecko

        Args:
            crypto_id (str): Name or id of coin from CoinGecko.
            currency (str, optional): Currency in witch you will get data. Defaults to 'usd'.
            days (int, optional): 1 day from query time = 5 minute interval data,
                                            1 - 90 days from query time = hourly data,
                                            above 90 days from query time = daily data (00:00 UTC). Defaults to 1.

        Returns:
            list: List that containts two-element lists with format [time,data] (time in milliseconds)
        """
        return self.cg.get_coin_market_chart_by_id(id=crypto_id, vs_currency=currency, days=days)

    def get_actual_data(self, crypto_ids:list or str, currency:str = 'usd') -> dict:
        """_summary_

        Args:
            crypto_ids (list or str): Name/names or id/ids of coin/coins from CoinGecko.
            currency (str, optional): Currency in witch you will get data.. Defaults to 'usd'.

        Returns:
            dict: Dictionary that returns {Coin name:{currency, value}}
        """
        return self.cg.get_price(ids=crypto_ids, vs_currencies=currency)
