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
      'get',
      '/stations/search',
      params,
    )
  }

  async nearby(params: NearbyRequest): Promise<NearbyResponse> {
    return await this.request.makeApiRequest<NearbyResponse>(
      'get',
      '/stations/nearby',
      params,
    )
  }

  async meta(params: MetaRequest): Promise<MetaResponse> {
    return await this.request.makeApiRequest<MetaResponse>(
      'get',
      '/stations/meta',
      params,
    )
  }

  async hourly(params: HourlyRequest): Promise<HourlyResponse> {
    return await this.request.makeApiRequest<HourlyResponse>(
      'get',
      '/stations/hourly',
      params,
    )
  }

  async daily(params: DailyRequest): Promise<DailyResponse> {
    return await this.request.makeApiRequest<DailyResponse>(
      'get',
      '/stations/daily',
      params,
    )
  }

  async climate(params: ClimateRequest): Promise<ClimateResponse> {
    return await this.request.makeApiRequest<ClimateResponse>(
      'get',
      '/stations/climate',
      params,
    )
  }
}
