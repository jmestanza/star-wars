import { Controller, Get } from '@nestjs/common';
import { Character } from './models/character.dto';
import { Movie } from './models/movie.dto';
import { Ship } from './models/ship.dto';
import { Planet } from './models/planet.dto';

@Controller('swapi')
export class SwapiController {
  @Get('characters')
  findAllCharacters(): Character[] {
    return [];
  }

  @Get('movies')
  findAllMovies(): Movie[] {
    return [];
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
