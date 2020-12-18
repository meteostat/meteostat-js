import {
  StationsClimateRequest,
  StationsClimateResponse,
  StationsDailyRequest,
  StationsDailyResponse,
  StationsHourlyRequest,
  StationsHourlyResponse,
  StationsMetaRequest,
  StationsMetaResponse,
  StationsNearbyRequest,
  StationsNearbyResponse,
  StationsSearchRequest,
  StationsSearchResponse,
} from '../models/stations'
import { Request } from '../request'

export class Stations {
  private readonly request: Request

  constructor(request) {
    this.request = request
  }

  async search(params: StationsSearchRequest): Promise<StationsSearchResponse> {
    return await this.request.makeApiRequest<StationsSearchResponse>(
      'stations/search',
      params,
    )
  }

  async nearby(params: StationsNearbyRequest): Promise<StationsNearbyResponse> {
    return await this.request.makeApiRequest<StationsNearbyResponse>(
      'stations/nearby',
      params,
    )
  }

  async meta(params: StationsMetaRequest): Promise<StationsMetaResponse> {
    return await this.request.makeApiRequest<StationsMetaResponse>(
      'stations/meta',
      params,
    )
  }

  async hourly(params: StationsHourlyRequest): Promise<StationsHourlyResponse> {
    return await this.request.makeApiRequest<StationsHourlyResponse>(
      'stations/hourly',
      params,
    )
  }

  async daily(params: StationsDailyRequest): Promise<StationsDailyResponse> {
    return await this.request.makeApiRequest<StationsDailyResponse>(
      'stations/daily',
      params,
    )
  }

  async climate(
    params: StationsClimateRequest,
  ): Promise<StationsClimateResponse> {
    return await this.request.makeApiRequest<StationsClimateResponse>(
      'stations/climate',
      params,
    )
  }
}
