// GSAP - Nav ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
//On Page Load
  function pageLoad() {
    let tl = gsap.timeline();
    tl.from(
      ".nav_wrap",
      {
        y: "-200px",
        ease: "power4.out",
        duration: 1
      },
      0
    );
  }
  pageLoad();

// iReparse HTML for imported Code f you use a different value for the ID of your embed
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
