import { Injectable } from '@angular/core';
import { IWeatherService } from './iweather-service';
import { ICurrentWeather } from './icurrent-weather';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WeatherFakeService implements IWeatherService {
  private fakeWeather: ICurrentWeather ={
    city: "Seoul",
    country: "KR",
    date: 1485789600,
    image: "",
    temperature: 280.32,
    description: "Sunny"
  }
  constructor() {}

  public getCurrentWeather(searchText: string | number, country? : string): Observable<ICurrentWeather> {
    return of(this.fakeWeather)
  }
}

