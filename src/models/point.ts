import { WeatherConditionCode } from './common'

import { MeteostatResponse, Units } from '.'

export interface PointHourlyRequest {
  [key: string]: string | number
  lat: number
  lon: number
  alt?: number
  start: string
  end: string
  tz?: string
  model?: string
  freq?: string
  units?: Units
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
  [key: string]: string | number
  lat: number
  lon: number
  alt?: number
  start: string
  end: string
  model?: string
  freq?: string
  units?: Units
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

export interface PointMonthlyRequest {
  [key: string]: string | number
  lat: number
  lon: number
  alt?: number
  start: string
  end: string
  model?: string
  freq?: string
  units?: Units
}

export interface PointMonthlyResponse extends MeteostatResponse {
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

export interface PointNormalsRequest {
  [key: string]: string | number
  lat: number
  lon: number
  alt?: number
  units?: Units
}

export interface PointNormalsResponse extends MeteostatResponse {
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
