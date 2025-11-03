import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  private books: Book[] = [];
  private idCounter = 1;

  // CREATE
  create(createBookDto: CreateBookDto) {
    const newBook: Book = {
      id: this.idCounter++,
      ...createBookDto,
    };
    this.books.push(newBook);
    return newBook;
  }

  // READ (all)
  findAll(): Book[] {
    return this.books;
  }

  // READ (one)
  findOne(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  // UPDATE
  update(id: number, updateBookDto: UpdateBookDto): Book | undefined {
    const index = this.books.findIndex((book) => book.id === id);
    if (index === -1) return undefined;
    this.books[index] = { ...this.books[index], ...updateBookDto };
    return this.books[index];
  }

  // DELETE
  remove(id: number): boolean {
    const index = this.books.findIndex((book) => book.id === id);
    if (index === -1) return false;
    this.books.splice(index, 1);
    return true;
  }
}
