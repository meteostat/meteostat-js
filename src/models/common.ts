export interface Inventory {
  model?: {
    start: string
    end: string
  }
  hourly?: {
    start: string
    end: string
  }
  daily?: {
    start: string
    end: string
  }
  monthly?: { start: number; end: number }
  normals?: { start: number; end: number }
}

export interface Identifier {
  national: string
  wmo: string
  icao: string
}
export interface Location {
  latitude: number
  longitude: number
  elevation: number
}
export interface Meta {
  source?: string
  start?: number
  end?: number
  exec_time: number
  generated: string
}

export interface Name {
  [key: string]: string
}

export interface MeteostatResponse {
  meta: Meta
  data: any
}

export type Units = 'metric' | 'imperial' | 'scientific'

export enum WeatherConditionCode {
  Clear = 1,
  Fair = 2,
  Cloudy = 3,
  Overcast = 4,
  Fog = 5,
  FreezingFog = 6,
  LightRain = 7,
  Rain = 8,
  HeavyRain = 9,
  FreezingRain = 10,
  HeavyFreezingRain = 11,
  Sleet = 12,
  HeavySleet = 13,
  LightSnowfall = 14,
  Snowfall = 15,
  HeavySnowfall = 16,
  RainShower = 17,
  HeavyRainShower = 18,
  SleetShower = 19,
  HeavySleetShower = 20,
  SnowShower = 21,
  HeavySnowShower = 22,
  Lightning = 23,
  Hail = 24,
  Thunderstorm = 25,
  HeavyThunderstorm = 26,
  Storm = 27,
}
