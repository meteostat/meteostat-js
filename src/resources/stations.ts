import {
  StationsDailyRequest,
  StationsDailyResponse,
  StationsHourlyRequest,
  StationsHourlyResponse,
  StationsMetaRequest,
  StationsMetaResponse,
  StationsMonthlyRequest,
  StationsMonthlyResponse,
  StationsNearbyRequest,
  StationsNearbyResponse,
  StationsNormalsRequest,
  StationsNormalsResponse,
} from '../models/stations'
import { Request } from '../request'

export class Stations {
  private readonly request: Request

  constructor(request: Request) {
    this.request = request
  }

  async daily(params: StationsDailyRequest): Promise<StationsDailyResponse> {
    return await this.request.makeApiRequest('stations/daily', params)
  }

  async hourly(params: StationsHourlyRequest): Promise<StationsHourlyResponse> {
    return await this.request.makeApiRequest('stations/hourly', params)
  }

  async meta(params: StationsMetaRequest): Promise<StationsMetaResponse> {
    return await this.request.makeApiRequest('stations/meta', params)
  }

  async monthly(
    params: StationsMonthlyRequest,
  ): Promise<StationsMonthlyResponse> {
    return await this.request.makeApiRequest('stations/monthly', params)
  }

  async nearby(params: StationsNearbyRequest): Promise<StationsNearbyResponse> {
    return await this.request.makeApiRequest('stations/nearby', params)
  }
  async normals(
    params: StationsNormalsRequest,
  ): Promise<StationsNormalsResponse> {
    return await this.request.makeApiRequest('stations/normals', params)
  }
}
