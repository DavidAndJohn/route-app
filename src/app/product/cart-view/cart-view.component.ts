import { Component } from '@angular/core';
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent {

  constructor(public cartService:CartService) {
  }

  protected readonly CartService=CartService;

  removeFromCart(id:any):void{
    this.cartService.remove(parseInt(id));
  }

}
