const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Your choices are: rock, paper or scissors. Please choose one of those.');
  }
}

console.log(getUserChoice('paper'));
console.log(getUserChoice('potato'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0: 
    return 'rock';
    case 1: 
    return 'paper';
    case 2: 
    return 'scissors';
  }
};

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
  return 'This game is a tie!'
  }
}

if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'You loose!';
  } else {
  return 'You won!';
  }
}
  
if (userChoice === 'scissors') {
  if (computerChoice === 'paper') {
    return 'You win!';
  } else {
    return 'You loose!';
  }
}

console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('paper', 'paper'));

/* ERROR MESSAGE: 
/home/ccuser/workspace/javascript_101_Unit_3_v2/rockPaperScissors.js:35
if (userChoice === 'paper') {
    ^

ReferenceError: userChoice is not defined
    at Object.<anonymous> (/home/ccuser/workspace/javascript_101_Unit_3_v2/rockPaperScissors.js:35:5)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:427:7)
    at startup (bootstrap_node.js:151:9)
    at bootstrap_node.js:542:3
    */



const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinne(userChoice, computerChoice));
};

playGame();