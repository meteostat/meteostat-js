interface Name {
  [key: string]: string
}

interface Inventory {
  hourly?: {
    start: string
    end: string
  }
  daily?: {
    start: string
    end: string
  }
}

export interface SearchRequest {
  query: string
  limit?: number
}

export interface SearchResponse {
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
}

export interface NearbyRequest {
  lat: number
  lon: number
  limit?: number
  radius?: number
}

export interface NearbyResponse {
  id: string
  name: Name
  active: boolean
  distance: number
}

export interface MetaRequest {
  id?: string
  wmo?: number
  icao?: string
}

export interface MetaResponse {
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
  inventory: Inventory
}

export interface HourlyRequest {
  station: string
  start: string
  end: string
  tz?: string
  model?: number
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
  station: string
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
  station: string
}

export interface ClimateResponse {
  meta: ClimateMeta
  data: ClimateData[]
}
