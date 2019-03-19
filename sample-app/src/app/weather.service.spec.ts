import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { inject } from '@angular/core';

describe('WeatherService', () => {
  beforeEach(() => 
  TestBed.configureTestingModule({
    providers:[WeatherService]
  })
  );

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));

});
