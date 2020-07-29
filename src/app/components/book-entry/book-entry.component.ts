import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksDataService } from 'src/app/services/books-data.service';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css'],
})
export class BookEntryComponent implements OnInit {
  bookForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: BooksDataService) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      author: ['', [Validators.required]],
      year: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      created: [new Date().toISOString(), [Validators.required]],
    });
  }

  get title() { return this.bookForm.get('title'); }

  submit() {
    this.service.addBook(this.bookForm.value);
    this.bookForm.reset();
  }
}
