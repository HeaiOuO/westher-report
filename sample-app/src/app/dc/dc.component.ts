import { Component, OnInit } from '@angular/core';
import { CityReport } from '../city-report'
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  city: CityReport;
  cityid: string = '4140963';
  constructor(private _fetchWeatherService: WeatherService) { }

  ngOnInit() {
    let report = this._fetchWeatherService.getCity(this.cityid)
    .then( city=>{
      console.log(city);
      this.city = new CityReport(
        'Washington, D.C.',
        city.main.humidity,
        city.main.temp_max,
        city.main.temp_min,
        city.weather[0].description,
        'https://images.pexels.com/photos/261093/pexels-photo-261093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        this.cityid
      )
      console.log(this.city);
    })
    .catch(err=>{
      console.log(err);
      this.city = new CityReport(
        'Washington, D.C. - ' + err,
        -1,
        -1,
        -1,
        '',
        'https://images.pexels.com/photos/261093/pexels-photo-261093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        this.cityid
      )
    })
  }

}