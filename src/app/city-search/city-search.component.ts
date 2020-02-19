import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { WeatherService } from '../weather.service';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  search = new FormControl("", [Validators.minLength(3)]);
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(
      (searchValue: string) => {
        if (!this.search.invalid && searchValue) {
          const userInput = searchValue.split(",").map(space => space.trim());
          this.weatherService.getCurrentWeather(
          userInput[0],
          userInput.length > 1 ? userInput[1] : undefined).subscribe
          (data => console.log(data))
        }
      })
  }
}
