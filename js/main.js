var buttons = document.querySelectorAll(".labs__list__button");
var descriptions = document.querySelectorAll(".labs__description");

function toggleDescriptionVisibility(e){
    console.log(e.target)
    descriptions[e.target.id].classList.toggle("appearance_description");
    let plus = e.target.querySelector("svg").classList;
    if (plus.contains("interactive_plus")) {
        plus.remove("interactive_plus");
        plus.add("interactive_plus_hided");
        return
    }
    plus.remove("interactive_plus_hided");
    plus.add("interactive_plus");
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', toggleDescriptionVisibility);
}