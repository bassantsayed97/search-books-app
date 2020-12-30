import { Component, OnInit } from '@angular/core';
import {BooksService} from'../Services/books.service';
@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {
  title = 'BookFinderApp';
  data: any;
  name: any;

  constructor(private userservice: BooksService) { }

  ngOnInit(): void {
  }
  handlesearch(){
    this.name=document.getElementById('book');
    this.name=this.name.value;
    this.userservice.setParram(this.name);
    
    this.userservice.searchList().subscribe({
      next: (data) => {
        data['items'].forEach(element => {
          console.log(element.volumeInfo.title);
        });
        this.data=data['items']; 
      },
      error: (msg) => {
        console.log('error',msg);
      }
    })
  }

}
