import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './user';
import { UserModel } from './user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type : 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345678',                                                                                                                                                                                           
    database: 'nestjs',
    entities: [UserEntity],
    synchronize: true

  }), UserModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
