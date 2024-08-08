// src/models/Restaurant.ts

class RestaurantModel {
    id: number;
    name: string;
    description: string;
    highlight?: string; // Opcional, pois nem todos os restaurantes têm destaque
    tag: string;
    image: string; // Tipo string, mas você pode adaptar conforme necessário para a fonte das imagens

    constructor(
    id: number,
    name: string,
    description: string,
    tag: string,
    image: string, // Tipo string, mas você pode adaptar conforme necessário para a fonte das imagens
    ) {
        this.id = id
        this.name = name
        this.description = description
        this.tag = tag
        this.image = image
    }
  }
  
  export default RestaurantModel;