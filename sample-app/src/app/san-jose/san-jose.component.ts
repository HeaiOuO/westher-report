import { Component, OnInit } from '@angular/core';
import { CityReport } from '../city-report'
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  city: CityReport;
  cityid: string = '5392171';
  constructor(private _fetchWeatherService: WeatherService) { }

  ngOnInit() {
    let report = this._fetchWeatherService.getCity(this.cityid)
    .then( city=>{
      console.log(city);
      this.city = new CityReport(
        'San Jose, CA',
        city.main.humidity,
        city.main.temp_max,
        city.main.temp_min,
        city.weather[0].description,
        'https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        this.cityid
      )
      console.log(this.city);
    })
    .catch(err=>{
      console.log(err);
      this.city = new CityReport(
        'San Jose, WA - ' + err,
        -1,
        -1,
        -1,
        '',
        'https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        this.cityid
      )
    })
  }

}