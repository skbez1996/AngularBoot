import {Component, OnInit  } from '@angular/core';
import {MenuService} from './app.menuservice';
import {Menu}     from './app.menu';

//import {MenuService } from "./app.menuservice";
// import { Router } from "@angular/router";

@Component({
    selector:'rest-add',
    templateUrl:'addrestaurant.html'
})

export class AddRestaurant implements OnInit {
    //restaurant:Menu[];

        restaurant:any={};
        // item:any={};
       constructor(private menuservice:MenuService){};
       ngOnInit()
       {
        
       }

        
        addRestauarant(){
           this.menuservice.addAllRestaurant(this.restaurant).subscribe((data:any)=>console.log(data));
            //this.router.navigate(['item']);
         //  this.menuservice.addRestaurant(this.restaurants).subscribe((data:any)
           //  =>console.log(data));
        //     this.router.navigate(['item']);
        }
        
    }