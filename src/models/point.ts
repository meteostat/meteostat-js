import { MeteostatResponse } from '.'
import { WeatherConditionCode } from './common'

export interface PointHourlyRequest {
  lat: number
  lon: number
  alt?: number
  start: string
  end: string
  tz?: string
}

export interface PointHourlyResponse extends MeteostatResponse {
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

export interface PointDailyRequest {
  lat: number
  lon: number
  alt?: number
  start: string
  end: string
}

export interface PointDailyResponse extends MeteostatResponse {
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

export interface PointClimateRequest {
  lat: number
  lon: number
  alt?: number
}

export interface PointClimateResponse extends MeteostatResponse {
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
