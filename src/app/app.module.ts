import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './features/menu/menu.component';
import { HomeComponent } from './features/pages/home/home.component';
import { LoginComponent } from './features/pages/login/login.component';
import { LogoutComponent } from './features/pages/logout/logout.component';
import { AboutComponent } from './features/pages/about/about.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './features/pages/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GuideComponent } from './features/pages/guide/guide.component';
import { GuidaComponent } from './features/pages/guida/guida.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    AboutComponent,
    RegisterComponent,
    GuideComponent,
    GuidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
