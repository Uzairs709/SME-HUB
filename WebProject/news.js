$(document).ready(function() {
    var zindex = 10;
  
    $("div.card").click(function(e) {
      e.preventDefault();
  
      var isShowing = $(this).hasClass("show");
  
      if ($("div.cards").hasClass("showing")) {
        $("div.card.show").removeClass("show");
  
        if (isShowing) {
          $("div.cards").removeClass("showing");
        } else {
          $(this).css({ zIndex: zindex }).addClass("show");
        }
      } else {
        $("div.cards").addClass("showing");
        $(this).css({ zIndex: zindex }).addClass("show");
      }
  
      zindex++;
    });
  });
  const toggleButton = document.getElementById('toggleButton');
  const myFooter = document.getElementById('myFooter');

  // Add event listener to the button
  toggleButton.addEventListener('click', function() {
    // Toggle the visibility of the footer
    if (myFooter.style.display === 'none') {
      myFooter.style.display = 'block';
    } else {
      myFooter.style.display = 'none';
    }
  });