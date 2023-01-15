from decouple import config
from influxdb_client import InfluxDBClient
from influxdb_client.client.write_api import SYNCHRONOUS
from pandas import DataFrame

class InfluxCl:
    influxdb_token = config('DOCKER_INFLUXDB_TOKEN')
    org = config('DOCKER_INFLUXDB_INIT_ORG')
    bucket = config('DOCKER_INFLUXDB_INIT_BUCKET')
    user = config('DOCKER_INFLUXDB_INIT_USERNAME')
    password = config('DOCKER_INFLUXDB_INIT_PASSWORD')
    url = config('DOCKER_INFLUXDB_INIT_URL')

    def __init__(self) -> None:
        self.client = InfluxDBClient(url='http://localhost:8086/', token=self.influxdb_token, org=self.org)

    def write_data(self, data: DataFrame, measurement: str) -> None:
        """Write data to measurement

        Args:
            data (DataFrame): Data with index as date(etc. rfc3339), and value
            measurement (str): Measurement(table) to write
        """

        write_api = self.client.write_api(write_options=SYNCHRONOUS)
        for i in range(len(data)):
            # current_time = datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
            json_body = [
                {
                    "measurement": measurement,
                    "time": data.index[i],
                    "fields": {"value" : data.iat[i, 0]}
                    }
            ]
            write_api.write(bucket=config('DOCKER_INFLUXDB_INIT_BUCKET'), org=config('DOCKER_INFLUXDB_INIT_ORG'), record=json_body)
    
    def read_data(self, range_start: str, measurement: str, field: str) -> list:
        """Read data from influxDB (Actually only High)

        Args:
            range_start (str): Start range for returned data, example: -3y
            measurement (str): Measurement(table) to read
            field (str): Field from measurement to read

        Returns:
            list: Return list of tuples in form [(field_name, value, time),(),...] 
        """
        query_api = self.client.query_api()
        query = f'from(bucket: "{self.bucket}")\
        |> range(start: {range_start})\
        |> filter(fn:(r) => r._measurement == "{measurement}")\
        |> filter(fn:(r) => r._field == "{field}")'
        result = query_api.query(org=self.org, query=query)
        results = []
        for table in result:
            for record in table.records:
                results.append((record.get_field(), record.get_value(), record.get_time()))
        return results

    def delete_data(self, measurement: str, start: str, stop: str) -> None:
        """Delete data from influxDB

        Args:
            measurement (str): Measurement(table) to delete
            start (str): Start date in format RFC3339Nano, example: 2009-01-02T23:00:00Z"
            stop (str): End date in format RFC3339Nano, example: 2009-01-02T23:00:00Z"
        """
        delete_api = self.client.delete_api()
        delete_api.delete(start, stop, f'_measurement="{measurement}"', bucket=self.bucket, org=self.org)

            

    def close_client(self) ->None:
        """Close client
        """
        self.client.close()
      