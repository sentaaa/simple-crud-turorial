import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private storageService: StorageService) {}

  public bookTitle: string = "EREBOS";
  public showAlert: boolean = true;
  public newBookTitle: string = "";
  public readonly maxTitleLength: number = 20;
  public books: string[] = [];

  ngOnInit(): void {
    this.books = this.storageService.getBooks();
  }
  public transformBookTitle(title): string {
    return "Buch: " + title;
  }
  public onButtonClicked() {
    this.addNewBook();
  }
  public addNewBook() {
    // this.showAlert = !this.showAlert;
    this.books.push(this.newBookTitle);
    this.storageService.setBooks(this.books);
    this.newBookTitle = "";
  }
}
