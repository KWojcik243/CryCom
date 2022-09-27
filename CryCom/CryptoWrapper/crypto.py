from pycoingecko import CoinGeckoAPI
cg = CoinGeckoAPI()
data = cg.get_price(ids=['bitcoin', 'ethereum','litecoin'], vs_currencies='usd')
print(data)
data = cg.get_coin_market_chart_by_id(id='bitcoin',vs_currency='usd',days='3')
print(data)
