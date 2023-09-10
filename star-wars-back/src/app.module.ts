import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwapiController } from './swapi/swapi.controller';
import { SwapiModule } from './swapi/swapi.module';
import { SwapiService } from './swapi/swapi.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [SwapiModule, HttpModule],
  controllers: [AppController, SwapiController],
  providers: [AppService, SwapiService],
})
export class AppModule {}
