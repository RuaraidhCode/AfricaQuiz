const ticksContainer = document.querySelector('.ticks-container');
const scoreCounter = document.querySelector('.score-counter');
const alertContainer = document.querySelector('.alert-container');
const timer = document.querySelector('.timer');
const startButton = document.querySelector('.start-button');
const startContainer = document.querySelector('.start-container');
const timerContainer = document.querySelector('.timer-container')
const scoreContainer = document.querySelector('.score-container')



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



let countries = ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cameroon', 'Central African Republic', 'Chad', 'Comoros', 'Democratic Republic of Congo', 'Republic of Congo', 'Ivory Coast', 'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'];

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

    for(let i = 0; i <= countries.length - 1; i++){
    
    
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute("xmlns", 'http://www.w3.org/2000/svg');
        svg.setAttribute("width", "16");
        svg.setAttribute("height", "16");
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("class", `tick-${i} bi bi-check-lg text-success`);
        svg.setAttribute("viewBox", "0 0 16 16");
        svg.classList.add('make-hidden');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z');

        svg.appendChild(path);
        ticksContainer.appendChild(svg);
        
        function correctCountries(e){ 
            if(countryInput.value === countries[i]){
                svg.classList.add('make-visible');
                countryInput.value = '';
                countries[i] = 'done';
                addOne();
                scoreCounter.innerText = `Score: ${leftScore}/54`

                    const alert = document.createElement('div');
                    alert.setAttribute('class', 'alert alert-success');
                    alert.setAttribute('role', 'alert');
                    alert.innerText = 'Correct!';
                    alertContainer.appendChild(alert);
                    setTimeout(function(){alert.remove()
                }, 1000);

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
        countryInput.addEventListener('input', correctCountries)
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