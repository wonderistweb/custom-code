// set the year span element's text to the current year
   document.addEventListener("DOMContentLoaded", function() { 
    // get the the span element
    const yrSpan = document.querySelector('#current-year');
    if(yrSpan != null){
      // get the current year
      const currentYr = new Date().getFullYear();
      // set the year span
      yrSpan.textContent = currentYr;
    }
  });

// remove any section with this attribute that contains no cms items
$("[check-visibility='empty']").each(function (index) {
  if ($(this).find(".w-dyn-item").length === 0) $(this).remove();
});
