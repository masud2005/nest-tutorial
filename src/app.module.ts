import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MynameController } from './myname/myname.controller';

@Module({
  imports: [BooksModule],
  controllers: [AppController, MynameController],
  providers: [AppService],
})
export class AppModule {}
