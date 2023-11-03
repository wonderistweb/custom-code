//Nav
var Webflow = Webflow || [];
Webflow.push(function () {
  Webflow.scroll.on(function() {
    if (window.scrollY > 0) { // starts when browser is scrollex on the Y axis
      $('#navi').addClass('nav_scrolled'); // adds the class nav_scrolled to the nav
      $('#logo').addClass('logo_scrolled'); // adds the class logo_scrolled to the logo
    } else { // not scrolled
      $('#navi').removeClass('nav_scrolled'); // removes the class nav_scrolled to the nav
      $('#logo').removeClass('logo_scrolled'); // removes the class logo_scrolled to the logo
    }
  })
});

// UNDERLINE
  gsap.defaults({ duration: 1.5, ease: "power2.out" });
  $("[hover_underline]").on("mouseenter", function () {
    gsap.fromTo($(this).find(".anim-underline"), { 
      x: "-110%"
    }, {
      x: "0%",
      duration: 0.5
    });
  });

  $("[hover_underline]").on("mouseleave", function () {
    gsap.to($(this).find(".anim-underline"), {
      x: "110%",
      duration: 0.5
    });
  });

  // Reparse HTML for imported Code
  //if you use a different value for the ID of your embed
  // then change it below - I used "svg-icon"
  var embedId = "svg-icon";
  var target = document.getElementById(embedId);
  if (target != null) {
    var targetText = target.innerHTML;
    function decodeField(target) {
      var dText = he.decode(target);
      document.getElementById(embedId).innerHTML = dText;
    }
    // run the function to decode the target field content
    decodeField(targetText);
  }

//decode CMS collection item embed
  $(document).ready(function () {
    // targeting class of .dental-icon
    $(".dental-icon").each(function () {
      $(this).hide(); // hide so code is not displayed (better to hide in CSS)
      $(this).html(he.decode($(this).html())); // decode the text
      $(this).show(); // show the decoded element
    });
  });

// Copywrite Current Year when the DOM is ready
  document.addEventListener("DOMContentLoaded", function() { 
    // get the the span element
    const yrSpan = document.querySelector('#current-year');
    if(yrSpan != null){
      // get the current year
      const currentYr = new Date().getFullYear();
      // set the year span element's text to the current year
      yrSpan.textContent = currentYr;
    }
  });
