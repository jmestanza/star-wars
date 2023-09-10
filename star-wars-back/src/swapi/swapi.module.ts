import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SwapiService } from './swapi.service';

@Module({
  imports: [HttpModule],
  providers: [SwapiService],
})
export class SwapiModule {}
