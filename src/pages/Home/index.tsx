import React from 'react';
import Hero from "../../components/Hero";
import RestaurantListing from "../../components/RestaurantListing";
import estrela from '../../assets/images/estrela.jpg'
import RestaurantModel  from '../../modals/RestaurantModal';
const restaurantes:RestaurantModel[] = [
    {
      id: 1,
      titulo: 'Bella Tavolla Italiana',
      rate: '	4.7',
      star: estrela,
      descricao: 'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores italianos.',
      highlight: 'Destaque da semana',
      tipo: 'Italiana',
      capa: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//capa.jpeg'
    },
    {
      id: 2,
      titulo: 'Casa das Delícias Árabes',
      rate: '	4.8',
      star: estrela,
      descricao: 'A Casa das Delícias Árabes é um acolhedor e autêntico restaurante árabe, localizado no coração da cidade, que proporciona uma verdadeira experiência culinária do Oriente Médio. O ambiente é decorado com elementos tradicionais e exóticos, criando uma atmosfera convidativa e confortável.',
      tipo: 'Árabe',
      capa: 'https://fake-api-tau.vercel.app/efood/casa_delicias_arabes//capa.jpeg'
    },
    {
      id: 3,
      titulo: 'Sakura Sushi House',
      rate: '4.9',
      star: estrela,
      descricao: 'A Sakura Sushi House é um sofisticado e autêntico restaurante japonês que oferece uma experiência culinária imersiva, transportando os visitantes diretamente para a Terra do Sol Nascente. O ambiente elegante é complementado por um belo jardim japonês, criando uma atmosfera tranquila e serena.',
      tipo: 'Japonês',
      capa: 'https://fake-api-tau.vercel.app/efood/sakura_sushi_house//capa.jpeg'
    },
    {
      id: 4,
      titulo: 'Cantinho Lusitano',
      rate: '4.8',
      star: estrela,
      descricao: 'O Cantinho Lusitano é um charmoso e tradicional restaurante português, que celebra a rica herança culinária de Portugal. Neste aconchegante espaço, os visitantes podem desfrutar dos autênticos sabores portugueses, preparados com ingredientes frescos e de alta qualidade, respeitando as receitas clássicas.',
      tipo: 'Português',
      capa: 'https://fake-api-tau.vercel.app/efood/cantinho_lusitano//capa.jpeg'
    },
    {
      id: 5,
      titulo: 'Piazza del Forno',
      rate: '4.7',
      star: estrela,
      descricao: 'A Piazza del Forno é uma pizzaria acolhedora e autêntica que se orgulha de suas raízes italianas. Aqui, você encontrará pizzas artesanais preparadas com ingredientes frescos e assadas em forno a lenha, proporcionando sabores inigualáveis e uma crosta crocante e deliciosa.',
      tipo: 'Pizzaria',
      capa: 'https://fake-api-tau.vercel.app/efood/piazza//capa.png'
    },
    {
      id: 6,
      titulo: 'Jardim da Terra',
      rate: '4.8',
      star: estrela,
      descricao: 'O Jardim da Terra é um restaurante vegano que se dedica a oferecer pratos deliciosos e criativos, utilizando apenas ingredientes frescos, orgânicos e sazonais. Nosso cardápio é cuidadosamente elaborado para proporcionar uma experiência culinária única, que celebra a diversidade e a riqueza dos alimentos à base de plantas.',
      highlight: 'Destaque da semana',
      tipo: 'Vegano',
      capa: 'https://fake-api-tau.vercel.app/efood/jardim_terra//capa.png'
    }
  ]

const Home = () => (
    <>
      <Hero />
      <RestaurantListing restaurantes={restaurantes} />
    </>
);


export default Home;

