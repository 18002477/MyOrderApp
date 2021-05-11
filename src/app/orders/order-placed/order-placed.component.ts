import { Component , OnInit, OnDestroy} from '@angular/core';
import { OrdersService } from '../order.Service';
import { Order } from '../order.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})
export class OrderPlacedComponent implements OnInit, OnDestroy
{
  orders: Order [] =[];
  constructor(public orderService: OrdersService){}
  private ordersSubscription: Subscription;

  ngOnInit(){
    this.orderService.getOrders();
    this.ordersSubscription = this.orderService.getPostUpdateListener()
    .subscribe((orders:Order[]) =>
    {
      this.orders = orders;
    });

  }
  ngOnDestroy()
  {
    this.ordersSubscription.unsubscribe();
  }


}
