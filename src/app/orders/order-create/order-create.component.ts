import { Component} from '@angular/core';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent{
  userName='';
  newOrder='Order is placed';
  onAddOrder()
  {
    this.newOrder = this.userName;
  }
}
