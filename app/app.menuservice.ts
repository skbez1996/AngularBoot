import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from './app.item';
@Injectable({
    providedIn:'root'
})

export class MenuService{

        constructor(private http:HttpClient){}

        addAllRestaurant(rest:any){
            let restaurant=new FormData();
            rest.append("phone",rest.id);
            
            rest.append("name",rest.name);
            rest.append("address",rest.addressid);
            rest.append("restaurant.menuid",rest.menuid);
            rest.append("restaurant.menuname",rest.menuname);
           
            let items:Item[];
            for (const data in items) {
                rest.append("itemid",rest.menuitemid);
                rest.append("name",rest.menuitemname);
                rest.append("price",rest.menuitemprice);
                rest.append("description",rest.menuitemdesc);
            }
           // menu.append("items[0].name",rest)

            return this.http.post("http://localhost:9098/restaurant/add",rest);
        }
        showRestaurant(){
            return this.http.get("http://localhost:9098/restaurant/show")
        }
}