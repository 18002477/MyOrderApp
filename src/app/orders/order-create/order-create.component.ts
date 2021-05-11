import { Component, EventEmitter, Output} from '@angular/core';
import { Order } from '../order.model';
import { NgForm } from '@angular/forms';
import { OrdersService } from '../order.Service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})

export class OrderCreateComponent{

  // Error messages
  enteredUserNameError='Please enter a user name in the correct form';
  enteredEmailError='Please enter a correctly formatted email address';
  enteredOrderError='Please enter an order of no more than 50 characters';

  //enteredUserName='';
  //enteredEmail='';
  //enteredOrder='';

  constructor(public orderService:OrdersService){}

  onAddOrder(Orderform: NgForm)
  {

    if(Orderform.invalid)
    {
      return;
    }

    this.orderService.addOrders(Orderform.value.enteredUserName,Orderform.value.enteredEmail
      ,Orderform.value.enteredOrder);

  }

}
