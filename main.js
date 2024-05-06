import './style.css';
import getRandomWord from './src/randomWord';
import { setSharkImage } from './src/sharkImage';
import { setupWord, isLetterInWord, revealLetterInWord } from './src/word';
import setupGuesses from './src/guess';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();
  setSharkImage(document.querySelector('#shark-img'), numWrong);
  setupWord(document.querySelector(`#word-container`),word);

const handleGuess = (guessEvent, letter) => {
  const button = guessEvent.target;
  button.setAttribute(`disabled`, true)
  if (isLetterInWord(letter)){
    revealLetterInWord(letter);
  } else {
    numWrong++;
    setSharkImage(document.querySelector('#shark-img'), numWrong);
  }
  };
  setupGuesses(document.querySelector('#letter-buttons'), handleGuess);

  
  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);           
  console.log(isLetterInWord(word[0]), '(should be true)'); //need delete maybe
  console.log(isLetterInWord('1'), '(should be false)');    //need delete maybe
  revealLetterInWord(word[0]);
};

initSharkwords();





