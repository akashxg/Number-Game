## Javascript ASSIGNMENT: "Guess the Number" Game

This assignment will test your understanding of Javascript and knowledge of syntax.  
You must build a game that prompts the user to guess a randomly generated number.  
The game should keep a list of previous guesses and a tally of how many guesses have
been made.  The user will have ten tries before the game is stopped and a button appears that
resets the game.  The same reset button should appear if the user successfully guesses the number.
All value displays (including the input) should be reset and the input
cursor should reappear.  This is also a great opportunity to practice CSS, in addition
to the HTML and Javascript that you will need!

### Here are a few clues to help you along...
You will be using the following Javascript tools,
1. An If/elseIf/Else statement
2. Element selectors such as document.getElementById() or document.querySelector()
3. You will have to use document.querySelectorAll and an iteration for resetting the game.
4. To generate a random number you will need const secretNumber = Math.floor(Math.random() * 100);
5. You will have to use this random number generator twice.
6. You will need a for loop to reset display values (not the input).
7. You will need to add a "click" event listener.
8. Please include an alert that notifies the user only when they are correct.
9. Create different <p> tags to display the number of guesses made, the list of previous
numbers guessed, and whether the guess was too high or to low.
10. You might need a += operator, && operator, < operator, > operator, === operator.
11. You will need input.focus(); -google to see what it does!

### Instructions to start project
Just in case you do not remember how to create a new project and clone git...
1. Create a new directory
`mkdir numberGame`
2. Change your working directory to numberGame
`cd numberGame`
3. Clone the code you need into the directory you just created
`git clone https://github.com/steveflint3/numberGame.git`
4. Open your cloned code in Atom
`atom .`
