const ticksContainer = document.querySelector('.ticks-container');
const scoreCounter = document.querySelector('.score-counter');
const alertContainer = document.querySelector('.alert-container');
const timer = document.querySelector('.timer');
const startButton = document.querySelector('.start-button');
const startContainer = document.querySelector('.start-container');
const timerContainer = document.querySelector('.timer-container');
const scoreContainer = document.querySelector('.score-container');
const card = document.querySelector('.card')



let leftScore = 0

function addOne(){
    return(leftScore = leftScore + 1)
 }

let rightTime = 0

function timeDown(){
    return(rightTime = rightTime - 1)
}

let midTime = 6

function midTimeDown(){
    return(midTime = midTime - 1)
}

let leftTime = 4

function leftTimeDown(){
    return(leftTime = leftTime - 1)
}

// Success Alert
function alert(){
    const alert = document.createElement('div');
    alert.setAttribute('class', 'alert alert-success');
    alert.setAttribute('role', 'alert');
    alert.innerText = 'Correct!';
    alertContainer.appendChild(alert);
    setTimeout(function(){alert.remove()
    }, 1000);
}


let countries = ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroon', 'Central African Republic', 'Chad', 'Democratic Republic of Congo', 'Republic of Congo', 'Ivory Coast', 'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'Senegal', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'];
// Cabo Verde[6] Comoros[10] Mauritius[33] Sao Tome and Principe[40] Seychelles[42]
let islandCountries = ['Cabo Verde', 'Comoros', 'Mauritius', 'Sao Tome and Principe', 'Seychelles'];

// Start Game
function startGame(e){

    // Countries input
    const inputLabel = document.createElement('label');
    inputLabel.setAttribute('class', 'label-country-name');
    inputLabel.setAttribute('for', 'country-name');
    inputLabel.innerText = 'Enter country:'
    startContainer.appendChild(inputLabel);
                

    const startInput = document.createElement('input');
    startInput.setAttribute('class', 'enter-country-name');
    startInput.setAttribute('type', 'text');
    startInput.setAttribute('name', 'country-name');
    startContainer.appendChild(startInput);


    const countryInput = document.querySelector('.enter-country-name');

    // Island Countries
    for(let j = 0; j <= islandCountries.length; j++){
        countryInput.addEventListener('input', correctCountries)

    // Ticks
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute("xmlns", 'http://www.w3.org/2000/svg');
        svg.setAttribute("width", "16");
        svg.setAttribute("height", "16");
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("class", `tick-${j} bi bi-check-lg text-success`);
        svg.setAttribute("viewBox", "0 0 16 16");
        svg.classList.add('make-hidden');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z');
        svg.appendChild(path);
        ticksContainer.appendChild(svg);
            
       

    // Correct country input
        function correctCountries(e){ 
            if(countryInput.value === islandCountries[j] || countryInput.value === islandCountries[j].toLowerCase() || countryInput.value === islandCountries[j].toUpperCase()){
                svg.classList.add('make-visible');
                countryInput.value = '';
                islandCountries[j] = 'done';
                addOne();
                scoreCounter.innerText = `Score: ${leftScore}/54`;
                alert();

        // Game is completed
                if(scoreCounter.innerText === 'Score: 54/54'){
                    clearInterval(timing);
                    inputLabel.remove();
                    startInput.remove();
                    scoreCounter.remove();
                    const gameWon = document.createElement('h2');
                    gameWon.innerText = 'Congratulations!';
                    gameWon.setAttribute('class', 'game-over');
                    scoreContainer.appendChild(gameWon);
                    const resetButton = document.createElement('a');
                    resetButton.setAttribute('class', 'start-button btn btn-primary btn-lg active');
                    resetButton.setAttribute('role', 'button');
                    resetButton.setAttribute('aria-pressed', 'true');
                    resetButton.innerText = 'Reset';
                    startContainer.appendChild(resetButton);
                    resetButton.addEventListener('click', resetGame);
                    celebration();
                } 
            }
        }
    }

    // Non-island Countries
    for(let i = 0; i <= countries.length - 1; i++){    
        countryInput.addEventListener('input', correctCountries)

    // Correct country input
        function correctCountries(e){ 
            if(countryInput.value === countries[i] || countryInput.value === countries[i].toLowerCase() || countryInput.value === countries[i].toUpperCase()){
                countryInput.value = '';
                countries[i] = 'done'
                addOne()
                scoreCounter.innerText = `Score: ${leftScore}/54`

    // Adding Green Image
                const addCountry = document.createElement('img');
                addCountry.setAttribute('src', `Africa${i}.png`);
                addCountry.setAttribute('class', 'map-image');
                card.appendChild(addCountry);
                alert();

    // Game is completed
                if(scoreCounter.innerText === 'Score: 54/54'){
                    clearInterval(timing);
                    inputLabel.remove();
                    startInput.remove();
                    scoreCounter.remove();
                    const gameWon = document.createElement('h2');
                    gameWon.innerText = 'Congratulations!';
                    gameWon.setAttribute('class', 'game-over');
                    scoreContainer.appendChild(gameWon);
                    const resetButton = document.createElement('a');
                    resetButton.setAttribute('class', 'start-button btn btn-primary btn-lg active');
                    resetButton.setAttribute('role', 'button');
                    resetButton.setAttribute('aria-pressed', 'true');
                    resetButton.innerText = 'Reset';
                    startContainer.appendChild(resetButton);
                    resetButton.addEventListener('click', resetGame);
                    celebration();
                }
            } 
        }
    }

    // Timer
    const timing = setInterval(function(){timer.innerText = `Time: ${leftTime}:${midTime}${timeDown()}`;

        if((rightTime === -1) && (midTime !== -1)){
            rightTime = 10;
            timer.innerText = `Time: ${leftTime}:${midTimeDown()}${timeDown()}`;
            }

        if(midTime === -1){
            rightTime = 10;
            midTime = 6;
            timer.innerText = `Time: ${leftTimeDown()}:${midTimeDown()}${timeDown()}`;
            }

        if(leftTime === -1){
            clearInterval(timing);
            timer.innerText = 'Time: 0:00';
            inputLabel.remove();
            startInput.remove();
            timer.remove();
            const gameOver = document.createElement('h2');
            gameOver.innerText = 'Game Over!';
            gameOver.setAttribute('class', 'game-over');
            timerContainer.appendChild(gameOver);
            const resetButton = document.createElement('a');
            resetButton.setAttribute('class', 'reset-button btn btn-primary btn-lg active');
            resetButton.setAttribute('role', 'button');
            resetButton.setAttribute('aria-pressed', 'true');
            resetButton.innerText = 'Reset';
            startContainer.appendChild(resetButton);
            resetButton.addEventListener('click', resetGame);
            }
    }, 1000);

    startButton.remove();
    if(startContainer.contains(document.querySelector('.reset-button'))){
            document.querySelector('.reset-button').remove();
    }
}

// Reset
function resetGame(e){
    location.reload()
}

startButton.addEventListener('click', startGame)

function celebration(){
    setTimeout(function(){
        document.body.style.backgroundColor = 'red';
            setTimeout(function(){
                document.body.style.backgroundColor = 'orange';
                setTimeout(function(){
                    document.body.style.backgroundColor = 'yellow';
                    setTimeout(function(){
                        document.body.style.backgroundColor = 'green';
                        setTimeout(function(){
                            document.body.style.backgroundColor = 'blue';
                            setTimeout(function(){
                                document.body.style.backgroundColor = 'white';
                        },500)
                    },500)
                },500)
            },500)
        },500)
    }, 500)
}