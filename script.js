let linksGroup = document.querySelectorAll(".tablink");

for (let button of linksGroup) {
    button.addEventListener('click', openCity())
}

function openCity(cityName, elmnt, image) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundImage = "";
    }

    // Show the specific tab content
    document.getElementById(cityName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    document.getElementById(cityName).style.backgroundImage = image;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();





