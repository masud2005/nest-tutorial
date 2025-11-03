/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Patch,
    Post
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import type { Book } from './interfaces/book.interface';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll(): Book[] {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Book {
    const book = this.booksService.findOne(+id);
    if (!book) throw new NotFoundException(`Book with id ${id} not found`);
    return book;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): Book {
    const updated = this.booksService.update(+id, updateBookDto);
    if (!updated) throw new NotFoundException(`Book with id ${id} not found`);
    return updated;
  }

  @Delete(':id')
  remove(@Param('id') id: string): { success: boolean } {
    const deleted = this.booksService.remove(+id);
    return { success: deleted };
  }
}