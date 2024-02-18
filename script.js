let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    loses : 0,
    draws : 0,
}

function computer_move() {
    let computer_mov = ''
    let random_number = Math.random();

    if (random_number >= 0 && random_number < 1/3) {
        computer_mov = 'rock';
    }
    else if (random_number >= 1/3 && random_number < 2/3) {
        computer_mov = 'paper';
    }
    else if (random_number >= 2/3 && random_number < 1) {
        computer_mov = 'scissor';
    }

    return computer_mov;
}

function play_game(player_move) {
    let computer_mov = computer_move();
    let result = '';

    if (player_move === 'rock') {
        if (computer_mov === 'rock') {
            result = 'we draw';
        }
        else if (computer_mov === 'paper') {
            result = 'you lose';
        }
        else if (computer_mov === 'scissor') {
            result = 'you win';
        }
    }
    else if (player_move === 'paper') {
        if (computer_mov === 'rock') {
            result = 'you win';
        }
        else if (computer_mov === 'paper') {
            result = 'we draw';
        }
        else if (computer_mov === 'scissor') {
            result = 'you lose';
        }
    }
    else if (player_move === 'scissor') {
        if (computer_mov === 'rock') {
            result = 'you lose';
        }
        else if (computer_mov === 'paper') {
            result = 'you win';
        }
        else if (computer_mov === 'scissor') {
            result = 'we draw';
        }
    }

    if (result === 'you win') {
        score.wins += 1;
    }
    else if (result === 'you lose') {
        score.loses += 1;
    }
    else if (result === 'we draw') {
        score.draws += 1
    }

    localStorage.setItem('score' , JSON.stringify(score));
    document.querySelector('.score').innerHTML = `wins : ${score.wins}, loses : ${score.loses}, draws : ${score.draws}`;

    document.querySelector('.move').innerHTML = `you <img src="images/${player_move}-emoji.png" class="img"><img src="images/${computer_mov}-emoji.png" class="img"> computer`;
    
    document.querySelector('.result').innerHTML = `${result}`;
    
    /*alert(`you picked ${player_move}\ncomputer picked ${computer_mov}\n${result}\n wins : ${score.wins} , loses : ${score.loses} , draws : ${score.draws}`)*/
}

function updateScore() {
    document.querySelector('.score').innerHTML = `wins : ${score.wins}, loses : ${score.loses}, draws : ${score.draws}`;
}