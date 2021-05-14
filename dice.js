var randonNumber =  Math.round(Math.random() * 5+1);
var die = document.getElementById('img11')
console.log(randonNumber)
if(randonNumber===1)
{
    die.src = "images/dice1.png";
}
else if (randonNumber===2)
{
    die.srec = "images/dice2.png";
}
else if (randonNumber===3)
{
    die.src = "images/dice3.png";
}
else if (randonNumber===4)
{
    die.src = "images/dice4.png";
}
else if (randonNumber===5)
{
    die.src = "images/dice5.png";
}
else
{
    die.src = "images/dice6.png";
}



var randonNumber2 =  Math.round(Math.random() * 5+1);
var die = document.getElementById('img22')
console.log(randonNumber2)
if(randonNumber2===1)
{
    die.src = "images/dice1.png";
}
else if (randonNumber2===2)
{
    die.srec = "images/dice2.png";
}
else if (randonNumber2===3)
{
    die.src = "images/dice3.png";
}
else if (randonNumber2===4)
{
    die.src = "images/dice4.png";
}
else if (randonNumber2===5)
{
    die.src = "images/dice5.png";
}
else
{
    die.src = "images/dice6.png";
}

if(randonNumber>randonNumber2)
{
    document.querySelector('h1').innerHTML = "Player1 Won!!";
}
else if(randonNumber2===randonNumber)
{
    document.querySelector('h1').innerHTML = "Try Again";
}
else 
{
    document.querySelector('h1').innerHTML = "Player2 Won!!";
}