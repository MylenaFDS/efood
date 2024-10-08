// src/data/restaurants.ts

import RestaurantModel from '../models/restaurant';
import Product from '../models/product';

const restaurants: RestaurantModel[] = [
  new RestaurantModel(
    1,
    'Hioki Sushi',
    '5.0',
    'path/to/star-image.png',
    'Peça já o melhor da culinária japonesa no conforto da sua casa!',
    'Japonesa',
    'path/to/hioki-sushi-image.png',
    [
      new Product(
        'Sushi Combo',
        '10 peças de sushi',
        'R$ 50,00',
        'path/to/sushi-combo-image.png'
      ),
      new Product(
        'Temaki Especial',
        'Temaki de salmão com cream cheese',
        'R$ 25,00',
        'path/to/temaki-especial-image.png'
      )
    ]
  ),
  new RestaurantModel(
    2,
    'La Dolce Vita',
    '4.8',
    'path/to/star-image.png',
    'Experimente o melhor da cozinha italiana.',
    'Italiana',
    'path/to/pasta-e-basta-image.png',
    [
      new Product(
        'Spaghetti Carbonara',
        'Spaghetti com molho à base de ovos, queijo parmesão, pancetta e pimenta-do-reino',
        'R$ 38,00',
        'path/to/spaghetti-carbonara-image.png'
      ),
      new Product(
        'Tiramisu',
        'Deliciosa sobremesa italiana com café, mascarpone e cacau',
        'R$ 18,00',
        'path/to/tiramisu-image.png'
      )
    ]
  ),
  new RestaurantModel(
    3,
    'Sabores da Terra',
    '4.8',
    'path/to/star-image.png',
    'Experimente o melhor da cozinha italiana.',
    'Italiana',
    'path/to/pasta-e-basta-image.png',
    [
      new Product(
        'Spaghetti Carbonara',
        'Spaghetti com molho à base de ovos, queijo parmesão, pancetta e pimenta-do-reino',
        'R$ 38,00',
        'path/to/spaghetti-carbonara-image.png'
      ),
      new Product(
        'Tiramisu',
        'Deliciosa sobremesa italiana com café, mascarpone e cacau',
        'R$ 18,00',
        'path/to/tiramisu-image.png'
      )
    ]
  ),
  new RestaurantModel(
    4,
    'La Dolce Vita',
    '4.8',
    'path/to/star-image.png',
    'Experimente o melhor da cozinha italiana.',
    'Italiana',
    'path/to/pasta-e-basta-image.png',
    [
      new Product(
        'Spaghetti Carbonara',
        'Spaghetti com molho à base de ovos, queijo parmesão, pancetta e pimenta-do-reino',
        'R$ 38,00',
        'path/to/spaghetti-carbonara-image.png'
      ),
      new Product(
        'Tiramisu',
        'Deliciosa sobremesa italiana com café, mascarpone e cacau',
        'R$ 18,00',
        'path/to/tiramisu-image.png'
      )
    ]
  ),
  new RestaurantModel(
    5,
    'La Dolce Vita',
    '4.8',
    'path/to/star-image.png',
    'Experimente o melhor da cozinha italiana.',
    'Italiana',
    'path/to/pasta-e-basta-image.png',
    [
      new Product(
        'Spaghetti Carbonara',
        'Spaghetti com molho à base de ovos, queijo parmesão, pancetta e pimenta-do-reino',
        'R$ 38,00',
        'path/to/spaghetti-carbonara-image.png'
      ),
      new Product(
        'Tiramisu',
        'Deliciosa sobremesa italiana com café, mascarpone e cacau',
        'R$ 18,00',
        'path/to/tiramisu-image.png'
      )
    ]
  ),
  new RestaurantModel(
    6,
    'La Dolce Vita',
    '4.8',
    'path/to/star-image.png',
    'Experimente o melhor da cozinha italiana.',
    'Italiana',
    'path/to/pasta-e-basta-image.png',
    [
      new Product(
        'Spaghetti Carbonara',
        'Spaghetti com molho à base de ovos, queijo parmesão, pancetta e pimenta-do-reino',
        'R$ 38,00',
        'path/to/spaghetti-carbonara-image.png'
      ),
      new Product(
        'Tiramisu',
        'Deliciosa sobremesa italiana com café, mascarpone e cacau',
        'R$ 18,00',
        'path/to/tiramisu-image.png'
      )
    ]
  )
];

export default restaurants;
