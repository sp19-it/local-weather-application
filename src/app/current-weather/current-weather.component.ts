import { Component, OnInit, Input } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() current: ICurrentWeather
  constructor(private weatherService: WeatherService) {
   }

  ngOnInit() {
    // this.weatherService.getCurrentWeather("Seattle", "US")
    // .subscribe(data => this.current = data)
  }
}
