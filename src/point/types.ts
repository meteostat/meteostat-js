export interface HourlyRequest {
  lat: number
  lon: number
  alt?: number
  start: string
  end: string
  tz?: string
}

export interface HourlyResponse {
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
  coco: number
}

export interface DailyRequest {
  lat: number
  lon: number
  alt?: number
  start: string
  end: string
}

export interface DailyResponse {
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
}

interface ClimateMeta {
  source: string
  start: number
  end: number
  exec_time: number
  generated: string
}

interface ClimateData {
  month: number
  tavg: number
  tmin: number
  tmax: number
  prcp: number
  pres: number
  tsun: number
}

export interface ClimateRequest {
  lat: number
  lon: number
  alt?: number
}

export interface ClimateResponse {
  meta: ClimateMeta
  data: ClimateData[]
}
