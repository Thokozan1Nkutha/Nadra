
                              /// THE SCRIPT FOR THE "SAVED FOR LATER" PAGE ///



/// DROPDOWN MENU
// works only in the saved for later page when a user clicks the hamburger menu button 
$(document).ready(function(){
  $("#ham").click(function(){
      $("#navLinks").slideToggle();
  });
});

// displaySavedCards function
function displaySavedCards() {
  // getting the container element where the cards will be appended
  let container = document.querySelector('.card-container');

  // looping through the saved card objects in the local storage
  for (let i = 0; i < localStorage.length; i++) {
    // getting the key and value of the item at the current index
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    // parsing the value from JSON to an object
    let savedCard = JSON.parse(value);

    // creating the card element
    let card = document.createElement('div');
    card.classList.add('card', 'my-custom-class', 'card-description', 'card-title', 'addToCart_Button', 'video', 'price');
    card.dataset.key = key;

    // creating the card's content
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.innerHTML = `
      <h5 class="card-title">${savedCard.title}</h5>
      <p class="card-text">${savedCard.description}</p>
      <img src="${savedCard.imageUrl}" class="card-img-top" alt="Card image">
      <video id="print" class="" autoplay loop muted playsinline preload="auto">
                  <source src="${savedCard.videoUrl}" type="video/mp4">
      </video>
      <p class="price">${savedCard.price}</p>
      <button id="addToCart_Button" onclick="">${savedCard.addToCart_Button}</button>
    `;

    // creating the delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete")
    // creating the delete button's css
    deleteButton.classList.add("delete-button")
    deleteButton.addEventListener('click', deleteCard);
    cardBody.appendChild(deleteButton);

    // appending the card's content to the card element
    card.appendChild(cardBody);

    // appending the card element to the container
    container.appendChild(card);
  }
}

// The deleteCard function:
function deleteCard(event) {
  // getting the button that was clicked
  let button = event.currentTarget;
  // getting the card element that contains the button
  let card = button.closest('.card');

  if(!card) return;

  // getting the key of the card from the card element's dataset
  let key = card.dataset.key;
  // removing the card from the DOM
  card.remove();
  // removing the card from the local storage
  localStorage.removeItem(key);
}

// displaying the cards after the page loads
window.addEventListener('load', displaySavedCards);





