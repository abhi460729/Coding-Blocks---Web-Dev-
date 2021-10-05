/*var quidditchWinner = "Harry Potter";

function changeWinner(winner){
    console.log("Original Winner "+ winner);
    winner = "Draco Malfoy"
    console.log("Changed Winner "+ winner);
}

console.log("The winner was "+ quidditchWinner);

changeWinner(quidditchWinner)

console.log("Now the winner is "+quidditchWinner)*/

var quidditchWinners = [
    "Harry","Ron","Hermoine"
];

function changeWinners(winners){
    winners[0]="Draco";
    winners[1]="Crabbe";
    winners[2]="Pansy";
}

console.log("The winners were " + quidditchWinners);

changeWinners(quidditchWinners);

console.log("Now the winners are "+ quidditchWinners);

//It is actually pass by value only but as it an array (non primitive data type) so it has the reference.
 