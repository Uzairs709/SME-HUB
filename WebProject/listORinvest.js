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
  
  // Get all business containers
// Get all business containers
const businessContainers = document.querySelectorAll('.business');

businessContainers.forEach(business => {
  // Add hover event listener to each business container
  business.addEventListener('mouseenter', () => {
    // Add zoom-in class to the hovered business container
    business.classList.add('zoom-in');
    // Add shade-down class to all business containers except the hovered one
    businessContainers.forEach(item => {
      if (item !== business) {
        item.classList.add('shade-down');
      }
    });
  });

  // Remove classes when mouse leaves
  business.addEventListener('mouseleave', () => {
    // Remove zoom-in class from all business containers
    businessContainers.forEach(item => {
      item.classList.remove('zoom-in');
    });
    // Remove shade-down class from all business containers
    businessContainers.forEach(item => {
      item.classList.remove('shade-down');
    });
  });
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
