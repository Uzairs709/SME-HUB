function updateHeadingBasedOnWidth() {
  const screenWidth = window.innerWidth;
  const headingElement = document.getElementById("heading");

  if (screenWidth <= 768) {
    // Update heading text with line break for smaller screens
    headingElement.innerHTML = "Welcome <br/> To <br/> SME HUB";
  } else {
    // Reset heading text for larger screens
    headingElement.textContent = "Welcome To SME HUB";
  }
}
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

// Initial call to update heading based on current screen width
updateHeadingBasedOnWidth();

// Event listener to update heading if screen width changes
window.addEventListener("resize", updateHeadingBasedOnWidth);

