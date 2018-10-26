import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books : any;;
  editBook : boolean;
  eBook : any;

  constructor(public restBook:BooksService) { }

  ngOnInit() {
    this.books = [];
    this.editBook = false;
  }

  getAll() {
    this.books = [];
    this.restBook.getBooks().subscribe((data: {}) => {
      console.log(data);
      this.books = data;
    });
  }

  edit(book: any) {
    this.editBook = true;
    if(book == null) {
      this.eBook = {
        _id : 0,
        name : '',
        author : '',
        editorial : ''
      }
    }
    else {
      this.eBook = book;
    }

  }

  close() {
    this.editBook = false;
  }

  save(book) {
    
      this.restBook.saveBook(book).subscribe(
        operationResult => {
          this.getAll();
        }, error => {
          alert(error);
        }
      );
    
  }

  remove(book: any) {
    this.restBook.removeBook(book).subscribe(
      operationResult => {
        this.getAll();
      }, error => {
        alert(error);
      }
    );
  }


}
