import { Component, OnInit } from '@angular/core';
import { BooksDataService } from 'src/app/services/books-data.service';
import { Observable } from 'rxjs';
import { BookListItem } from 'src/app/models/book-list-item';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<BookListItem[]>;
  constructor(private service: BooksDataService) { }

  ngOnInit(): void {
    this.service.loadData(); // tell it to load the data.
    this.books$ = this.service.getBookObservable();
  }

}
