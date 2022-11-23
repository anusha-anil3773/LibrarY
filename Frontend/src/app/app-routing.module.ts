import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { LoginlayoutComponent } from './loginlayout/loginlayout.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { AddbookComponent } from './addbook/addbook.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {
    path: '', component: LoginlayoutComponent,
    children: [
      { path: '', component: SigninComponent, pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'signin', component: SigninComponent },

    ]
  },
  {
    path: 'addbook', canActivate: [AuthGuard], component: AddbookComponent
  },
  {
    path: 'books', component: BookCollectionComponent
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'books/details', component: SinglebookComponent

  },
  {
    path: 'update-book', canActivate: [AuthGuard], component: UpdateBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
