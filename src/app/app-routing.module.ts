import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { pathToFileURL } from 'url';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
{path: "listBooks",
component: ListBooksComponent,
canActivate:  [AuthenticationGuard],

}, {path:"home",
component: HomeComponent,},
{path: "**",
redirectTo:"/home"},

{path: "login",
component: LoginComponent,}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
