
                        /// THIS IS A SCRIPT FOR THE LANDING PAGE/INDEX.HTML ///



//////////////////////////////////////////// SLIDE SHOW/Animation effect ////////////////////////////////////////
//  used to transition between artworks/slides on first the row. "FEATURED ART"
$(document).ready(function() {
  let slides = $(".slideEE");
  let currentSlide = 0;

  slides.eq(currentSlide).addClass("active-slideEE");

  function nextSlide() {
    slides.eq(currentSlide).animate({ opacity: 0 }, 1000, function() {
      $(this).removeClass("active-slideEE");
    });

    currentSlide = (currentSlide + 1) % slides.length;

    slides.eq(currentSlide).animate({ opacity: 1 }, 1000, function() {
      $(this).addClass("active-slideEE");
    });
  }

  setInterval(nextSlide, 4000);
});



//////////////////////// a function with CHAINED EFFECTS
//this function inverts the website when a user clicks on "explore" at the navbar

$(document).ready(function() {
  $("#break").click(function() {
      $("body")
          .animate({opacity: 0.5}, "slow")
          .css("filter", "invert(100%)")
          .animate({opacity: 1}, "slow");
  });
});



//////////////// THIRD SECTION, the "For You" and "Following" tabs
// this function displays the for you tab when the page loads
// and displays the following tab when the button is clicked


$("document").ready(function(){
  $(".tab-slider--body").hide();
  $(".tab-slider--body:first").show();
});

 
$(".tab-slider--nav li").click(function() {
  $(".tab-slider--body").hide();
  let activeTab = $(this).attr("rel");
  $("#"+activeTab).fadeIn();
    if($(this).attr("rel") == "tab2"){
        $('.tab-slider--tabs').addClass('slide');
    }else{
        $('.tab-slider--tabs').removeClass('slide');
    }
  $(".tab-slider--nav li").removeClass("active");
  $(this).addClass("active");
});


//reference: https://chat.openai.com/chat