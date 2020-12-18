import { Inventory, MeteostatResponse, Name } from '.'
import { WeatherConditionCode } from './common'

export interface StationsSearchRequest {
  query: string
  limit?: number
}

export interface StationsSearchResponse extends MeteostatResponse {
  data: {
    id: string
    name: Name
    country: string
    region: string
    national: string
    wmo: number
    icao: string
    iata: string
    latitude: number
    longitude: number
    elevation: number
    timezone: string
    active: boolean
  }[]
}

export interface StationsNearbyRequest {
  lat: number
  lon: number
  limit?: number
  radius?: number
}

export interface StationsNearbyResponse extends MeteostatResponse {
  data: {
    id: string
    name: Name
    active: boolean
    distance: number
  }[]
}

export interface StationsMetaRequest {
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
    national: string
    wmo: string
    icao: string
    iata: string
    latitude: number
    longitude: number
    elevation: number
    timezone: string
    inventory: Inventory
  }
}

export interface StationsHourlyRequest {
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

export interface StationsClimateRequest {
  station: string
}

export interface StationsClimateResponse extends MeteostatResponse {
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
