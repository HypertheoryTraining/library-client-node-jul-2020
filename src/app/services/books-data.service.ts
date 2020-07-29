import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookListItem } from '../models/book-list-item';
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { BookCreate } from '../models/book-create'
@Injectable()
export class BooksDataService {
    private data: BookListItem[] = [];
    private subject = new BehaviorSubject<BookListItem[]>([]);

    constructor(private client: HttpClient) { }

    loadData() {
        this.client.get<{ books: BookListItem[] }>('http://localhost/books')
            .pipe(
                map(response => response.books)
            ).subscribe(books => {
                this.data = books;
                this.subject.next(books);
            })
    }

    getBookObservable() {
        return this.subject.asObservable();
    }

    addBook(bookToAdd: BookCreate) {
        this.client.post<BookListItem>('http://localhost/books', bookToAdd)
            .subscribe(book => {
                this.data = [book, ...this.data];
                this.subject.next(this.data);
            })

    }
}