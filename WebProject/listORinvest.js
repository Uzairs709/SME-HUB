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