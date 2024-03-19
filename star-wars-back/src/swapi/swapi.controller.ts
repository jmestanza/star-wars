import { Controller, Get } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Movie } from './models/movie.dto';
import { PeopleReq } from './models/peoplereq.dto';
import { Planet } from './models/planet.dto';
import { Ship } from './models/ship.dto';
import { SwapiService } from './swapi.service';

@Controller('swapi')
export class SwapiController {
  constructor(private swapiService: SwapiService) {}

  @Get('characters')
  findAllCharacters(): Observable<AxiosResponse<PeopleReq[]>> {
    return this.swapiService.findAllCharacters();
  }

  @Get('movies')
  findAllMovies(): Movie[] {
    return [{ name: 'exampleMovieee' }];
  }

  @Get('ships')
  findAllShips(): Ship[] {
    return [];
  }

  @Get('planets')
  findAllPlanets(): Planet[] {
    return [];
  }
}
