var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded before attaching the event listener
    document.getElementById('revealButton').addEventListener('click', function () {
        // Toggle the 'revealed' class on the 'cover-background' element
        document.getElementById('cover-background').classList.toggle('revealed');
    });
});


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
