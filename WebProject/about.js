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
const toggleButton = document.getElementById("toggleButton");
const myFooter = document.getElementById("myFooter");

// Add event listener to the button
toggleButton.addEventListener("click", function () {
  // Toggle the visibility of the footer
  if (myFooter.style.display === "none") {
    myFooter.style.display = "block";
  } else {
    myFooter.style.display = "none";
  }
});

// Initial call to update heading based on current screen width
updateHeadingBasedOnWidth();

// Event listener to update heading if screen width changes
window.addEventListener("resize", updateHeadingBasedOnWidth);

<<<<<<< HEAD
// Hide dropdown content when mouse leaves the dropdown
var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('mouseleave', function() {
    var dropdownContent = this.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
});
function openSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block"; // Show the sidebar if hidden
  } else {
    sidebar.style.display = "none"; // Hide the sidebar if visible
  }
}

function toggleDropdown() {
  const dropdown = document.getElementById("profile-dropdown");
  if (dropdown.classList.contains("hidden")) {
    dropdown.classList.remove("hidden"); // Show dropdown
  } else {
    dropdown.classList.add("hidden"); // Hide dropdown
=======
//Hide dropdown content when mouse leaves the dropdown
// document.addEventListener("DOMContentLoaded", function () {
//   // Select the specific div within the dropdown
//   var specificDiv = document.querySelector(
//     ".dropdown .row .column .fi fi-ts-angle-small-down"
//   );

//   // Add mouseleave event listener to the specific div
//   specificDiv.addEventListener("mouseleave", function () {
//     // Find the dropdown content within the parent dropdown element
//     var dropdownContent = this.parentElement.querySelector(".dropdown-content");

//     // Hide the dropdown content
//     if (dropdownContent) {
//       dropdownContent.style.display = "none";
//     }
//   });
// });
function openSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.display == "none") {
    sidebar.style.display = "block"; // Show the sidebar if hidden
  } else {
    sidebar.style.display = "none"; // Hide the sidebar if visible
  }
}
function openDropdown() {
  const dropdown = document.getElementById("dop");
  if (dropdown.style.display == "none") {
    dropdown.style.display = "block"; // Show the sidebar if hidden
  } else {
    dropdown.style.display = "none"; // Hide the sidebar if visible
>>>>>>> 8f1d477c86fa66371254e367e17114661e2ab2ac
  }
}

function toggleDropdown() {
  const dropdown = document.getElementById("profile-dropdown");
  if (dropdown.classList.contains("hidden")) {
    dropdown.classList.remove("hidden"); // Show dropdown
  } else {
    dropdown.classList.add("hidden"); // Hide dropdown
  }
}

function svgClicked() {
  click_event = new CustomEvent("click");
  btn_element = document.querySelector("#burg");
  btn_element.dispatchEvent(click_event);
}
