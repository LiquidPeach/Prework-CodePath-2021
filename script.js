//Global constants
const cluePauseTime = 333; //pause time inbetween clues
const nextClueWaitTime = 1000; //wait before starting playback of clue sequence
const counter = document.getElementById("counter");

//Global Variables
var pattern;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long the clue plays for
var lives = 0;
var timerCount = 10;
let TIMER;

function startGame() {
  //initialize the game variables
  pattern = [];
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  lives = 3;
  TIMER = setInterval(timer, 1000);
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  randomPattern();
  playClueSequence();
}

function randomPattern() {
  for (let i = 0; i < 6; i++) {
    //generates random pattern each new game
    pattern[i] = Math.floor(Math.random() * 6) + 1;
  }
}

function stopGame() {
  gamePlaying = false;
  clearInterval(TIMER);
  timerCount = 10;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  let count = 0;
  timerCount = 10; //reset timer after guess
  if (gamePlaying) {
    lightButton(btn);
    playSound(btn);
    setTimeout(clearButton, clueHoldTime, btn);
    count++;
  }
  if (count == progress) {
    //once clue is done playing, start timer
    setTimeout(timer, clueHoldTime * (progress + 10));
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function timer() {
  if (timerCount >= 0) {
    //if the timer has not reached 0
    counter.innerHTML = timerCount;
    timerCount--;
  } else {
    timerCount = 10;
    lives--;
    if (lives == 0) {
      clearInterval(TIMER);
      loseGame();
    } else playClueSequence();
  }
}

function guess(btn) {
  console.log("user guessed: " + btn); //what button user pressed, 1-6
  if (!gamePlaying) {
    return;
  }
  /** Is guess correct? Is turn over? Is this the last turn? **/
  if (pattern[guessCounter] == btn) {
    //if guess was correct
    if (progress == guessCounter) {
      //if progress equals to amount of guesses, turn not over
      if (pattern.length - 1 == progress) {
        //if the amount of sequences equals progress, last turn
        winGame();
      } else {
        progress++;
        clueHoldTime -= 50; // make it play faster each turn
        playClueSequence();
      }
    } else guessCounter++;
  } else {
    lives--;
    if (lives == 0) {
      //if has no more lives, end game
      loseGame();
    } else playClueSequence();
  }
}

function loseGame() {
  stopGame();
  alert("Game Over! You lose :(");
}
function winGame() {
  stopGame();
  alert("YOU WIN!");
}

var sound = new AudioContext();
/* 3, 1, 6, 5 */
function playSound(btn) {
  if (btn == 1) {
    document.getElementById("Sound3").play();
  } else if (btn == 2) {
    document.getElementById("Sound1").play();
  } else if (btn == 3) {
    document.getElementById("Sound2").play();
  } else if (btn == 4) {
    document.getElementById("Sound3").play();
  } else if (btn == 5) {
    document.getElementById("Sound6").play();
  } else if (btn == 6) {
    document.getElementById("Sound1").play();
  }
}
/*
// Sound Synthesis Functions
const freqMap = {
  1: 100,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 478.0,
  6: 490.0
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
*/
