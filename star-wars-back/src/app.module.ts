import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwapiController } from './swapi/swapi.controller';
import { ProductsService } from './products/products.service';
import { SwapiModule } from './swapi/swapi.module';
import { SwapiService } from './swapi/swapi.service';
import { ProductsService } from './products/products.service';

@Module({
  imports: [SwapiModule],
  controllers: [AppController, SwapiController],
  providers: [AppService, ProductsService, SwapiService],
})
export class AppModule {}
