/// src/data/restaurants.ts

import Restaurant from '../modals/restaurants';
import Product from '../modals/product';


const restaurants: Restaurant[] = [
    new Restaurant(
        1,
        'Bella Tavola Italiana',
        'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//capa.jpeg',
        'Italiana',
        [
            new Product(
                1,
                'Ravioli al Tartufo Nero',
                'O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos e terrosos da trufa negra italiana. Cada ravióli é cuidadosamente recheado com uma mistura saborosa de ricota fresca, parmesão e trufas negras raladas, proporcionando uma combinação de texturas suaves e aromas irresistíveis.',
                'de 1 a 2 pessoas',
                'R$ 69,90',
                'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//1.webp'
            ),
            new Product(
                2,
                'Spaghetti alla Carbonara',
                'O Spaghetti alla Carbonara é um clássico prato italiano, feito com massa spaghetti al dente, coberto com um molho rico e cremoso à base de ovos, queijo pecorino romano, pancetta e pimenta-do-reino. Um prato saboroso e reconfortante que leva você diretamente para a Itália.',
                'de 1 a 2 pessoas',
                'R$ 56,90',
                'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//2.jpg'
            ),
            new Product(
                3,
                'Risotto ai Funghi Porcini',
                'O Risotto ai Funghi Porcini é uma iguaria italiana feita com arroz Arborio de alta qualidade e cogumelos porcini secos, que são reidratados para liberar seu sabor intenso e terroso. O arroz é cozido lentamente em um caldo de legumes, com vinho branco e queijo parmesão, resultando em um risoto cremoso e delicioso.',
                'de 1 a 2 pessoas',
                'R$ 74,90',
                'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//3.jpg'
            ),
            new Product(
                4,
                'Ossobuco alla Milanese',
                'O Ossobuco alla Milanese é um tradicional prato italiano, originário de Milão, que consiste em um suculento pedaço de vitela cozido lentamente em um molho à base de tomate, vinho branco e legumes. O prato é acompanhado por uma porção de polenta cremosa ou risoto alla Milanese, feito com açafrão.',
                'de 1 a 2 pessoas',
                'R$ 89,90',
                'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//4.jpg'
            ),
            new Product(
                5,
                'Melanzane alla Parmigiana',
                'Melanzane alla Parmigiana é um delicioso prato à base de berinjelas, em camadas com molho de tomate caseiro, queijo muçarela e parmesão, assado até ficar dourado e borbulhante. Uma opção saborosa e reconfortante, perfeita para os amantes de legumes e queijo.',
                'de 1 a 2 pessoas',
                'R$ 62,90',
                'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//5.jpg'
            ),
            new Product(
                6,
                'Frutti di Mare Linguine',
                'O Frutti di Mare Linguine é uma verdadeira celebração dos sabores do mar, apresentando uma generosa mistura de frutos do mar frescos, como camarões, lulas, mariscos e vieiras, combinados com massa linguine al dente e um saboroso molho de tomate e vinho branco. Uma opção deliciosa para os amantes de frutos do mar.',
                'de 1 a 2 pessoas',
                'R$ 84,90',
                'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//6.jpg'
            ),
            new Product(
                7,
                'Insalata Caprese',
                'A Insalata Caprese é uma refrescante e deliciosa salada italiana, feita com tomates maduros e suculentos, fatias frescas de mozzarella di bufala, folhas de manjericão e um fio de azeite extra virgem de oliva. Uma opção leve e saborosa, perfeita como entrada ou acompanhamento.',
                'de 1 a 2 pessoas',
                'R$ 49,90',
                'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//7.jpg'
            )
        ]
    ),
    new Restaurant(
    2,
    'Casa das Delícias Árabes',
    'https://fake-api-tau.vercel.app/efood/casa_delicias_arabes//capa.jpeg',
    'Árabe',
    [
        new Product(
            8,
            'Mezze Platter',
            'O Mezze Platter é uma seleção de aperitivos tradicionais árabes, incluindo homus, babaganush, tabule, falafel, azeitonas e pão pita fresco. Uma combinação deliciosa de sabores e texturas que proporciona uma experiência gastronômica única e diversificada.',
            'de 2 a 4 pessoas',
            'R$ 49,90',
            'https://fake-api-tau.vercel.app/efood/casa_delicias_arabes//1.jpg'
        ),
        new Product(
            9,
            'Kebab de Cordeiro',
            'O Kebab de Cordeiro é feito com pedaços de cordeiro marinados em especiarias e ervas, grelhados à perfeição e servidos com arroz basmati perfumado, salada e molho de iogurte. Uma opção saborosa e suculenta para quem aprecia a autêntica cozinha árabe.',
            'de 1 a 2 pessoas',
            'R$ 54,90',
            'https://fake-api-tau.vercel.app/efood/casa_delicias_arabes//2.jpg'
        ),
        new Product(
            10,
            'Shawarma de Frango',
            'O Shawarma de Frango é preparado com finas fatias de frango marinadas em uma mistura de especiarias e grelhadas lentamente. Servido com pão pita, salada e molho tahine, este prato é uma opção saborosa e satisfatória para quem deseja saborear a autêntica comida de rua árabe.',
            'de 1 pessoa',
            'R$ 45,90',
            'https://fake-api-tau.vercel.app/efood/casa_delicias_arabes//3.webp'
        )
    ]
),
    new Restaurant(
    3,
    'Sakura Sushi House',
    'https://fake-api-tau.vercel.app/efood/sakura_sushi_house//capa.jpeg',
    'Japonês',
    [
        new Product(
            11,
            'Sushi e Sashimi Combinado',
            'O Sushi e Sashimi Combinado é uma seleção de peças cuidadosamente elaboradas por nossos sushimen, incluindo atum, salmão, peixe branco, camarão e outros frutos do mar frescos. Acompanha uma porção de wasabi, gengibre em conserva e molho shoyu, para realçar os sabores naturais dos ingredientes.',
            'de 1 a 2 pessoas',
            'R$ 89,90',
            'https://fake-api-tau.vercel.app/efood/sakura_sushi_house//1.jpg'
        ),
        new Product(
            12,
            'Tempura de Legumes e Camarão',
            'O Tempura de Legumes e Camarão é uma opção deliciosa e crocante, composta por uma variedade de legumes e camarões frescos empanados em uma massa leve e frita até a perfeição. Acompanha um molho tentsuyu, à base de dashi, shoyu e mirin, para dar um toque especial ao prato.',
            'de 1 a 2 pessoas',
            'R$ 79,90',
            'https://fake-api-tau.vercel.app/efood/sakura_sushi_house//2.jpg'
        ),
        new Product(
            13,
            'Teishoku de Tonkatsu',
            'O Teishoku de Tonkatsu é um prato tradicional japonês composto por uma fatia de lombo de porco empanado e frito, servido com arroz japonês, misoshiru (sopa de pasta de soja) e tsukemono (legumes em conserva). O molho tonkatsu, à base de frutas e legumes, adiciona um sabor agridoce irresistível.',
            '1 pessoa',
            'R$ 69,90',
            'https://fake-api-tau.vercel.app/efood/sakura_sushi_house//3.jpg'
        )
    ]
),
    new Restaurant(
    4,
    'Cantinho Lusitano',
    'https://fake-api-tau.vercel.app/efood/cantinho_lusitano//capa.jpeg',
    'Português',
    [
        new Product(
            14,
            'Bacalhau à Gomes de Sá',
            'O Bacalhau à Gomes de Sá é um prato tradicional português, que consiste em lascas de bacalhau cozido, batatas, cebola, alho, azeite e azeitonas pretas. Finalizado com salsa picada e ovos cozidos, este prato é um clássico da culinária portuguesa, que agrada a todos os paladares.',
            'de 1 a 2 pessoas',
            'R$ 74,90',
            'https://fake-api-tau.vercel.app/efood/cantinho_lusitano//1.jpeg'
        ),
        new Product(
            15,
            'Arroz de Pato',
            'O Arroz de Pato é um delicioso prato português, feito com arroz, carne de pato desfiada, chouriço e cenoura. Cozido lentamente no forno para absorver todos os sabores e aromas, o resultado é um prato saboroso e reconfortante que conquista os corações dos apaixonados pela gastronomia lusitana.',
            'de 1 a 2 pessoas',
            'R$ 64,90',
            'https://fake-api-tau.vercel.app/efood/cantinho_lusitano//2.jpg'
        ),
        new Product(
            16,
            'Alheira de Mirandela',
            'A Alheira de Mirandela é um emblemático prato português, que consiste em uma deliciosa alheira grelhada, acompanhada de batatas fritas, arroz e uma salada fresca. A alheira é uma saborosa e suculenta mistura de carnes e pão, com um toque de alho e especiarias, que agrada a todos os gostos.',
            'de 1 a 2 pessoas',
            'R$ 54,90',
            'https://fake-api-tau.vercel.app/efood/cantinho_lusitano//3.png'
        )
    ]
),
    new Restaurant(
    5,
    'Piazza del Forno',
    'https://fake-api-tau.vercel.app/efood/piazza//capa.png',
    'Pizzaria',
    [
        new Product(
            17,
            'Pizza Margherita',
            'A Pizza Margherita é um clássico italiano, preparada com molho de tomate caseiro, muçarela fresca, folhas de manjericão e um fio de azeite. Simples e deliciosa, esta pizza é a perfeita representação da culinária italiana em sua forma mais pura.',
            'de 1 a 2 pessoas',
            'R$ 49,90',
            'https://fake-api-tau.vercel.app/efood/piazza//1.jpg'
        ),
        new Product(
            18,
            'Pizza Quatro Queijos',
            'A Pizza Quatro Queijos é uma combinação irresistível de muçarela, gorgonzola, parmesão e provolone, derretidos harmoniosamente sobre uma massa fina e crocante. Perfeita para os amantes de queijo que desejam uma experiência gastronômica rica e saborosa.',
            'de 1 a 2 pessoas',
            'R$ 59,90',
            'https://fake-api-tau.vercel.app/efood/piazza//2.webp'
        ),
        new Product(
            19,
            'Pizza Calabresa',
            'A Pizza Calabresa é uma opção saborosa e suculenta, feita com rodelas de calabresa, cebola roxa fatiada, azeitonas pretas e muçarela derretida. Assada em forno a lenha, esta pizza é a escolha perfeita para quem deseja saborear uma pizza tradicional e deliciosa.',
            'de 1 a 2 pessoas',
            'R$ 64,90',
            'https://fake-api-tau.vercel.app/efood/piazza//3.jpg'
        )
    ]
)
,
new Restaurant(
    6,
    'Jardim da Terra',
    'https://fake-api-tau.vercel.app/efood/jardim_terra//capa.png',
    'Vegano',
    [
        new Product(
            20,
            'Hambúrguer de Grão-de-Bico',
            'Nosso Hambúrguer de Grão-de-Bico é feito com grão-de-bico, cenoura, cebola e especiarias, servido em um pão vegano fresco com alface, tomate e nosso delicioso molho caseiro. Acompanha batatas rústicas assadas e uma salada fresca e colorida.',
            '1 pessoa',
            'R$ 38,90',
            'https://fake-api-tau.vercel.app/efood/jardim_terra//1.webp'
        ),
        new Product(
            21,
            'Lasanha de Berinjela',
            'A Lasanha de Berinjela é uma opção saborosa e reconfortante, preparada com camadas de berinjela grelhada, molho de tomate caseiro e um creme de castanha-de-caju. Assada até ficar dourada, esta lasanha vegana é a escolha perfeita para quem busca uma refeição saudável e deliciosa.',
            'de 1 a 2 pessoas',
            'R$ 42,90',
            'https://fake-api-tau.vercel.app/efood/jardim_terra//2.jpeg'
        ),
        new Product(
            22,
            'Bowl de Cogumelos e Quinoa',
            'O Bowl de Cogumelos e Quinoa é uma combinação nutritiva e saborosa de quinoa cozida, cogumelos salteados, espinafre, abacate e tomates-cereja. Servido com um molho de ervas frescas e limão, este prato é ideal para quem busca uma refeição leve e saudável.',
            'de 1 pessoa',
            'R$ 35,90',
            'https://fake-api-tau.vercel.app/efood/jardim_terra//3.jpg'
        )
    ]
    )

];

export default restaurants;
