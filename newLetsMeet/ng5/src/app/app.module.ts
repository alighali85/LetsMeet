import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyBr3ZD_dHrN9TIcC7TzF423A2TX8hEwcIw",
    authDomain: "livedate-46649.firebaseapp.com",
    databaseURL: "https://livedate-46649.firebaseio.com",
    projectId: "livedate-46649",
    storageBucket: "livedate-46649.appspot.com",
    messagingSenderId: "557029138050"

}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp( firebaseConfig )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
