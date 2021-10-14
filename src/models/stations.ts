import { Units, WeatherConditionCode } from './common'

import { Identifier, Inventory, MeteostatResponse, Name } from '.'

export interface StationsNearbyRequest {
  [key: string]: string | number
  lat: number
  lon: number
  limit?: number
  radius?: number
}

export interface StationsNearbyResponse extends MeteostatResponse {
  data: {
    id: string
    name: Name
    distance: number
  }[]
}

export interface StationsMetaRequest {
  [key: string]: string | number
  id?: string
  wmo?: number
  icao?: string
}

export interface StationsMetaResponse extends MeteostatResponse {
  data: {
    id: string
    name: Name
    country: string
    region: string
    identifier: Identifier
    location: Location
    timezone: string
    inventory: Inventory
  }
}

export interface StationsHourlyRequest {
  [key: string]: string | number
  station: string
  start: string
  end: string
  tz?: string
  model?: number
}

export interface StationsHourlyResponse extends MeteostatResponse {
  data: {
    time: string
    time_local: string
    temp: number
    dwpt: number
    rhum: number
    prcp: number
    snow: number
    wdir: number
    wspd: number
    wpgt: number
    pres: number
    tsun: number
    coco: WeatherConditionCode
  }[]
}

export interface StationsDailyRequest {
  [key: string]: string | number
  station: string
  start: string
  end: string
}

export interface StationsDailyResponse extends MeteostatResponse {
  data: {
    date: string
    tavg: number
    tmin: number
    tmax: number
    prcp: number
    snow: number
    wdir: number
    wspd: number
    wpgt: number
    pres: number
    tsun: number
  }[]
}

export interface StationsMonthlyRequest {
  [key: string]: string | number
  station: string
  start: string
  end: string
}

export interface StationsMonthlyResponse extends MeteostatResponse {
  data: {
    date: string
    tavg: number
    tmin: number
    tmax: number
    prcp: number
    snow: number
    wdir: number
    wspd: number
    wpgt: number
    pres: number
    tsun: number
  }[]
}

export interface StationsNormalsRequest {
  [key: string]: string | number
  station: string
  start?: string
  end?: string
  units?: Units
}

export interface StationsNormalsResponse extends MeteostatResponse {
  data: {
    month: number
    tavg: number
    tmin: number
    tmax: number
    prcp: number
    pres: number
    tsun: number
  }[]
}
