// src/models/Restaurant.ts

import Product from './product';

class RestaurantModel {
  id: number;
  name: string;
  rate: string;
  star: string;
  description: string;
  highlight?: string; // Opcional, pois nem todos os restaurantes têm destaque
  tag: string;
  image: string;
  products?: Product[]; // Lista de produtos associados ao restaurante

  constructor(
    id: number,
    name: string,
    rate: string,
    star: string,
    description: string,
    tag: string,
    image: string,
    products?: Product[] // Lista de produtos é opcional, caso alguns restaurantes não tenham produtos definidos
  ) {
    this.id = id;
    this.name = name;
    this.rate = rate;
    this.star = star;
    this.description = description;
    this.tag = tag;
    this.image = image;
    this.products = products;
  }
}

export default RestaurantModel;
