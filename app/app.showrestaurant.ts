import { Component, OnInit } from '@angular/core';
import { Restaurant } from './app.restaurant';
import {MenuService} from './app.menuservice';

@Component({
    selector:'show-rest',
    templateUrl:'app.showrestaurant.html'
})

 export class ShowRestaurant implements OnInit {

//     showrestaurant(){
       res:Restaurant[];
         constructor(private menuservice:MenuService){}
ngOnInit(){
  this.menuservice.showRestaurant().subscribe((data:any)=>this.res=data);
 }
 showRestaurant(){
    //this.menuservice.showRestaurant().subscribe((data:any)=>this.res=data);
 }

    }
