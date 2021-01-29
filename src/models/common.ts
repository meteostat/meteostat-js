export interface Inventory {
  hourly?: {
    start: string
    end: string
  }
  daily?: {
    start: string
    end: string
  }
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
