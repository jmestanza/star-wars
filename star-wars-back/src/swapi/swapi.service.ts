import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { Movie } from './models/movie.dto';
import { PeopleReq } from './models/peoplereq.dto';
import { Planet } from './models/planet.dto';
import { Ship } from './models/ship.dto';

@Injectable()
export class SwapiService {
  apiURL = 'https://swapi.dev/api';
  constructor(private readonly httpService: HttpService) {}

  findAllCharacters(): Observable<AxiosResponse<PeopleReq[]>> {
    return this.httpService
      .get(`${this.apiURL}/people/`)
      .pipe(map((response) => response.data));
  }

  findAllMovies(): Movie[] {
    return [];
  }

  findAllShips(): Ship[] {
    return [];
  }

  findAllPlanets(): Planet[] {
    return [];
  }
}
