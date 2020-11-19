import { Request } from '../request'

import {
  ClimateRequest,
  ClimateResponse,
  DailyRequest,
  DailyResponse,
  HourlyRequest,
  HourlyResponse,
  MetaRequest,
  MetaResponse,
  NearbyRequest,
  NearbyResponse,
  SearchRequest,
  SearchResponse,
} from './types'

export class Stations {
  private readonly request: Request

  constructor(request) {
    this.request = request
  }

  async search(params: SearchRequest): Promise<SearchResponse> {
    return await this.request.makeApiRequest<SearchResponse>(
      'stations/search',
      params,
    )
  }

  async nearby(params: NearbyRequest): Promise<NearbyResponse> {
    return await this.request.makeApiRequest<NearbyResponse>(
      'stations/nearby',
      params,
    )
  }

  async meta(params: MetaRequest): Promise<MetaResponse> {
    return await this.request.makeApiRequest<MetaResponse>(
      'stations/meta',
      params,
    )
  }

  async hourly(params: HourlyRequest): Promise<HourlyResponse> {
    return await this.request.makeApiRequest<HourlyResponse>(
      'stations/hourly',
      params,
    )
  }

  async daily(params: DailyRequest): Promise<DailyResponse> {
    return await this.request.makeApiRequest<DailyResponse>(
      'stations/daily',
      params,
    )
  }

  async climate(params: ClimateRequest): Promise<ClimateResponse> {
    return await this.request.makeApiRequest<ClimateResponse>(
      'stations/climate',
      params,
    )
  }
}
