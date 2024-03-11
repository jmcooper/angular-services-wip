import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: Product;
  @Output() buy = new EventEmitter();

  getImageUrl(product: Product) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  buyButtonClicked(product: Product) {
    this.buy.emit();
  }
}
