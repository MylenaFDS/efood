/// src/data/restaurants.ts

import Restaurant from '../models/restaurants';
import Product from '../models/product';
import HiokiSushi from '../assets/images/HiokiSushi.svg';
import LaDolceVitaTrattoria from '../assets/images/LaDolceVitaTrattoria.svg';
import SaboresDaTerra from '../assets/images/SaboresDaTerra.jpg';
import LosTacosLocos from '../assets/images/LosTacosLocos.jpg';
import LaBelleEpoque from '../assets/images/LaBelleEpoque.jpg';
import PalacioDeJade from '../assets/images/PalacioDeJade.jpg';
import SushiCombo from '../assets/images/products/restaurant1/SushiCombo.jpg';
import TemakiEspecial from '../assets/images/products/restaurant1/TemakiEspecial.jpg';
import Ramen from '../assets/images/products/restaurant1/Ramen.avif';
import Tempura from '../assets/images/products/restaurant1/Tempura.jpg';
import Yakitori from '../assets/images/products/restaurant1/Yakitori.jpg';
import Sashimi from '../assets/images/products/restaurant1/Sashimi.jpg';


const restaurants: Restaurant[] = [
    new Restaurant(
        1,
        'Hioki Sushi',
        HiokiSushi,
        'Japonesa',
        [
            new Product(
                'Sushi Combo',
                'Uma combinação especial de 10 peças de sushi variados, incluindo nigiri e hossomaki, preparados com os melhores cortes de peixe fresco e arroz temperado.',
                'R$ 50,00',
                SushiCombo
            ),
            new Product(
                'Temaki Especial',
                'Temaki de salmão recheado com cream cheese, cebolinha e um toque de gergelim. Envolto em alga nori crocante, perfeito para quem busca um sabor autêntico.',
                'R$ 25,00',
                TemakiEspecial
            ),
            new Product(
                'Ramen',
                'Delicioso ramen com caldo encorpado à base de miso, acompanhado de fatias suculentas de carne de porco, ovo cozido, alga nori, e cebolinha. Um prato reconfortante para qualquer momento.',
                'R$ 40,00',
                Ramen
            ),
            new Product(
                'Tempura',
                'Legumes frescos e camarões empanados em uma massa leve e crocante, servidos com molho de soja para mergulhar. Perfeito para quem gosta de contrastes de textura.',
                'R$ 30,00',
                Tempura
            ),
            new Product(
                'Yakitori',
                'Espetinhos de frango grelhados e caramelizados com molho tare, com um toque de cebolinha. Macio por dentro e levemente crocante por fora, ideal para petiscar.',
                'R$ 20,00',
                Yakitori
            ),
            new Product(
                'Sashimi',
                'Fatias finas de salmão e atum frescos, servidas com molho de soja e um toque de wasabi. Uma experiência pura e autêntica de apreciar o sabor do peixe.',
                'R$ 35,00',
                Sashimi
            )
        ]
    ),
    new Restaurant(
        2,
        'La Dolce Vita Trattoria',
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
            ),
            new Product(
                'Tiramisu',
                'Deliciosa sobremesa italiana com café, mascarpone e cacau',
                'R$ 18,00',
                'path/to/tiramisu-image.png'
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
