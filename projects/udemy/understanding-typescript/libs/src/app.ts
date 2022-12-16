// import _ from 'lodash';

// declare var GLOBAL: string;

// console.log(_.shuffle([1, 2, 3]));
// console.log(GLOBAL);

import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { Product } from './product.model';

// const p1 = new Product('A Book', 12.99);

const products = [
  { title: 'A Book', price: 12.99 },
  { title: 'A Book', price: 10.99 },
];

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });
const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
