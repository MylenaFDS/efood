// src/models/Product.ts

class cardapio {
    id:number;
    nome: string;
    descricao: string;
    porcao:string;
    preco: string;
    foto: string;
    
    constructor(id:number,nome: string, descricao: string, porcao:string,  preco: string, foto: string) {
      this.id = id;
      this.nome = nome;
      this.descricao = descricao;
      this.porcao = porcao;
      this.preco = preco;
      this.foto = foto;
    }
  }
  
  export default cardapio;
  