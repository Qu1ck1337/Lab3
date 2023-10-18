// initializing NodeList of buttons and content for labs list
var labsListButtons = document.querySelectorAll(".labs__list__button");
var labsListContent = document.querySelectorAll(".hide");

// event for button click
function toggleDescriptionVisibility(e){
    console.log(e.target)
    labsListContent[e.target.id].classList.toggle("appearance_description");
    let plus = e.target.querySelector("svg").classList;
    if (plus.contains("interactive_plus")) {
        plus.remove("interactive_plus");
        plus.add("interactive_plus_hided");
        return
    }
    plus.remove("interactive_plus_hided");
    plus.add("interactive_plus");
}

// linking events to every button
for (let i = 0; i < labsListButtons.length; i++) {
    labsListButtons[i].addEventListener('click', toggleDescriptionVisibility);
}