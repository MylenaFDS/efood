// src/models/Restaurant.ts

import Product from './product';

class RestaurantModal {
  id: number;
  name: string;
  rate: string;
  star: string;
  description: string;
  highlight?: string; // Opcional, pois nem todos os restaurantes têm destaque
  tag: string;
  image: string;

  constructor(
    id: number,
    name: string,
    rate: string,
    star: string,
    description: string,
    tag: string,
    image: string,
  ) {
    this.id = id;
    this.name = name;
    this.rate = rate;
    this.star = star;
    this.description = description;
    this.tag = tag;
    this.image = image;
  }
}

export default RestaurantModal;
