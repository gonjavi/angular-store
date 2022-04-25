import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {
    id: '',
    image: '',
    title: '',
    price: 1,
    description: '',
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.product = {
      id: '',
      image: '',
      title: '',
      price: 1,
      description: '',
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('p',params)
      const id = params['id'];
      console.log(id)

      this.product = this.productService.getProduct(id);

      console.log('product', this.product)

    });
  }

}














