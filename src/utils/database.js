// Imagem dos pratos
import saladaRavanello from '../assets/Pratos/1_SaladaRavanello.png'
import torradaDeParma from '../assets/Pratos/2_TorradasDeParma.png'
import spaguettiGambe from '../assets/Pratos/3_SpaguettiGambe.png'
import saladaMolla from '../assets/Pratos/4_SaladaMolla.png'
import prugnaPie from '../assets/Pratos/5_PrugnaPie.png'
import peachyPastrie from '../assets/Pratos/6_PeachyPastrie.png'
import macarons from '../assets/Pratos/7_Macarons.png'
import boloDeDamasco from '../assets/Pratos/8_BoloDeDamasco.png'
import sucoDeMaracuja from '../assets/Pratos/9_SucoDeMaracuja.png'
import cafeEspresso from '../assets/Pratos/10_CafeEspresso.png'
import teDAutonno from '../assets/Pratos/11_TeDAutonno.png'
import pomoBourbon from '../assets/Pratos/12_PomoBourbon.png'

export const itemsDatabase = [
    {
        id: 1,
        title: 'Salada Ravanello',
        description: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
        image: saladaRavanello,
        price: 49.97,
        type: 'mainCourse',
        ingredients: [
            {title: 'Alface'},
            {title: 'Tomate'},
            {title: 'Rabanete'},
            {title: 'Pao Naan'},
        ]
    },

    {
        id: 2,
        title: 'Torradas de Parma',
        description: 'Presunto de parma e rúcula em um pão com fermentação natural.',
        image: torradaDeParma,
        price: 25.97,
        type: 'mainCourse',
        ingredients: [
            {title: 'Pao'},
            {title: 'Presunto'},
            {title: 'Rúcula'},
        ]
    },

    {
        id: 3,
        title: 'Spaguetti Gambe',
        description: 'Massa fresca com camarões e pesto.',
        image: spaguettiGambe,
        price: 79.97,
        type: 'mainCourse',
        ingredients: [
            {title: 'Camarao'},
            {title: 'Massa'},
            {title: 'Pesto'},
        ]
    },

    {
        id: 4,
        title: 'Salada Molla',
        description: 'Tomates, coentro, pepino, cebola roxa. Frescos e temperados.',
        image: saladaMolla,
        price: 19.97,
        type: 'mainCourse',
        ingredients: [
            {title: 'Alface'},
            {title: 'Tomate'},
            {title: 'Pepino'},
        ]
    },

    {
        id: 5,
        title: 'Prugna Pie',
        description: 'Torta de ameixa com massa amanteigada, polvilho em açúcar.',
        image: prugnaPie,
        price: 49.97,
        type: 'dessert',
        ingredients: [
            {title: 'Ameixa'},
            {title: 'Farinha'},
        ]
    },

    {
        id: 6,
        title: 'Peachy pastrie',
        description: 'Delicioso folheado de pêssego com folhas de hortelã.',
        image: peachyPastrie,
        price: 32.97,
        type: 'dessert',
        ingredients: [
            {title: 'Pêssego'},
            {title: 'Farinha'},
        ]
    },

    {
        id: 7,
        title: 'Macarons',
        description: 'Farinha de amêndoas, manteiga, claras e açúcar.',
        image: macarons,
        price: 79.97,
        type: 'dessert',
        ingredients: [
            {title: 'Amêndoas'},
            {title: 'Claras'},
        ]
    },

    {
        id: 8,
        title: 'Bolo de damasco',
        description: 'Damascos frescos em uma massa sem glúten.',
        image: boloDeDamasco,
        price: 19.97,
        type: 'dessert',
        ingredients: [
            {title: 'Damasco'},
            {title: 'Farinha'},
        ]
    },

    {
        id: 9,
        title: 'Suco de maracujá',
        description: 'Suco de maracujá gelado, cremoso, docinho.',
        image: sucoDeMaracuja,
        price: 32.97,
        type: 'drink',
        ingredients: [
            {title: 'Maracuja'},
        ]
    },

    {
        id: 10,
        title: 'Espresso',
        description: 'Café cremoso feito na temperatura e pressões perfeitas.',
        image: cafeEspresso,
        price: 49.97,
        type: 'drink',
        ingredients: [
            {title: 'Café'},
        ]
    },

    {
        id: 11,
        title: 'Tè dautunno',
        description: 'Chá de anis, canela e limão. Sinta o outono italiano.',
        image: teDAutonno,
        price: 19.97,
        type: 'drink',
        ingredients: [
            {title: 'Canela'},
            {title: 'Aniz'},
            {title: 'Limão'},
        ]
    },

    {
        id: 12,
        title: 'Pomo bourbon',
        description: 'Maçã, whisky, canela. On the rocks.',
        image: pomoBourbon,
        price: 79.97,
        type: 'drink',
        ingredients: [
            {title: 'Canela'},
            {title: 'Whiskey'},
            {title: 'Maçã'},
        ]
    },

]

function MainCourse(plate){
    return plate.type === 'mainCourse'
}

function Dessert(plate){
    return plate.type === 'dessert'
}

function Drink(plate){
    return plate.type === 'drink'
}

// Definindo
export const mainCourse = itemsDatabase.filter(MainCourse) 
export const dessert = itemsDatabase.filter(Dessert) 
export const drink = itemsDatabase.filter(Drink) 






