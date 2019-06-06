import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {Routes,RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AddRestaurant } from './addrestaurant';
import { SearchRestaurant } from './app.searchrestaurant';//
import { ShowRestaurant } from './app.showrestaurant';

import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
const route:Routes=[

    {path:"add",component:AddRestaurant},
     {path:"show",component:ShowRestaurant},
    {path:"search",component:SearchRestaurant},

];


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot(route)
        
    ],
    declarations: [
        AppComponent,
        AddRestaurant,
        ShowRestaurant,
        SearchRestaurant
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }