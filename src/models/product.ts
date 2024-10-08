// src/models/Product.ts

class Product {
    name: string;
    description: string;
    price: string;
    image: string;
  
    constructor(name: string, description: string, price: string, image: string) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.image = image;
    }
  }
  
  export default Product;
  