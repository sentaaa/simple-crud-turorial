import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListBooksComponent } from './components/list-books/list-books.component';


const routes: Routes = [
{path: "listBooks",
component: ListBooksComponent,

}, {path:"",
component: HomeComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
