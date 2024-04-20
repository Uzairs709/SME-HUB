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

// Initial call to update heading based on current screen width
updateHeadingBasedOnWidth();

// Event listener to update heading if screen width changes
window.addEventListener("resize", updateHeadingBasedOnWidth);
