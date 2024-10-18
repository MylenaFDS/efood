// src/models/Restaurant.ts

import cardapio from './cardapio';

class RestaurantModal {
  id: number;
  titulo: string;
  rate: string;
  star: string;
  descricao: string;
  highlight?: string; // Opcional, pois nem todos os restaurantes têm destaque
  tag: string;
  capa: string;
  cardapio?: cardapio[]

  constructor(
    id: number,
    titulo: string,
    rate: string,
    star: string,
    descricao: string,
    tag: string,
    capa: string,
    cardapio?: cardapio[]
  ) {
    this.id = id;
    this.titulo = titulo;
    this.rate = rate;
    this.star = star;
    this.descricao = descricao;
    this.tag = tag;
    this.capa = capa;
    this.cardapio = cardapio;
  }
}

export default RestaurantModal;
