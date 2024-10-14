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
import Focaccia from '../assets/images/products/restaurant2/Focaccia.jpg';
import Feijoada from '../assets/images/products/restaurant3/Feijoada.jpg';
import Moqueca from '../assets/images/products/restaurant3/Moqueca.jpg';
import PãoDeQueijo from '../assets/images/products/restaurant3/PãoDeQueijo.jpg';
import Brigadeiro from '../assets/images/products/restaurant3/Brigadeiro.jpg';
import Acarajé from '../assets/images/products/restaurant3/Acarajé.jpg';
import Escondidinho from '../assets/images/products/restaurant3/Escondidinho.jpg';
import Tacos from '../assets/images/products/restaurant4/Tacos.jpg';
import Guacamole from '../assets/images/products/restaurant4/Guacamole.jpg';
import Burrito from '../assets/images/products/restaurant4/Burrito.jpg';
import Quesadilla from '../assets/images/products/restaurant4/Quesadilla.jpg';
import Churros from '../assets/images/products/restaurant4/Churros.jpg';
import Enchiladas from '../assets/images/products/restaurant4/Enchiladas.jpg';
import Coq from '../assets/images/products/restaurant5/Coq.jpg';
import Ratatouille from '../assets/images/products/restaurant5/Ratatouille.avif';
import Quiche from '../assets/images/products/restaurant5/Quiche.jpg';
import Soufflé from '../assets/images/products/restaurant5/Soufflé.jpg';
import CrèmeBrûlée from '../assets/images/products/restaurant5/CrèmeBrûlée.jpg';
import Bouillabaisse from '../assets/images/products/restaurant5/Bouillabaisse.jpg';
import Pato from '../assets/images/products/restaurant6/Pato.jpg';
import ArrozChopSuey from '../assets/images/products/restaurant6/ArrozChopSuey.jpg';
import FrangoXadrez from '../assets/images/products/restaurant6/FrangoXadrez.jpg';
import Rolinho from '../assets/images/products/restaurant6/Rolinho.jpg';
import Tofu from '../assets/images/products/restaurant6/Tofu.jpg';
import Lombo from '../assets/images/products/restaurant6/Lombo.jpg';

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
                'de 1 a 2 pessoas',
                'R$ 50,00',
                SushiCombo
            ),
            new Product(
                'Temaki Especial',
                'Temaki de salmão recheado com cream cheese, cebolinha e um toque de gergelim. Envolto em alga nori crocante, perfeito para quem busca um sabor autêntico.',
                '1 pessoa',
                'R$ 25,00',
                TemakiEspecial
            ),
            new Product(
                'Ramen',
                'Delicioso ramen com caldo encorpado à base de miso, acompanhado de fatias suculentas de carne de porco, ovo cozido, alga nori, e cebolinha. Um prato reconfortante para qualquer momento.',
                '1 pessoa',
                'R$ 40,00',
                Ramen
            ),
            new Product(
                'Tempura',
                'Legumes frescos e camarões empanados em uma massa leve e crocante, servidos com molho de soja para mergulhar. Perfeito para quem gosta de contrastes de textura.',
                'de 1 a 2 pessoas',
                'R$ 30,00',
                Tempura
            ),
            new Product(
                'Yakitori',
                'Espetinhos de frango grelhados e caramelizados com molho tare, com um toque de cebolinha. Macio por dentro e levemente crocante por fora, ideal para petiscar.',
                'de 1 a 2 pessoas',
                'R$ 20,00',
                Yakitori
            ),
            new Product(
                'Sashimi',
                'Fatias finas de salmão e atum frescos, servidas com molho de soja e um toque de wasabi. Uma experiência pura e autêntica de apreciar o sabor do peixe.',
                'de 1 a 2 pessoas',
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
            'Um clássico italiano, feito com spaghetti al dente, envolto em um molho cremoso à base de ovos, queijo parmesão e pancetta crocante. A pimenta-do-reino adiciona um toque picante e aromático ao prato, elevando seu sabor. Ideal para quem busca uma refeição rica e reconfortante.',
            'de 1 a 2 pessoas',
            'R$ 38,00',
            Spaghetti
        ),
        new Product(
            'Tiramisu',
            'Deliciosa sobremesa italiana, preparada em camadas de biscoitos embebidos em café fresco, intercaladas com um creme suave de mascarpone. Finalizada com uma generosa camada de cacau polvilhado, que traz um toque levemente amargo. Perfeita para os amantes de doces refinados e equilibrados.',
            'de 2 a 4 pessoas',
            'R$ 18,00',
            Tiramisu
        ),
        new Product(
            'Lasagna',
            'Um prato em camadas, com folhas de massa fresca alternadas com molho de tomate rústico e carne moída temperada. Recheada com uma mistura de ricota cremosa e mozzarella derretida, coberta por uma camada dourada de queijo gratinado. Saboroso e aconchegante, ideal para um almoço em família.',
            'de 2 a 4 pessoas',
            'R$ 18,00',
            Lasagna
        ),
        new Product(
            'Risotto',
            'Arroz cremoso, cozido lentamente em um rico caldo aromático, que traz uma textura aveludada ao prato. Pode ser preparado com ingredientes frescos como cogumelos, frutos do mar ou legumes sazonais. Cada garfada oferece uma explosão de sabor e cremosidade, típica da cozinha italiana.',
            'de 1 a 2 pessoas',
            'R$ 18,00',
            Risotto
        ),
        new Product(
            'Pizza Quatro Queijos',
            'Uma deliciosa combinação de queijos sobre uma massa fina e crocante, assada à perfeição. O molho de tomate artesanal complementa a mistura de mozzarella, gorgonzola, parmesão e requeijão. Cada fatia traz um equilíbrio perfeito entre os sabores, ideal para compartilhar em momentos especiais.',
            'de 3 a 4 pessoas',
            'R$ 18,00',
            Pizza
        ),
        new Product(
            'Focaccia',
            'Pão italiano macio e aerado, com uma crosta dourada e levemente crocante, realçada por fios de azeite de oliva extra virgem. Salpicada com sal grosso e alecrim fresco, a focaccia é perfumada e saborosa. Excelente como entrada ou para acompanhar queijos e frios em um momento de descontração.',
            'de 2 a 4 pessoas',
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
            'Feijoada',
            'Tradicional feijoada brasileira, preparada com feijão preto cozido lentamente junto a cortes suculentos de carne de porco. Acompanhada de arroz branco soltinho, farofa crocante e couve refogada ao alho. Um prato que traz à mesa o sabor autêntico do Brasil.',
            'de 2 a 4 pessoas',
            'R$ 45,00',
            Feijoada
        ),
        new Product(
            'Moqueca Capixaba',
            'Moqueca capixaba feita com peixe fresco cozido em uma mistura de leite de coco, azeite de dendê e pimentões coloridos. Servida com arroz branco e um toque de coentro para realçar os sabores. Uma receita cheia de aromas e tradição do litoral brasileiro.',
            'de 2 a 3 pessoas',
            'R$ 55,00',
            Moqueca
        ),
        new Product(
            'Pão de Queijo',
            'Delicioso pão de queijo mineiro, feito com queijo curado e polvilho. Crocante por fora e com uma textura macia e elástica por dentro, perfeito para o café da manhã ou lanche. Cada mordida oferece um gostinho único de Minas Gerais.',
            'de 3 a 6 pessoas',
            'R$ 12,00',
            PãoDeQueijo
        ),
        new Product(
            'Brigadeiro',
            'Doce tradicional brasileiro, preparado com leite condensado, manteiga e chocolate em pó. Cozido até atingir a consistência ideal e coberto com granulado de chocolate. Uma sobremesa irresistível que derrete na boca e adoça qualquer ocasião.',
            'de 2 a 6 pessoas',
            'R$ 10,00',
            Brigadeiro
        ),
        new Product(
            'Acarajé',
            'Bolinho de feijão fradinho temperado e frito no azeite de dendê, crocante por fora e macio por dentro. Recheado com camarão seco e vatapá, trazendo a rica culinária baiana para o seu prato. Uma explosão de sabores e tradições afro-brasileiras.',
            'de 1 a 2 pessoas',
            'R$ 20,00',
            Acarajé
        ),
        new Product(
            'Escondidinho de Carne Seca',
            'Camada generosa de purê de mandioca cremoso coberta com carne seca desfiada e refogada. Finalizado com queijo derretido, gratinado até formar uma crosta dourada e deliciosa. Um prato que combina o sabor rústico da carne seca com o toque suave da mandioca.',
            'de 2 a 3 pessoas',
            'R$ 35,00',
            Escondidinho
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
            'Tacos al Pastor',
            'Tacos tradicionais feitos com carne de porco marinada em especiarias e abacaxi. Servidos em tortillas de milho e acompanhados de cebola, coentro e limão. Uma explosão de sabores picantes e adocicados, perfeitos para qualquer ocasião.',
            'de 1 a 3 pessoas',
            'R$ 25,00',
            Tacos
        ),
        new Product(
            'Guacamole',
            'Creme de abacate fresco temperado com cebola, tomate, limão e coentro. Acompanha nachos crocantes, ideais para mergulhar e aproveitar a combinação cremosa e refrescante. Uma entrada perfeita para compartilhar e abrir o apetite.',
            'de 2 a 3 pessoas',
            'R$ 18,00',
            Guacamole
        ),
        new Product(
            'Burrito de Carne',
            'Burrito recheado com carne bovina cozida lentamente e temperada com especiarias mexicanas. Envolto em uma tortilla de trigo, junto a arroz, feijão preto, queijo e pico de gallo. Uma refeição completa e cheia de sabores em cada mordida.',
            'de 1 a 2 pessoas',
            'R$ 28,00',
            Burrito
        ),
        new Product(
            'Quesadilla de Queijo',
            'Quesadilla feita com tortillas de trigo recheadas com queijo derretido e grelhadas até ficarem douradas. Servida com molho de pimenta e guacamole, perfeita para os amantes de queijo. Uma combinação irresistível de crocância e cremosidade.',
            'de 2 a 4 pessoas',
            'R$ 22,00',
            Quesadilla
        ),
        new Product(
            'Churros com Doce de Leite',
            'Deliciosos churros fritos e crocantes, polvilhados com açúcar e canela. Acompanhados de doce de leite cremoso para mergulhar e saborear a cada mordida. Uma sobremesa clássica que adoça qualquer momento com um toque mexicano.',
            'de 2 a 5 pessoas',
            'R$ 15,00',
            Churros
        ),
        new Product(
            'Enchiladas Verdes',
            'Enchiladas recheadas com frango desfiado e cobertas com molho verde à base de tomatillos. Finalizadas com queijo derretido e creme azedo, servidas com arroz mexicano. Um prato que combina o frescor do molho verde com a suculência do frango.',
            'de 2 a 4 pessoas',
            'R$ 32,00',
            Enchiladas
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
            'Coq au Vin',
            'Clássico prato francês feito com frango cozido em vinho tinto, acompanhado de cogumelos, cebolas e bacon. A carne fica macia e absorve o sabor rico e profundo do molho. Servido com batatas gratinadas, é uma verdadeira experiência gastronômica.',
            'de 2 a 3 pessoas',
            'R$ 65,00',
            Coq
        ),
        new Product(
            'Ratatouille',
            'Prato tradicional da Provence, feito com camadas de legumes como berinjela, abobrinha, tomate e pimentão. Assados lentamente em azeite de oliva e ervas aromáticas, resultando em um sabor leve e fresco. Ideal para acompanhar carnes ou ser servido como prato principal.',
            'de 2 a 4 pessoas',
            'R$ 30,00',
            Ratatouille
        ),
        new Product(
            'Quiche Lorraine',
            'Torta salgada de massa fina e crocante, recheada com creme à base de ovos, creme de leite, bacon e queijo. Assada até ficar dourada e com uma textura leve e cremosa por dentro. Um clássico da cozinha francesa, perfeito para qualquer refeição do dia.',
            'de 2 a 4 pessoas',
            'R$ 40,00',
            Quiche
        ),
        new Product(
            'Soufflé de Queijo',
            'Soufflé delicado e aerado, preparado com queijo gruyère, que derrete na boca a cada garfada. Assado até crescer e formar uma crosta dourada e levemente crocante. Um prato que impressiona pela leveza e sabor refinado, ideal como entrada.',
            'de 2 a 4 pessoas',
            'R$ 28,00',
            Soufflé
        ),
        new Product(
            'Crème Brûlée',
            'Sobremesa clássica com um creme de baunilha suave e uma camada de açúcar caramelizado crocante por cima. Quebrar a crosta e sentir a cremosidade é uma experiência única e indulgente. Perfeito para encerrar a refeição com um toque de sofisticação.',
            'de 1 a 2 pessoas',
            'R$ 22,00',
            CrèmeBrûlée
        ),
        new Product(
            'Bouillabaisse',
            'Sopa de frutos do mar típica de Marselha, feita com peixes frescos, mexilhões e camarões. Cozidos em um caldo aromático à base de tomate, ervas e açafrão, que realça os sabores do mar. Servido com pão torrado e rouille, é um convite ao sul da França.',
            'de 2 a 3 pessoas',
            'R$ 75,00',
            Bouillabaisse
        )
    ]
)
,
new Restaurant(
    6,
    'Palácio de Jade',
    PalacioDeJade,
    'Chinesa',
    [
        new Product(
            'Pato à Pequim',
            'Clássico da culinária chinesa, o Pato à Pequim é assado até a pele ficar crocante e a carne, macia. Servido com panquecas, cebolinha, pepino e molho hoisin, perfeito para criar combinações deliciosas. Uma experiência gastronômica rica e tradicional.',
            'de 3 a 4 pessoas',
            'R$ 98,00',
            Pato
        ),
        new Product(
            'Arroz Chop Suey',
            'Arroz frito com uma variedade de legumes frescos, como cenoura, pimentão e broto de feijão. Misturado com tiras de carne de porco e camarão, temperado com molho de soja e óleo de gergelim. Um prato completo que agrada a todos os paladares.',
            'de 2 a 3 pessoas',
            'R$ 45,00',
            ArrozChopSuey
        ),
        new Product(
            'Frango Xadrez',
            'Cubos de frango salteados com pimentões, cebola, amendoim e um molho agridoce. A mistura de texturas e sabores faz deste prato um clássico apreciado em todo o mundo. Ideal para acompanhar com arroz branco ou yakisoba.',
            'de 1 a 2 pessoas',
            'R$ 36,00',
            FrangoXadrez
        ),
        new Product(
            'Rolinho Primavera',
            'Deliciosos rolinhos recheados com legumes frescos, como repolho e cenoura, envoltos em uma fina massa crocante. Fritos até dourar, são acompanhados de molho agridoce para um toque a mais de sabor. Um aperitivo leve e irresistível.',
            'de 2 a 4 pessoas',
            'R$ 20,00',
            Rolinho
        ),
        new Product(
            'Tofu Ma Po',
            'Tofu macio cozido em um molho picante de pimenta e feijão fermentado, com carne de porco moída. Um prato típico da província de Sichuan, famoso pelo seu sabor quente e levemente adormecedor. Ideal para quem gosta de um toque apimentado.',
            '2 pessoas',
            'R$ 42,00',
            Tofu
        ),
        new Product(
            'Lombo Agridoce',
            'Lombo de porco empanado e frito, coberto com um molho agridoce à base de abacaxi, pimentão e cenoura. A combinação de sabores doce e ácido faz deste prato uma escolha popular. Perfeito para ser acompanhado com arroz ou noodles.',
            'de 2 a 3 pessoas',
            'R$ 40,00',
            Lombo
        )
    ]
    )

];

export default restaurants;
