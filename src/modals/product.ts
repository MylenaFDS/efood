// src/models/Product.ts

class Product {
    id:number;
    name: string;
    description: string;
    quantidade:string;
    price: string;
    image: string;
    
    constructor(id:number,name: string, description: string, quantidade:string,  price: string, image: string) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.quantidade = quantidade;
      this.price = price;
      this.image = image;
    }
  }
  
  export default Product;
  