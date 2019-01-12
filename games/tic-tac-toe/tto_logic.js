/* There are two conditions to play TTT 1) Make sure the other player is not about to score 3 in a row and intercept. 2) Attempt to line up 3 in a row.
Each block has three possible states - empty, player one mark, player two mark. 
There are three rows. Three colums and two possible diagonals. So, arrays? or just math? Both?
Empty spaces are 0. PLayer 1 is 1, player 2 (or computer) is 2
*/

function aiPlayer(chosen) {
    // Pick random number 0-9
    let pickedBox = Math.floor(Math.random() * 10);
    // I also need a check for the current state of the game board

    if (chosen !== pickedBox) {
        return pickedBox;
    }
}
aiPlayer()