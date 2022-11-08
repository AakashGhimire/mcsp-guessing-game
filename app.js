var historyOfUsers = {}; //key value pair for this object is name of users, and their numberOfPreviousAttempts
var numberOfPreviousAttempts = 0; //stores number of previous attempts
const secretNum = 47;

var userName = prompt("Enter your First Name: ");

play(); 

function play(){
    var counter = 1; //records the number of current attempts
    let inputStr; //prompts the user to guess the secret number

    while(true) { //this creates a infinite loop until user enters the secret number, or gives a null input
        inputStr = prompt("Enter the secret number");
        if (inputStr === null){ //or use inputStr === null, isNaN(inputStr)
            alert("Please enter an integer! Good bye " + userName+"!");
            break;
        }
       
       inputNum = Number(inputStr); //converts string received from prompt to a number

       if (inputNum === secretNum){
            if (historyOfUsers[userName] === undefined){ //if this user has not played before example historyOfUsers[Aakash] === undefined
                historyOfUsers[userName] = counter; //Aakash = 3
                alert("That's correct " + userName + "! You guessed the number in " + counter + " attempt(s).");
                break;

            } else{ //if this user has played before

                numberOfPreviousAttempts = historyOfUsers[userName];
                let difference = numberOfPreviousAttempts - counter; 
                numberOfPreviousAttempts = counter;
                historyOfUsers[userName] = numberOfPreviousAttempts;

                if (difference > 0){
                    alert(`That’s Correct ${userName}! And you beat your previous attempt by ${difference} fewer guesses!`)
                }else if (difference < 0){
                    alert(`That’s Correct ${userName}! You did better in your last game by ${Math.abs(difference)} fewer guesses!`)
                }else if(difference === 0){
                    alert(`You tied with your previous attempt`);
                }
                
                break;
                }   
            
        } else if(inputNum > secretNum){
            counter++;
            alert("Sorry " + userName + "! Guess lower");
        } else if(inputNum < secretNum){
            counter++
            alert("Sorry " + userName + "! Guess higher");
        } 
    } 

    while(true){
        let input = prompt(`Do you want to play again ${userName}? Y/N`);
        if (input.toLowerCase() === "y"){
            play();
        } else if (input.toLowerCase() === "n"){
            alert(`Thank you for playing ${userName}!`);
            userName = "";
        }
        break;
    }
       
}


