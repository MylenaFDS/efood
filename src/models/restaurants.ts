import Product from './product';

class Restaurant {
    id: number;
    name: string;
    tag: string;
    image: string;
    rate?: string; // Agora é opcional
    star?: string; // Agora é opcional
    description?: string; // Agora é opcional
    highlight?: string; // Continua opcional
    products?: Product[]; // Continua opcional
  
    constructor(
      id: number,
      name: string,
      tag: string,
      image: string,
      rate?: string,
      star?: string,
      description?: string,
      products?: Product[]
    ) {
      this.id = id;
      this.name = name;
      this.tag = tag;
      this.image = image;
      this.rate = rate;
      this.star = star;
      this.description = description;
      this.products = products;
    }
  }
  
  export default Restaurant;