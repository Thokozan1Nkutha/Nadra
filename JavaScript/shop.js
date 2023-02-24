
                                /// THE SCRIPT FOR THE "SHOP" PAGE ///


// A function which contains hiding/showing
// it hides and shows the menu items when the hamburger icon is clicked
$(document).ready(function(){
  $("#navLinks").hide()
  $("#ham").click(function(){
    $("#navLinks").toggle('show');
    this.classList.toggle('active');
  });
});




//////////////////////        SAVING THE CARDS      ///////////////////////

// getting the buttons
let buttons = document.querySelectorAll('#saveForLater_Button');
buttons.forEach(button => {
  button.addEventListener('click', saveCard);
});

// saveCard function
function saveCard(event) {
  // getting the button that was clicked
  let button = event.currentTarget;

  // getting the card element that contains the button
  let card = button.closest('#card');

  // checking if the card element exists
  if (card) {
    // extracting the content of the card
    let title = card.querySelector('.card-title');
    let description = card.querySelector('.card-description');
    let image = card.querySelector('#print');
    let video = card.querySelector('#video');
    let price = card.querySelector('.price');
    let addToCart_Button = card.querySelector('#addToCart_Button'); 

    // checking if the elements exist
    if (!title || !description || !price) return;
    if (!image && !video) return;
    if(!addToCart_Button) return;

    // extracting the text content and src of the elements
    let titleText = title.textContent;
    let descriptionText = description.textContent;
    let buttonText = addToCart_Button.textContent;
    let videoUrl = video ? video.src : null;
    let imageUrl;
    let priceText = price.textContent;

    if (image) {
      imageUrl = image.src;
    }
    else if (video){
      imageUrl = video.poster;
    }

    // creating a card object with the extracted content
    let savedCard = { title: titleText, description: descriptionText, addToCart_Button: buttonText, imageUrl, videoUrl, price: priceText };

    // saving the card object in the local storage
    let key = `card-${Date.now()}`;
    localStorage.setItem(key, JSON.stringify(savedCard));

    // creating the alert box and adding its css class
   let alertBox = document.createElement("div");
   alertBox.classList.add("alertbox");
   alertBox.innerHTML = `Item added successfully. You have ${localStorage.length} items in your saved for later page`;
   document.body.appendChild(alertBox);

   // fades out after 5 seconds
   setTimeout(() => {
      alertBox.remove();
    }, 5000);
  }
  
}



/////////////////////////         LIKE BUTTON          ////////////////////////////

document.querySelectorAll("#heart-svg").forEach(svg => {
  svg.addEventListener("click", function(event) {
      // getting the counter element next to the SVG icon
      let counter = this.nextElementSibling;

      // getting the current count
      let count = parseInt(counter.textContent);

      // checking if the count is already at the maximum or minimum value
      if (this.classList.contains("liked")) {
          // decreasing the count
          count--;
          this.classList.remove("liked");
      } else {
          // increasing the count
          count++;
          this.classList.add("liked");
      }

      // updating the counter element
      counter.textContent = count;
  });
});