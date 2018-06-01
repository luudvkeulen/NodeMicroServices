import {Component} from '@angular/core';
import {MagazineService} from './magazine.service';
import {PricingService} from './pricing.service';
import {Product} from './product';
import {P} from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MagazineService, PricingService]
})
export class AppComponent {
  products: Product[] = [];
  product: Product = new Product();

  constructor(private magazineService: MagazineService, private pricingService: PricingService) {
    this.getProductsWithPrice().then(() => {
      console.log(this.products);
    });
  }

  private async getProductsWithPrice() {
    const _products = await this.magazineService.getProducts();
    const _prices = await this.pricingService.getPrices();
    for (const p of _products) {
      const _product = new Product();
      _product.id = p._id;
      _product.name = p.name;
      _product.price = _prices.find(i => i.productId === p._id).price;
      this.products.push(_product);
    }
  }

  onSubmit() {
    console.log(JSON.stringify(this.product));
    const _newProduct: any = {};
    _newProduct.name = this.product.name;
    _newProduct.quantity = 1;
    this.magazineService.addProduct(_newProduct).then((res) => {
      const _newPrice: any = {};
      _newPrice.price = this.product.price;
      _newPrice.productId = res._id;
      this.pricingService.addPrice(_newPrice).then(() => {
        this.product = new Product();
      });
    });
  }
}
