/// src/data/restaurants.ts

import Restaurant from '../models/restaurants';
import Product from '../models/product';
import HiokiSushi from '../assets/images/HiokiSushi.svg';
import LaDolceVitaTrattoria from '../assets/images/LaDolceVitaTrattoria.svg';
import SaboresDaTerra from '../assets/images/SaboresDaTerra.jpg';
import LosTacosLocos from '../assets/images/LosTacosLocos.jpg';
import LaBelleEpoque from '../assets/images/LaBelleEpoque.jpg';
import PalacioDeJade from '../assets/images/PalacioDeJade.jpg';

const restaurants: Restaurant[] = [
    new Restaurant(
        1,
        'Hioki Sushi',
        HiokiSushi,
        'Japonesa',
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
    new Restaurant(
        2,
        'La Dolce Vita',
        LaDolceVitaTrattoria,
        'Italiana',
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
    new Restaurant(
        3,
        'Sabores da Terra',
        SaboresDaTerra,
        'Brasileira',
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
    new Restaurant(
        4,
        'Los Tacos Locos',
        LosTacosLocos,
        'Mexicana',
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
    new Restaurant(
        5,
        'La Belle Époque',
        LaBelleEpoque,
        'Francesa',
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
    new Restaurant(
        6,
        'Palácio de Jade',
        PalacioDeJade,
        'Chinesa',
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
];

export default restaurants;
