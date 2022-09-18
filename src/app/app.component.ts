import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Weather} from "./weather/weather";
import {WeatherServiceService} from "./weather/weather-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title: string;
  weathers: Weather[] = [];



  constructor(private weatherService: WeatherServiceService) {
    this.title = 'Dream Hotel System';

  }

  ngOnInit() {
    this.weatherService.findWeather().subscribe(date => {
      this.weathers = date;
    });
  }

}
