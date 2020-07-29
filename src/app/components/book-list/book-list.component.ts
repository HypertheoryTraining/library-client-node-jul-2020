import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BookListItem } from '../../models/book-list-item';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {
  @Input() books: BookListItem[] = [];
  constructor() { }

  ngOnInit(): void { }
}
