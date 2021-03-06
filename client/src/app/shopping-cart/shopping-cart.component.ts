import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IShoppingCart, IShoppingCartItem } from '../models/shoppingCart';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart$: Observable<IShoppingCart>;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCart$ = this.shoppingCartService.shoppingCart$;
  }
  
  removeShoppingCartItem(item: IShoppingCartItem){
    this.shoppingCartService.removeItemFromShoppingCart(item);
  }

  decrementItemQuantity(item: IShoppingCartItem){
    this.shoppingCartService.decrementItemQuantity(item);
  }

  incrementItemQuantity(item: IShoppingCartItem){
    this.shoppingCartService.incrementItemQuantity(item);
  }

}
