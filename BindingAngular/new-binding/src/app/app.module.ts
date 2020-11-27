import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { RouterModule, Routes } from '@angular/router';

import { NewLogComponent } from './new-log/new-log.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
 
    NewLogComponent,
 
    ForgotComponent,
 
    HomeComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      
        path: '',
        component: NewLogComponent
      },
      {
      path: 'reg',
      component: RegComponent
    },
    {
      path: 'fog',
      component: ForgotComponent
    },
    {
      path: 'myh',
      component: HomeComponent
    }
    
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
