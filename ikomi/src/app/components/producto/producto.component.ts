import { Component } from '@angular/core';

interface Product {
  name: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  products: Product[] = [
    { name: 'HANSANG Product 1', image: 'assets/producto/HANSANG/1.png', category: 'HASNSANG' },
    { name: 'HANSANG Product 2', image: 'assets/producto/HANSANG/2.png', category: 'HASNSANG' },
    { name: 'HANSANG Product 3', image: 'assets/producto/HANSANG/3.png', category: 'HASNSANG' },
    { name: 'SANGSIN Product 4', image: 'assets/producto/SANGSIN/4.png', category: 'SANGSIN' },
    { name: 'SANGSIN Product 5', image: 'assets/producto/SANGSIN/5.png', category: 'SANGSIN' },
    { name: 'SANGSIN Product 6', image: 'assets/producto/SANGSIN/6.png', category: 'SANGSIN' },
    { name: 'VALEO Product 7', image: 'assets/producto/valeo/7.png', category: 'VALEO' },
    { name: 'VALEO Product 8', image: 'assets/producto/valeo/8.png', category: 'VALEO' },
    { name: 'VALEO Product 9', image: 'assets/producto/valeo/9.png', category: 'VALEO' },
  ];

  filteredProducts: Product[] = [...this.products];

  filterCategory(category: string) {
    this.filteredProducts = category === 'All' ? this.products : this.products.filter(product => product.category === category);
  }
}
