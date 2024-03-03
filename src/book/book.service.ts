import { Injectable } from '@nestjs/common';
import { BookEntity } from './entity/book.entity';

@Injectable()
export class BookService {
  public booksData: BookEntity[] = [];

  addBook(book: BookEntity): string {
    this.booksData.push(book);
    return 'Book Added Successfully';
  }

  updateBook(id: number, updateBook: BookEntity): string {
    for (let index = 0; index < this.booksData.length; index++) {
      if (this.booksData[index].id == id) {
        this.booksData[index] = updateBook;
      }
    }
    return 'Book Updated Successfully';
  }

  deleteBook(id: number) {
    this.booksData = this.booksData.filter((book) => book.id != id);
    return 'Book has been deleted';
  }

  findBookById(id: number): BookEntity {
    for (let index = 0; index < this.booksData.length; index++) {
      if (this.booksData[index].id == id) {
        return this.booksData[index];
      }
    }
  }

  findAllBooks(): BookEntity[] {
    return this.booksData;
  }
}
