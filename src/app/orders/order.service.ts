import { Order } from './order.model';
import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class OrdersService
{
  constructor(private http: HttpClient){}
  private orders: Order [] = [];
  private updatedOrders = new Subject<Order[]>();

  getOrders()
  {
    //return [...this.orders];
    this.http.get<{message:string, order:Order[]}>('https://localhost:3000/api/orders')
    .subscribe((orderData)=>
    {
      this.orders = orderData.order;
      this.updatedOrders.next([...this.orders]);
    });
  }

  getPostUpdateListener()
  {
    return this.updatedOrders.asObservable();
  }

  addOrders(userName: string,Email: string,PlacedOrder: string )
  {
    const order: Order = {id:null, userName: userName, Email:Email,PlacedOrder:PlacedOrder};
    this.orders.push(order);
    this.updatedOrders.next([...this.orders]);
  }

}
