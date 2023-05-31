import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    let categories = await prisma.categories.findMany();
    if (categories.length === 0) {
        await prisma.categories.create({
        data: {name: "Vestuário"},
        });
        await prisma.categories.create({
        data: {name: "Decoração"},
        });
        await prisma.categories.create({
        data: {name: "Presentes"},
        });
        await prisma.categories.create({
        data: {name: "Cozinha"},
        });
    categories = await prisma.categories.findMany();
}

let types = await prisma.types.findMany();
    if (types.length === 0) {
        await prisma.types.create({
        data: {name: "Camisas", categoryId: categories[0].id}, //0
        });
        await prisma.types.create({
        data: {name: "Moletons", categoryId: categories[0].id}, //1
        });
        await prisma.types.create({
        data: {name: "Pantufas", categoryId: categories[0].id}, //2
        });
        await prisma.types.create({
        data: {name: "Almofadas", categoryId: categories[1].id}, //3
        });
        await prisma.types.create({
        data: {name: "Luminárias", categoryId: categories[1].id}, //4
        });
        await prisma.types.create({
        data: {name: "Quadros", categoryId: categories[1].id}, //5
        });
        await prisma.types.create({
        data: {name: "Dia das mães", categoryId: categories[2].id}, //6
        });
        await prisma.types.create({
        data: {name: "Dia dos Pais", categoryId: categories[2].id}, //7
        });
        await prisma.types.create({
        data: {name: "Presentes para Amigos", categoryId: categories[2].id}, //8
        });
        await prisma.types.create({
        data: {name: "Canecas", categoryId: categories[3].id}, //9
        });
        await prisma.types.create({
        data: {name: "Baldes de Pipoca", categoryId: categories[3].id}, //10
        });
        await prisma.types.create({
        data: {name: "Copos de Shot", categoryId: categories[3].id}, //11
        });
    types = await prisma.types.findMany();
}

    let products = await prisma.products.findMany();
    if (products.length === 0) {
        await prisma.products.create({
            data: {
                name: "Camisa Friends Feminina",
                image: "https://http2.mlstatic.com/D_NQ_NP_911488-MLB43111080926_082020-O.jpg",
                description: "Camiseta 100% algodão.",
                price: 8990,
                stock: 1000,
                ProductTypes: {
                create: [
                {typeId: types[0].id},
                {typeId: types[6].id},
                {typeId: types[8].id},
                ]}
            },
        });
        await prisma.products.create({
            data: {
                name: "Moletom Malévola",
                image: "https://images.tcdn.com.br/img/img_prod/723087/moletom_malevola_vila_canguru_vinho_8455_1_0fad73f368ae018bee809558aaa836a7.png",
                description: "Uma peça quente e confortável para você usar pensando no seu bem-estar e beleza no dia a dia. ",
                price: 2290,
                stock: 1000,
                ProductTypes: {
                create: [
                {typeId: types[1].id},
                {typeId: types[6].id},
                {typeId: types[8].id},
                ]}
            },
        });
        await prisma.products.create({
            data: {
                name: "Pantufa Garfield",
                image: "https://images.tcdn.com.br/img/img_prod/723087/pantufa_garfield_chinelo_de_quarto_8287_1_32f037052a6b4a62c59251f8031a8c60.png",
                description: "Chinelo do gato Garfield é a companhia ideal para os dias mais geladinhos! Frio no pé? Nunca mais!",
                price: 7990,
                stock: 1000,
                ProductTypes: {
                create: [
                {typeId: types[2].id},
                {typeId: types[6].id},
                {typeId: types[7].id},
                {typeId: types[8].id},
                ]}
            },
        });
        await prisma.products.create({
            data: {
                name: "Almofada Stranger Things",
                image: "https://images.tcdn.com.br/img/img_prod/723087/almofada_stranger_things_luzes_7883_1_24ce0b679703261611f08556d67614f8.jpg",
                description: "Perfeita para os dias de preguiça, não importa se é no sofá ou na cama, essa almofada te acompanha em todos os lugares!",
                price: 12890,
                stock: 1000,
                ProductTypes: {
                create: [
                {typeId: types[3].id},
                {typeId: types[6].id},
                {typeId: types[7].id},
                {typeId: types[8].id},
                ]}
            },
        });
        await prisma.products.create({
            data: {
                name: "Luminária Stitch",
                image: "https://images.tcdn.com.br/img/img_prod/723087/luminaria_stitch_disney_8498_2_9f06c557770a993313e9947eb31402dd.jpeg",
                description: "Produto perfeito para aqueles que são fãs do adorável e carismático alienígena azul da famosa animação Lilo & Stitch.",
                price: 17890,
                stock: 1000,
                ProductTypes: {
                create: [
                {typeId: types[4].id},
                {typeId: types[6].id},
                {typeId: types[7].id},
                {typeId: types[8].id},
                ]}
            },
        });
        await prisma.products.create({
            data: {
                name: "Quadro Friends",
                image: "https://images.tcdn.com.br/img/img_prod/723087/quadro_metal_friends_7711_1_0b7c3953f487c272ff39c68cf00e1733.jpg",
                description: "Acompanha 4 adesivos dupla face para fixação em superfícies lisas",
                price: 3490,
                stock: 1000,
                ProductTypes: {
                create: [
                {typeId: types[5].id},
                {typeId: types[6].id},
                {typeId: types[7].id},
                {typeId: types[8].id},
                ]}
            },
        });
        await prisma.products.create({
            data: {
                name: "Caneca Bela e a Fera",
                image: "https://images.tcdn.com.br/img/img_prod/723087/caneca_bela_e_a_fera_momentos_350ml_8219_1_679cc7370096dd2b5173fc988de9e8e2.png",
                description: "A caneca é feita de cerâmica de alta qualidade e possui uma bela ilustração que retrata os momentos mais icônicos do filme.",
                price: 7890,
                stock: 1000,
                ProductTypes: {
                create: [
                {typeId: types[6].id},
                {typeId: types[8].id},
                {typeId: types[9].id},
                ]}
            },
        });
        await prisma.products.create({
            data: {
                name: "Placa Don't Use The Force",
                image: "https://images.tcdn.com.br/img/img_prod/723087/placa_don_t_use_the_force_2889_2_20201214005635.jpg",
                description: "Placa decorativa fabricada com poliestireno de alto impacto (PSAI) de 2mm e adesivo vinil e/ou silkscreen e/ou impressão UV.",
                price: 4290,
                stock: 1000,
                ProductTypes: {
                create: [
                {typeId: types[5].id},
                {typeId: types[7].id},
                {typeId: types[8].id},
                ]}
            },
        });
        await prisma.products.create({
            data: {
                name: "Caneca Harry Potter",
                image: "https://images.tcdn.com.br/img/img_prod/723087/caneca_3d_harry_potter_chapeu_seletor_8575_5_db662ab3d47343617d7f79441f0ce7a3.png",
                description: "Está procurando por uma caneca que traga toda a magia e a emoção do mundo dos bruxos? Então, você precisa conferir a Caneca Harry Potter 3D Chapéu Seletor!",
                price: 7290,
                stock: 1000,
                ProductTypes: {
                create: [
                {typeId: types[7].id},
                {typeId: types[8].id},
                {typeId: types[9].id},
                ]}
            },
        });
        await prisma.products.create({
            data: {
                name: "Caneca Yoda Star Wars",
                image: "https://images.tcdn.com.br/img/img_prod/723087/caneca_formato_3d_yoda_star_wars_5997_1_20201214005548.jpg",
                description: "Produto importado.",
                price: 7290,
                stock: 1000,
                ProductTypes: {
                create: [
                {typeId: types[7].id},
                {typeId: types[8].id},
                {typeId: types[9].id},
                ]}
            },
        });
        await prisma.products.create({
            data: {
                name: "Almofada Porta Pipoca Gamer",
                image: "https://images.tcdn.com.br/img/img_prod/723087/almofada_porta_pipoca_game_geek_3447_1_20201214005628.jpg",
                description: "Contém: 1 Bandeja, 1 Almofada, 1 Balde e 1 Copo canudo.",
                price: 12990,
                stock: 1000,
                ProductTypes: {
                create: [
                {typeId: types[3].id},
                {typeId: types[6].id},
                {typeId: types[7].id},
                {typeId: types[8].id},
                {typeId: types[10].id},
                ]}
            },
        });
        await prisma.products.create({
            data: {
                name: "Kit Shot Homer Os Simpsons",
                image: "https://images.tcdn.com.br/img/img_prod/723087/kit_shot_homer_amigos_5301_1_655139e4b90b994ce32ed31f94f32dcd.jpg",
                description: "Com o kit shot homer amigos você terá sua bebida mais geladaaaaaaa por muito mais tempo.",
                price: 12490,
                stock: 1000,
                ProductTypes: {
                create: [
                {typeId: types[6].id},
                {typeId: types[7].id},
                {typeId: types[8].id},
                {typeId: types[11].id},
                ]}
            },
        });
    }
} catch (error) {
console.error(error);
process.exit(1);
} finally {
await prisma.$disconnect();
}
}

main();
