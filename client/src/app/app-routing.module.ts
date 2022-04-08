import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { BlogItemDetailsComponent } from './components/blog-item-details/blog-item-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'create-post',
    component: CreatePostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'blog',
    component: BlogHomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
