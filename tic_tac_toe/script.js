let playerText = document.getElementById('playerText');
let restartButton = document.getElementById('restartBtn');
let boxes = Array.from(document.getElementsByClassName('box'));

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winnin-bloks');

const O_TEXT = 'O';
const X_TEXT = 'X';
let currentplayer = X_TEXT;

let spaces = Array(9).fill(null);
/**
 * this function will start the game
 */
const startgame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));
}

function boxClicked(e)
{
    const id = e.target.id;
    // to check if boxes are empty then fill them with x and o values
    if(!spaces[id])
    {
        spaces[id] = currentplayer;
        e.target.innerText = currentplayer


        // to check if a player is already won the game  then print the winner of the game
        if(playerHasWon() != false)
        {
            let win = currentplayer;
            playerText.innerText = `${win}-->  won game!`;
            currentplayer = '';


            let winning_blocks = playerHasWon()

            winning_blocks.map(box => boxes[box].style.backgroundColor = winnerIndicator)
            return
        }

        if(!playerHasWon())
        {
            let win = 'no winner'
            playerText.innerText = `${win}`;
        }
        // this is to switch between different players
        currentplayer = currentplayer == X_TEXT ? O_TEXT: X_TEXT

    }

}
// table of combinations of winning and losing

const winner = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon(){

    for (const condition of winner) {

        let [a,b,c] = condition // distracting array

        if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return [a,b,c]
        };

    }
    return false;
}
// the buttons to restart the game
restartButton.addEventListener('click', restartgame)


/**
 * this function is called when a player
 * has won the game and the game has ended
 *  and restart the game
 */

function restartgame(){

    if(!playerHasWon() && playerHasWon())
    {
        restartgame = false;
    }
    else{
        spaces.fill(null);
        boxes.forEach(box => {
            box.innerHTML = '';
            box.style.backgroundColor = '';
    });

        // to reset the current player to x_text
        currentplayer = X_TEXT

        // to reset the text tic tac toe after the game has ended
        playerText.innerText  = "Tic Tac Toe";

    }

}

startgame();
