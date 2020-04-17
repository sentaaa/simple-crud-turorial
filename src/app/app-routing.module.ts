import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';


const routes: Routes = [
{path: "listBooks",
component: ListBooksComponent,
canActivate: [AuthenticationGuard],

}, {path:"home",
component: HomeComponent,
canActivate: [AuthenticationGuard],

},
{path: "**",
redirectTo:"/home"},

{path: "login",
component: LoginComponent,},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
