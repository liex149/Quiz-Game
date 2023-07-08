let body = document.querySelector('#intro');
let hEl = document.createElement('h1');
let headerEl = document.createElement('header');
let score = 0;
let secondsLeft = 60;
let i = 0

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
let sectionEl4 = document.createElement('section');



sectionEl4.remove();

body.appendChild(headerEl);
headerEl.appendChild(ViewScore).textContent = "VIEW SCORE"
headerEl.appendChild(timeDiv).textContent = ' '

body.appendChild(sectionEl);
sectionEl.appendChild(hEl).textContent = "Ready to Play?";
sectionEl.appendChild(divEl).textContent = 'press to play';

    //Click handler (Start Page button)
    divEl.addEventListener('click', function () {
        sectionEl.remove();
        ViewScore.remove();
        body.appendChild(sectionEl2);
        secondsLeft = 60;
        let timerInterval = setInterval(function () {
            secondsLeft--;
            headerEl.appendChild(timeDiv);
            timeDiv.textContent = "TIME: " + secondsLeft;
            if (secondsLeft < 0 || i == questions.length) {
                clearInterval(timerInterval);
                headerEl.appendChild(timeDiv);
                timeDiv.textContent = 'Game Over';

                console.log(score);
                return gameOver();
            }

        }, 500);

        return questionPopulator(i);

    });
//Click handler (SectionEl2)
sectionEl2.addEventListener('click', function (event) {
    let element = event.target;
    if (element.getAttribute('id') == "cor") {
        i++;
        score = score + 100;
        return questionPopulator(i);
    } else if (element.getAttribute('id') == "inc") {
        i++;
        secondsLeft = secondsLeft - 20;

        return questionPopulator(i);
    }
});


    function questionPopulator(i) {
    if (i == questions.length || secondsLeft < 1) {
        return gameOver();
    } else {

        //Appending question to sectionEl2
        //Appending answer choices to sectionEl2
        //setting ids based on correct or incorrect answer
        sectionEl2.appendChild(hEl).textContent = questions[i].question;
        sectionEl2.appendChild(divElA).textContent = questions[i].A;
        if (questions[i].A == questions[i].answer) {
            divElA.setAttribute("id", "cor");
        } else divElA.setAttribute("id", "inc")
        sectionEl2.appendChild(divElB).textContent = questions[i].B;
        if (questions[i].B == questions[i].answer) {
            divElB.setAttribute("id", "cor");
        } else divElB.setAttribute("id", "inc")
        sectionEl2.appendChild(divElC).textContent = questions[i].C;
        if (questions[i].C == questions[i].answer) {
            divElC.setAttribute("id", "cor");
        } else divElC.setAttribute("id", "inc")
        sectionEl2.appendChild(divElD).textContent = questions[i].D;
        if (questions[i].D == questions[i].answer) {
            divElD.setAttribute("id", "cor");
        } else divElD.setAttribute("id", "inc")
    }
}
function gameOver() {
    //if we finished the last question,
    //Wipe away sectionEl2
    //Populate sectionEl3, the finish page

    sectionEl2.remove();
    sectionEl3.remove();
    sectionEl4.remove();

    body.appendChild(sectionEl3);
    sectionEl3.appendChild(hEl).textContent = 'Congrats! Your score is: ' + score;


    sectionEl3.appendChild(button).textContent = 'Enter initials here ';
    sectionEl3.appendChild(inputEl);

}
function renderScore() {
    sectionEl3.remove();
    body.appendChild(sectionEl4);
    sectionEl4.textContent = ""
    sectionEl4.appendChild(divElE);
    divElE.appendChild(clear).textContent = 'clear';
    divElE.appendChild(goBack).textContent = 'Go Back';
    for (let index = 0; index < scoreArray.length; index++) {
        let sc = scoreArray[index];
        let init = initial[index];
        let li = document.createElement('li');
        li.textContent = 'INITIAL: ' + init + ' | SCORE: ' + sc;
        sectionEl4.appendChild(li);
    }

}


function renderScore() {
    sectionEl3.remove();
    body.appendChild(sectionEl4);
    sectionEl4.textContent = ""
    sectionEl4.appendChild(divElE);
    divElE.appendChild(clear).textContent = 'clear';
    divElE.appendChild(goBack).textContent = 'Go Back';
    for (let index = 0; index < scoreArray.length; index++) {
        let sc = scoreArray[index];
        let init = initial[index];
        let li = document.createElement('li');
        li.textContent = 'INITIAL: ' + init + ' | SCORE: ' + sc;
        sectionEl4.appendChild(li);
    }

}
//this is what happens when we click the button
button.addEventListener('click', function () {

    let initials = inputEl.value.trim();
    if (initials === '') {
        return;
    }
    initial.push(initials);
    scoreArray.push(score);
    inputEl.value = '';
    // code to render here
    storeScores();
    renderScore();

});
