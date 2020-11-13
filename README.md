# Meteostat

[![npm](https://img.shields.io/npm/v/meteostat)](https://www.npmjs.com/meteostat)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/meteostat)](https://www.npmjs.com/meteostat)
[![NPM](https://img.shields.io/npm/l/meteostat)](LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Meteostat is an open platform which provides free access to weather and climate data.

## Documentation

See the [JSON API docs](https://dev.meteostat.net/api/) for more information about the API.

## Installation

To install the package, run:

```
npm install meteostat
# or
yarn add meteostat
```

## Usage

All you need to get started is your api key, which can be generated [here](https://auth.meteostat.net/). Create a client with the given api key:

```javascript
import Meteostat from 'meteostat'

const meteostat = new Meteostat('YOUR_API_KEY_HERE')

;(async () => {
  try {
    const { data } = await meteostat.stations.search({ query: 'Sao Paulo' })
    console.log(data)
  } catch (error) {
    console.log(error)
  }
})()
```

## Reference

- [Weather Stations](#stations)
  - [Finding Weather Stations](#stations_search)
  - [Nearby Weather Stations](#stations_nearby)
  - [Meta Data](#stations_meta)
  - [Hourly Data](#stations_hourly)
  - [Daily Data](#stations_daily)
  - [Climate Normals](#stations_climate)
- [Point Data](#point)
  - [Hourly Data](#point_hourly)
  - [Daily Data](#point_daily)
  - [Climate Normals](#point_climate)

## <a name="stations"></a> Weather Stations

### <a name="stations_search"></a> Finding Weather Stations

#### Parameters

| Parameter | Description                   | Type    | Required | Default |
| --------- | ----------------------------- | ------- | -------- | ------- |
| query     | The search string             | String  | Yes      |         |
| limit     | The maximum number of results | Integer | No       | 8       |

#### Response

| Parameter | Description                                                                                    | Type    |
| --------- | ---------------------------------------------------------------------------------------------- | ------- |
| id        | The Meteostat ID of the weather station                                                        | String  |
| name      | Object containing the name of the weather stations in different languages                      | Object  |
| country   | ISO 3166-1 alpha-2 country code of the weather station                                         | String  |
| region    | The ISO 3166-2 state or region code of the weather station                                     | String  |
| national  | The national ID of the weather station                                                         | String  |
| wmo       | The WMO ID of the weather station                                                              | Integer |
| icao      | The ICAO ID of the weather station                                                             | String  |
| iata      | The IATA ID of the weather station                                                             | String  |
| latitude  | The latitude of the weather station                                                            | Float   |
| longitude | The longitude of the weather station                                                           | Float   |
| elevation | The elevation of the weather station in meters above sea level                                 | Integer |
| timezone  | The time zone of the weather station                                                           | String  |
| active    | A boolean value which is true if the weather station reported data within the previous 90 days | Boolean |

#### Example

```javascript
meteostat.stations.search({ query: 'Sao Paulo' })
```

### <a name="stations_nearby"></a> Nearby Weather Stations

#### Parameters

| Parameter | Description                           | Types   | Required | Default |
| --------- | ------------------------------------- | ------- | -------- | ------- |
| lat       | The latitude of the location          | Float   | Yes      |         |
| lon       | The longitude of the location         | Float   | Yes      |         |
| limit     | The maximum number of results         | Integer | No       | 8       |
| radius    | The radius of the query in kilometers | Integer | No       | 100     |

#### Response

| Parameter | Description                                                                                    | Type    |
| --------- | ---------------------------------------------------------------------------------------------- | ------- |
| id        | The Meteostat ID of the weather station                                                        | String  |
| name      | Object containing the name of the weather stations in different languages                      | Object  |
| active    | A boolean value which is true if the weather station reported data within the previous 90 days | Boolean |
| distance  | The distance to the geo location defined in the request                                        | Float   |

#### Example

```javascript
meteostat.stations.nearby({
  lat: -23.5505199,
  lon: -46.6333094,
})
```

### <a name="stations_meta"></a> Meta Data

#### Parameters

| Parameter | Description                             | Type    | Required | Default |
| --------- | --------------------------------------- | ------- | -------- | ------- |
| id        | The Meteostat ID of the weather station | String  | No       |         |
| wmo       | The WMO ID of the weather station       | Integer | No       |         |
| icao      | The ICAO ID of the weather station      | String  | No       |         |

#### Response

| Parameter | Description                                                               | Type    |
| --------- | ------------------------------------------------------------------------- | ------- |
| id        | The Meteostat ID of the weather station                                   | String  |
| name      | Object containing the name of the weather stations in different languages | Object  |
| country   | ISO 3166-1 alpha-2 country code of the weather station                    | String  |
| region    | ISO 3166-2 state or region code of the weather station                    | String  |
| national  | The national ID of the weather station                                    | String  |
| wmo       | The WMO ID of the weather station                                         | Integer |
| icao      | The ICAO ID of the weather station                                        | String  |
| iata      | The IATA ID of the weather station                                        | String  |
| latitude  | The latitude of the weather station                                       | Float   |
| longitude | The longitude of the weather station                                      | Float   |
| elevation | The elevation of the weather station in meters above sea level            | Integer |
| timezone  | The time zone of the weather station                                      | String  |
| inventory | Object containing the periods of available data for this weather station  | Object  |

#### Example

```javascript
meteostat.stations.meta({
  id: '83779',
})
```

### <a name="stations_hourly"></a> Hourly Data

#### Parameters

| Parameter | Description                                                                                                                   | Type    | Required | Default |
| --------- | ----------------------------------------------------------------------------------------------------------------------------- | ------- | -------- | ------- |
| station   | The weather station ID                                                                                                        | String  | Yes      |         |
| start     | The start date of the query (format: YYYY-MM-DD)                                                                              | String  | Yes      |         |
| end       | The end date of the query (format: YYYY-MM-DD)                                                                                | String  | Yes      |         |
| tz        | The time zone according to the tz database                                                                                    | String  | No       | UTC     |
| model     | A boolean parameter that specifies whether missing observations should be substituted with statistically optimized model data | Integer | No       | 0       |

#### Response

| Parameter  | Description                                                                | Type    |
| ---------- | -------------------------------------------------------------------------- | ------- |
| time       | UTC time stamp (format: YYYY-MM-DD hh:mm:ss)                               | String  |
| time_local | Local time stamp (format: YYYY-MM-DD hh:mm:ss); only provided if tz is set | String  |
| temp       | The air temperature in °C                                                  | Float   |
| dwpt       | The dew point in °C                                                        | Float   |
| rhum       | The relative humidity in percent (%)                                       | Integer |
| prcp       | The one hour precipitation total in mm                                     | Float   |
| snow       | The snow depth in mm                                                       | Integer |
| wdir       | The wind direction in degrees (°)                                          | Integer |
| wspd       | The average wind speed in km/h                                             | Float   |
| wpgt       | The peak wind gust in km/h                                                 | Float   |
| pres       | The sea-level air pressure in hPa                                          | Float   |
| tsun       | The one hour sunshine total in minutes (m)                                 | Integer |
| coco       | The weather condition code                                                 | Integer |

#### Example

```javascript
meteostat.stations.hourly({
  station: 83779,
  start: '2020-11-12',
  end: '2020-11-12',
})
```

### <a name="stations_daily"></a> Daily Data

#### Parameters

| Parameter | Description                                      | Type   | Required | Default |
| --------- | ------------------------------------------------ | ------ | -------- | ------- |
| station   | The weather station ID                           | String | Yes      |         |
| start     | The start date of the query (format: YYYY-MM-DD) | String | Yes      |         |
| end       | The end date of the query (format: YYYY-MM-DD)   | String | Yes      |         |

#### Response

| Parameter | Description                               | Type    |
| --------- | ----------------------------------------- | ------- |
| date      | The date string (format: YYYY-MM-DD)      | String  |
| tavg      | The average air temperature in °C         | Float   |
| tmin      | The minimum air temperature in °C         | Float   |
| tmax      | The maximum air temperature in °C         | Float   |
| prcp      | The daily precipitation total in mm       | Float   |
| snow      | The snow depth in mm                      | Integer |
| wdir      | The average wind direction in degrees (°) | Integer |
| wspd      | The average wind speed in km/h            | Float   |
| wpgt      | The peak wind gust in km/h                | Float   |
| pres      | The average sea-level air pressure in hPa | Float   |
| tsun      | The daily sunshine total in minutes (m)   | Integer |

#### Example

```javascript
meteostat.stations.daily({
  station: 83779,
  start: '2020-11-12',
  end: '2020-11-12',
})
```

### <a name="stations_climate"></a> Climate Normals

#### Parameters

| Parameter | Description            | Type   | Required | Default |
| --------- | ---------------------- | ------ | -------- | ------- |
| station   | The weather station ID | String | Yes      |         |

#### Response

Returns an array with the following for each month:

| Parameter | Description                                | Type    |
| --------- | ------------------------------------------ | ------- |
| month     | The integer number of the month (1 to 12)  | Integer |
| tavg      | The mean temperature in °C                 | Float   |
| tmin      | The average minimum temperature in °C      | Float   |
| tmax      | The average maximum temperature in °C      | Float   |
| prcp      | The average total precipitation in mm      | Integer |
| pres      | The average sea-level air pressure in hPa  | Float   |
| tsun      | The average sunshine duration in hours (h) | Integer |

#### Example

```javascript
meteostat.point.climate({
  station: 83779,
})
```

## <a name="point"></a> Point Data

### <a name="point_hourly"></a> Hourly Data

#### Parameters

| Parameter | Description                                      | Type    | Required | Default |
| --------- | ------------------------------------------------ | ------- | -------- | ------- |
| lat       | The latitude of the geographic location          | Float   | Yes      |         |
| lon       | The longitude of the geographic location         | Float   | Yes      |         |
| alt       | The elevation of the geographic location         | Integer | No       | 0       |
| start     | The start date of the query (format: YYYY-MM-DD) | String  | Yes      |         |
| end       | The end date of the query (format: YYYY-MM-DD)   | String  | Yes      |         |
| tz        | The time zone according to the tz database       | String  | No       | UTC     |

#### Response

| Parameter  | Description                                                                | Type    |
| ---------- | -------------------------------------------------------------------------- | ------- |
| time       | UTC time stamp (format: YYYY-MM-DD hh:mm:ss)                               | String  |
| time_local | Local time stamp (format: YYYY-MM-DD hh:mm:ss); only provided if tz is set | String  |
| temp       | The air temperature in °C                                                  | Float   |
| dwpt       | The dew point in °C                                                        | Float   |
| rhum       | The relative humidity in percent (%)                                       | Integer |
| prcp       | The one hour precipitation total in mm                                     | Float   |
| snow       | The snow depth in mm                                                       | Integer |
| wdir       | The wind direction in degrees (°)                                          | Integer |
| wspd       | The average wind speed in km/h                                             | Float   |
| wpgt       | The peak wind gust in km/h                                                 | Float   |
| pres       | The sea-level air pressure in hPa                                          | Float   |
| tsun       | The one hour sunshine total in minutes (m)                                 | Integer |
| coco       | The weather condition code                                                 | Integer |

#### Example

```javascript
meteostat.point.hourly({
  lat: -23.5505199,
  lon: -46.6333094,
  start: '2020-11-12',
  end: '2020-11-12',
})
```

### <a name="point_daily"></a> Daily Data

#### Parameters

| Parameter | Description                                      | Type    | Required | Default |
| --------- | ------------------------------------------------ | ------- | -------- | ------- |
| lat       | The latitude of the geographic location          | Float   | Yes      |         |
| lon       | The longitude of the geographic location         | Float   | Yes      |         |
| alt       | The elevation of the geographic location         | Integer | No       | 0       |
| start     | The start date of the query (format: YYYY-MM-DD) | String  | Yes      |         |
| end       | The end date of the query (format: YYYY-MM-DD)   | String  | Yes      |         |

#### Response

| Parameter | Description                               | Type    |
| --------- | ----------------------------------------- | ------- |
| date      | The date string (format: YYYY-MM-DD)      | String  |
| tavg      | The average air temperature in °C         | Float   |
| tmin      | The minimum air temperature in °C         | Float   |
| tmax      | The maximum air temperature in °C         | Float   |
| prcp      | The daily precipitation total in mm       | Float   |
| snow      | The snow depth in mm                      | Integer |
| wdir      | The average wind direction in degrees (°) | Integer |
| wspd      | The average wind speed in km/h            | Float   |
| wpgt      | The peak wind gust in km/h                | Float   |
| pres      | The average sea-level air pressure in hPa | Float   |
| tsun      | The daily sunshine total in minutes (m)   | Integer |

#### Example

```javascript
meteostat.point.daily({
  lat: -23.5505199,
  lon: -46.6333094,
  start: '2020-11-12',
  end: '2020-11-12',
})
```

### <a name="point_climate"></a> Climate Normals

#### Parameters

| Parameter | Description                              | Type    | Required | Default |
| --------- | ---------------------------------------- | ------- | -------- | ------- |
| lat       | The latitude of the geographic location  | Float   | Yes      |         |
| lon       | The longitude of the geographic location | Float   | Yes      |         |
| alt       | The elevation of the geographic location | Integer | No       | 0       |

#### Response

Returns an array with the following for each month:

| Parameter | Description                                | Type    |
| --------- | ------------------------------------------ | ------- |
| month     | The integer number of the month (1 to 12)  | Integer |
| tavg      | The mean temperature in °C                 | Float   |
| tmin      | The average minimum temperature in °C      | Float   |
| tmax      | The average maximum temperature in °C      | Float   |
| prcp      | The average total precipitation in mm      | Integer |
| pres      | The average sea-level air pressure in hPa  | Float   |
| tsun      | The average sunshine duration in hours (h) | Integer |

#### Example

```javascript
meteostat.point.climate({
  lat: -23.5505199,
  lon: -46.6333094,
})
```

## Data License

Meteorological data is provided under the terms of the [Creative Commons Attribution-NonCommercial 4.0 International Public License](https://creativecommons.org/licenses/by-nc/4.0/legalcode). Please be aware that Meteostat uses data which is shared under [WMO resolution 40](https://www.wmo.int/pages/prog/www/ois/Operational_Information/Publications/Congress/Cg_XII/res40_en.html).

All meteorological data sources used by the Meteostat project are listed [here](https://dev.meteostat.net/docs/sources.html).

## Contributing

Issues and pull requests are welcome.

## License

[MIT](https://github.com/rfoell/meteostat/blob/master/LICENSE)
