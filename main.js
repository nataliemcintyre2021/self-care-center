//Iteration 1: Minimum Viable Product (MVP) - Add Random Affirmation and Mantra feature
  // [] When user selects a message option and then clicks the "Receive Message" button, the user sees a random message from the list of possible messages for that category.

  // select affirmation or mantra, then click Receive Message, random message appears from affirmation array or mantra array

  //select input button (query selector), assign it to event listener, so sort of logic if input is selected(checked?) and then button is clicked (query selector, new button and new event listener), then on click show random message (math.random function) from correct array

  //if input checked and button clicked, run random message function
class Message {
  constructor(message) {
    this.message = message;
  }
}



// var affirmation() = {
//   this.affirmation -
// }
// var currentAffirmation;

var affirmations = [" I forgive myself and set myself free.",
" I believe I can be all that I want to be." , " I am in the process of becoming the best version of myself.", " I have the freedom & power to create the life I desire.", " I choose to be kind to myself and love myself unconditionally.", " My possibilities are endless.", " I am worthy of my dreams.", " I am enough.", " I deserve to be healthy and feel good.", " I am full of energy and vitality and my mind is calm and peaceful.", " Every day I am getting healthier and stronger.", " I honor my body by trusting the signals that it sends me.", " I manifest perfect health by making smart choices."
];

var mantras = [" Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", " Don’t let yesterday take up too much of today.",
" Every day is a second chance.", " Tell the truth and love everyone.", " I am free from sadness.", " I am enough.", " In the beginning it is you, in the middle it is you and in the end it is you.", " I love myself.", " I am present now.", " Inhale the future, exhale the past.", " This too shall pass.", " Yesterday is not today.", " The only constant is change.", " Onward and upward.",
" I am the sky, the rest is weather."]

var favoriteMessages = [];
var currentQuote = ""


var receiveMessageButton = document.querySelector('.receive-message');

var mantraPhrase = document.querySelector('.mantra-phrase');

// var messageSelector = document.querySelector()
// var radioButtons = document.getElementsbyName('message');
var checkAffirmationRadio = document.getElementById('affirmation-radio');
var checkMantraRadio = document.getElementById('mantra-radio');
var meditationImage = document.querySelector('.meditation-img');
var favoriteButton = document.querySelector('.favorite');
var secondFavoriteButton = document.querySelector('.favorite-two');
var quoteArea = document.querySelector('.quote-area');
var favoritesArea = document.querySelector('.favorite-area');
var mainPage = document.querySelector('.main-page');
var viewFavoritesPage = document.querySelector('.view-favorites');
var backToMainPageButton = document.querySelector('.back');
var deleteMessageButton = document.querySelector('.delete');

function hideImage() {
  meditationImage.classList.add('hidden');
}

function showFavoriteButton() {
  event.preventDefault();
  favoriteButton.classList.remove('hidden');
  secondFavoriteButton.classList.remove('hidden');
}

function hideMainPage() {
  mainPage.classList.add('hidden');
  viewFavoritesPage.classList.remove('hidden');

}

function showMainPage() {
  mainPage.classList.remove('hidden');
  viewFavoritesPage.classList.add('hidden');
}

receiveMessageButton.addEventListener('click', createRandomMessage);

favoriteButton.addEventListener('click', addToFavoriteList);

secondFavoriteButton.addEventListener('click', viewFavorites);

backToMainPageButton.addEventListener('click', showMainPage);

deleteMessageButton.addEventListener('click', deleteMessage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
 //check which radio button is selected;
 //use value attribute. if value === then return true. if true,
 //run for loop over that array and replace HTML
 function selectAffirmation() {
   var randomAffirmation = affirmations[getRandomIndex(affirmations)];
   currentQuote = randomAffirmation;
 }

 function selectMantra() {
   var randomMantra = mantras[getRandomIndex(mantras)];
   currentQuote = randomMantra;
 }

function createRandomMessage() {
  // mantraPhrase.innerHTML = '';
  if (checkAffirmationRadio.checked) {
    hideImage();
    selectAffirmation();
    quoteArea.innerText = currentQuote;
    // mantraPhrase.innerHTML += `<article class='new-phrase'>
    //   <h4>${affirmations[getRandomIndex(affirmations)]}</h4
    //   </article`
    showFavoriteButton();
  } else if (checkMantraRadio.checked) {
    hideImage();
    selectMantra();
    quoteArea.innerText = currentQuote;
    // mantraPhrase.innerHTML += `<article class='new-phrase'>
    //   <h4 class="the-message">${mantras[getRandomIndex(mantras)]}</h4
    //   </article`
    showFavoriteButton();

  }
//   for (i = 0; i < radioButtons.length; i++) {
//     if (radioButtons[i].checked === true) {
//       mantraPhrase.innerHTML += `<article class='new-phrase'>
//       <h3>${affirmations[getRandomIndex(affirmations)]}</h3
//       </article`
//     }
//   }
}



function viewFavorites() {
  favoritesArea.innerText = favoriteMessages;


  hideMainPage();
}

function addToFavoriteList() {
  

  event.preventDefault();
  favoriteMessages.push(currentQuote);
  for (i = 0; i < favoriteMessages.length; i++) {
    favoritesArea.innerHTML += `<ul class="favorite-area">
    <li>${favoriteMessages[i]}</li></ul>`
  }
  console.log(favoriteMessages);
}


function deleteMessage() {
  favoriteMessages.pop();
  favoritesArea.innerText = favoriteMessages;
  console.log(favoriteMessages);
}
//add innerHTML that adds ul and lis
