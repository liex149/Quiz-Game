let body = document.querySelector('#intro');
let hEl = document.createElement('h1');
let headerEl = document.createElement('header');


let divEl = document.createElement('div')
let divElA = document.createElement('div');
let divElB = document.createElement('div');
let divElC = document.createElement('div');
let divElD = document.createElement('div');
let divElE = document.createElement('div');
let timeDiv = document.createElement('div');
let ViewScore = document.createElement('div');
// sections to each page
let sectionEl = document.createElement('section');
let sectionEl2 = document.createElement('section');

let questions = [
    {
        question: 'What is the name of the village Luffy was born in??',
        A: 'Foosha Village',
        B: 'Shimotsuki village',
        C: 'Cocoyasi Village',
        D: 'Syrup Village',
        answer: 'Foosha Village',
    },
    {
        question: 'What Devil Fruit did Luffy eat?',
        A: 'Mera Mera Fruit',
        B: 'Bara Bara Fruit',
        C: 'Suna Suna Fruit',
        D: 'Gum Gum Fruit',
        answer: 'Gum Gum Fruit',
    },
    {
        question: 'What One Piece character is a skilled swordsman who always carries three katanas with him?',
        A: 'Luffy',
        B: 'Nami',
        C: 'Zoro',
        D: 'Usopp',
        answer: 'Zoro',
    },
    {
        question: 'Zoro only became a member of the Straw Hat Pirates for this reason.',
        A: 'To defeat Hawk Eye and become the greatest swordsman.',
        B: 'To travel around the sea and eat good food.',
        C: 'To pretend to be friends with Luffy then destroy him.',
        D: 'All of the above.',
        answer: 'To defeat Hawk Eye and become the greatest swordsman.',
    }
]