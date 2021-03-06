import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/pages/login/login.component';
import { HomeComponent } from './features/pages/home/home.component';
import { AboutComponent } from './features/pages/about/about.component';
import { LogoutComponent } from './features/pages/logout/logout.component';
import { RegisterComponent } from './features/pages/register/register.component';
import { GuidaComponent } from './features/pages/guida/guida.component';
import { GuideComponent } from './features/pages/guide/guide.component';
import { GuidaGuard } from './features/pages/guida/guida.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'guida/:id', component: GuidaComponent, canActivate: [GuidaGuard] } // todo canActivate

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
