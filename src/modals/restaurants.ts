// src/models/restaurants.ts

import Product from './cardapio';

class Restaurant {
    id: number;
    name: string;
    image: string;
    tag: string;
    
    products?: Product[]; // Continua opcional

    constructor(
        id: number,
        name: string,
        image: string,
        tag: string,
        products?: Product[]
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.tag = tag;
        this.products = products;
    }
}

export default Restaurant;

