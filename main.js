//Iteration 1: Minimum Viable Product (MVP) - Add Random Affirmation and Mantra feature
  // [] When user selects a message option and then clicks the "Receive Message" button, the user sees a random message from the list of possible messages for that category.

  // select affirmation or mantra, then click Receive Message, random message appears from affirmation array or mantra array

  //select input button (query selector), assign it to event listener, so sort of logic if input is selected(checked?) and then button is clicked (query selector, new button and new event listener), then on click show random message (math.random function) from correct array

  //if input checked and button clicked, run random message function


  var affirmations = ["I forgive myself and set myself free.",
"I believe I can be all that I want to be.", "I am in the process of becoming the best version of myself.", "I have the freedom & power to create the life I desire.", "I choose to be kind to myself and love myself unconditionally.", "My possibilities are endless.", "I am worthy of my dreams.", "I am enough.", "I deserve to be healthy and feel good.", "I am full of energy and vitality and my mind is calm and peaceful.", "Every day I am getting healthier and stronger.", "I honor my body by trusting the signals that it sends me.", "I manifest perfect health by making smart choices."];

var mantras = ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.", "Don’t let yesterday take up too much of today.", "Every day is a second chance.", "Tell the truth and love everyone.", "I am free from sadness.", "I am enough.", "In the beginning it is you, in the middle it is you and in the end it is you.", "I love myself.", "I am present now.", "Inhale the future, exhale the past.", "This too shall pass.", "Yesterday is not today.", "The only constant is change.", "Onward and upward.", "I am the sky, the rest is weather."];


receiveMessageButton.addEventListener('click', createRandomMessage);

var receiveMessageButton = document.querySelector('.receive-message');

var mantraPhrase = document.querySelector('.mantra-phrase');

var messageSelector = document.querySelector()

var checkAffirmationRadio = document.getElementById('affirmation-radio');


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createRandomMessage() {
  // if (checkAffirmationRadio.checked) {
  // for (var i = 0; i < affirmations.length; i++) {
  //   if (checkAffirmationRadio.checked) {
  //     mantraPhrase.innerHTML = '';
  //     mantraPhrase.innerHTML +=
  //     `<p> class="new- phrase"${affirmations[getRandomIndex(affirmations)]}<p>`
  // }//the radio button is checked in affirmation {
  // }  //change the inner HTML from section to be phrase from affirmations array

    //change the inner HTML from section to be phrase from mantras array
// function createRandomMessage() {
//   for (var i = 0; i < )
// }
