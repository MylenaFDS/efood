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
import Spaghetti from '../assets/images/products/restaurant2/Spaghetti.jpg';
import Tiramisu from '../assets/images/products/restaurant2/Tiramisu.jpg';
import Lasagna from '../assets/images/products/restaurant2/Lasagna.jpg';
import Risotto from '../assets/images/products/restaurant2/Risotto.jpg';
import Pizza from '../assets/images/products/restaurant2/Pizza.jpg';
import Focaccia from '../assets/images/products/restaurant2/Focaccia.jpg'
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
                'Serve: 1 a 2 pessoas',
                'R$ 50,00',
                SushiCombo
            ),
            new Product(
                'Temaki Especial',
                'Temaki de salmão recheado com cream cheese, cebolinha e um toque de gergelim. Envolto em alga nori crocante, perfeito para quem busca um sabor autêntico.',
                'Serve 1 pessoa',
                'R$ 25,00',
                TemakiEspecial
            ),
            new Product(
                'Ramen',
                'Delicioso ramen com caldo encorpado à base de miso, acompanhado de fatias suculentas de carne de porco, ovo cozido, alga nori, e cebolinha. Um prato reconfortante para qualquer momento.',
                'Serve 1 pessoa',
                'R$ 40,00',
                Ramen
            ),
            new Product(
                'Tempura',
                'Legumes frescos e camarões empanados em uma massa leve e crocante, servidos com molho de soja para mergulhar. Perfeito para quem gosta de contrastes de textura.',
                'Serve: 1 a 2 pessoas',
                'R$ 30,00',
                Tempura
            ),
            new Product(
                'Yakitori',
                'Espetinhos de frango grelhados e caramelizados com molho tare, com um toque de cebolinha. Macio por dentro e levemente crocante por fora, ideal para petiscar.',
                'R$ 20,00',
                'Serve: 1 a 2 pessoas',
                Yakitori
            ),
            new Product(
                'Sashimi',
                'Fatias finas de salmão e atum frescos, servidas com molho de soja e um toque de wasabi. Uma experiência pura e autêntica de apreciar o sabor do peixe.',
                'Serve de 1 a 2 pessoas',
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
                'Spaghetti com molho à base de ovos, queijo parmesão, pancetta e pimenta-do-reino.',
                'Serve de 1 a 2 pessoas',
                'R$ 38,00',
                Spaghetti
            ),
            new Product(
                'Tiramisu',
                'Deliciosa sobremesa italiana com café, mascarpone e cacau.',
                'Serve de 2 a 4 pessoas',
                'R$ 18,00',
                Tiramisu
            ),
            new Product(
                'Lasagna',
                'Um prato em camadas feito com folhas de massa, carne moída, molho de tomate, queijo ricota e mozzarella.',
                'Serve de 2 a 4 pessoas',
                'R$ 18,00',
                Lasagna
            ),
            new Product(
                'Risotto',
                'Um prato de arroz cremoso, cozido lentamente em caldo. Possui com uma variedade de ingredientes, como cogumelos, frutos do mar e legumes.',
                'Serve de 1 a 2 pessoas',
                'R$ 18,00',
                Risotto
            ),
            new Product(
                'Pizza Quatro Queijos',
                'Uma deliciosa combinação de queijos que derrete na boca, preparada com nossa massa fina e crocante, assada à perfeição. Coberta com molho de tomate artesanal, enriquecido com um blend de queijos selecionados: mozzarella cremosa, gorgonzola picante, parmesão ralado na hora e cremoso requeijão. Cada mordida oferece um equilíbrio perfeito entre a suavidade da mozzarella, o sabor intenso do gorgonzola, a riqueza do parmesão e a maciez do requeijão, resultando em uma experiência única para os amantes de queijos. Servida quente, perfeita para acompanhar com uma taça de vinho branco ou uma cerveja leve. Ideal para compartilhar com quem você gosta, mas tentadora o suficiente para manter só para você!',
                'Serve: 3 a 4 pessoas',
                'R$ 18,00',
                Pizza
            ),
            new Product(
                'Focaccia',
                'Um clássico da panificação italiana, a focaccia é um pão de massa leve e macia, caracterizado por uma textura aerada e uma crosta dourada levemente crocante. Assada com generosos fios de azeite de oliva extra virgem, que realçam seu sabor e garantem uma superfície dourada e ligeiramente crocante. Tradicionalmente, é polvilhada com sal grosso e aromatizada com alecrim fresco, que trazem um toque perfumado irresistível a cada mordida. Pode ser apreciada sozinha como entrada, acompanhada de queijos e frios, ou usada como base para sanduíches gourmet. Ideal para compartilhar, a focaccia traz a simplicidade e os sabores autênticos da Itália à mesa, perfeita para ser combinada com uma taça de vinho ou uma seleção de antipasti.',
                'Serve: 2 a 4 pessoas',
                'R$ 18,00',
                Focaccia
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
                'Serve: 2 a 4 pessoas',
                'R$ 38,00',
                'path/to/spaghetti-carbonara-image.png'
            ),
            new Product(
                'Tiramisu',
                'Deliciosa sobremesa italiana com café, mascarpone e cacau',
                'Serve: 2 a 4 pessoas',
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
                'Serve: 2 a 4 pessoas',
                'R$ 38,00',
                'path/to/spaghetti-carbonara-image.png'
            ),
            new Product(
                'Tiramisu',
                'Deliciosa sobremesa italiana com café, mascarpone e cacau',
                'Serve: 2 a 4 pessoas',
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
                'Serve: 2 a 4 pessoas',
                'R$ 38,00',
                'path/to/spaghetti-carbonara-image.png'
            ),
            new Product(
                'Tiramisu',
                'Deliciosa sobremesa italiana com café, mascarpone e cacau',
                'Serve: 2 a 4 pessoas',
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
                'Serve: 2 a 4 pessoas',
                'R$ 38,00',
                'path/to/spaghetti-carbonara-image.png'
            ),
            new Product(
                'Tiramisu',
                'Deliciosa sobremesa italiana com café, mascarpone e cacau',
                'Serve: 2 a 4 pessoas',
                'R$ 18,00',
                'path/to/tiramisu-image.png'
            )
        ]
    ),
];

export default restaurants;
