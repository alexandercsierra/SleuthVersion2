var numOfGuestNames = 0;
var originalGuestList = [];

var startButton = document.querySelector("#startButton");
var resetButton = document.querySelector("#resetButton");
var enterGuestNames = document.querySelector("#enterGuestNames");
var guestNameBtn = document.querySelector("#guestNameBtn");
var addGuest = document.querySelector("#addGuest");
var printList = document.querySelector("#printList");
var cont1Btn = document.querySelector("#continue1");

//when start button clicked, replace with reset button
startButton.addEventListener("click", function(){
	this.classList.add("hide");
	resetButton.classList.remove("hide");
	toggleHide(enterGuestNames);

});

//adds input to guests array on click of button
guestNameBtn.addEventListener("click", function(){
	addAGuest();
});

//adds input to guests array on enter
addGuest.addEventListener('keypress', function(e){
	if (e.key === 'Enter') {
		addAGuest();
	}
});

//toggles the hide class
function toggleHide(el){
	el.classList.toggle("hide");
}


//adds guest to guestlist
function addAGuest (){
	if (originalGuestList.length < 7) {
		originalGuestList.push(addGuest.value);
		printList.textContent = "You have added: " + originalGuestList;
	} else if (originalGuestList.length = 7){
		printList.textContent = "The final guest list is: " + originalGuestList;
		cont1Btn.classList.remove("hide");
	}
	
}


