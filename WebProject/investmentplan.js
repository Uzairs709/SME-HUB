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
    }
  }
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
  