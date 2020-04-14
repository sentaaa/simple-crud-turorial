import { Component, OnInit } from '@angular/core';
import { MethodCall } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public bookTitle: String = "EREBOS";
  public showAlert: boolean = true;
  public newBookTitle: String ="";
  public books: string []= [
"0",
"1",
"2"
];

  constructor() { }

  ngOnInit(): void {
  }
 public transformBookTitle(title): string{
   return "Buch: " + title;
 }
 public onButtonClicked(){
  // this.showAlert = !this.showAlert;
  this.books.push("Buch Nr." + Math.round(Math.random() * 100));
 }
}
