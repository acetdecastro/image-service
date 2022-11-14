import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CaslModule } from './casl/casl.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, CaslModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
