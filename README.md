# Meteostat

[![npm](https://img.shields.io/npm/v/meteostat)](https://www.npmjs.com/meteostat)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/meteostat)](https://www.npmjs.com/meteostat)
[![NPM](https://img.shields.io/npm/l/meteostat)](LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Meteostat is an open platform which provides free access to weather and climate data.

## Documentation

Meteostat provides a convenient JavaScript wrapper for its JSON API.

See the [JSON API docs](https://dev.meteostat.net/api) for more information about the API.

## Installation

To install the package, run:

```
npm install meteostat
```

or

```
yarn add meteostat
```

## Usage

All you need to get started is an API key, which can be generated [here](https://rapidapi.com/meteostat/api/meteostat/). Once you have your API key, you can create a client:

```javascript
import { Meteostat } from 'meteostat'

const meteostat = new Meteostat('YOUR_API_KEY_HERE')

;(async () => {
  try {
    const { data } = await meteostat.stations.nearby({ lat: '51.5085', lon: '-0.1257' })
    console.log(data)
  } catch (error) {
    console.log(error)
  }
})()
```

## Reference

- https://dev.meteostat.net/api/
- https://rapidapi.com/meteostat/api/meteostat/
## Data License

Meteorological data is provided under the terms of the [Creative Commons Attribution-NonCommercial 4.0 International Public License](https://creativecommons.org/licenses/by-nc/4.0/legalcode). Please be aware that Meteostat uses data which is shared under [WMO resolution 40](https://www.wmo.int/pages/prog/www/ois/Operational_Information/Publications/Congress/Cg_XII/res40_en.html).

All meteorological data sources used by the Meteostat project are listed [here](https://dev.meteostat.net/docs/sources.html).

## Contributing

Issues and pull requests are welcome.

## License

[MIT](https://github.com/rfoell/meteostat/blob/master/LICENSE)
