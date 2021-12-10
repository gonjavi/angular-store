import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements  OnInit, DoCheck, OnDestroy {

  @Input()
  product!: Product;

  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();
  constructor() {
    console.log('1 constructor')
  }

/*   ngOnChanges(changes: SimpleChanges) {

  } */

  ngOnInit() {
    console.log('2 ngOnInit')
  }

  ngDoCheck() {
    console.log('4. docheck')
  }

  ngOnDestroy()  {
    console.log('5. ondestroy')
  }

  addCart() {
    this.productClicked.emit(this.product.id);
  }
}
