import { Controller, Get } from '@nestjs/common';
import { Character } from './models/character.dto';
import { Movie } from './models/movie.dto';
import { Ship } from './models/ship.dto';
import { Planet } from './models/planet.dto';
import { SwapiService } from './swapi.service';
import { PeopleReq } from './models/peoplereq.dto';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

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
