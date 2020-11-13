import { Point } from './point'
import { Request } from './request'
import { Stations } from './stations'

export default class Meteostat {
  private readonly request: Request
  stations: Stations
  point: Point

  constructor(apiKey: string) {
    this.request = new Request('https://api.meteostat.net/v2', apiKey)
    this.stations = new Stations(this.request)
    this.point = new Point(this.request)
  }
}
