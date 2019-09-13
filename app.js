var numOfGuestNames = 7;
var originalGuestList = [];
var murderedGuest = "";
var murderer = "";
var guestList = [];

var startButton = document.querySelector("#startButton");
var resetButton = document.querySelector("#resetButton");
var enterGuestNames = document.querySelector("#enterGuestNames");
var guestNameBtn = document.querySelector("#guestNameBtn");
var addGuest = document.querySelector("#addGuest");
var printList = document.querySelector("#printList");
var cont1Btn = document.querySelector("#continue1");
var murderDiv = document.querySelector("#murderDiv");
var declarationOfMurder = document.querySelector("#declarationOfMurder");
var guestCounter = document.querySelector("#guestCounter");
var guestH1 = document.querySelector("#guestH1")
var testBtn = document.querySelector("#test")



//when start button clicked, replace with reset button
startButton.addEventListener("click", function(){
	this.classList.add("hide");
	resetButton.classList.remove("hide");
	toggleHide(enterGuestNames);

});

resetButton.addEventListener("click", function(){
	window.location.reload();
})

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


//adds functionality to first continue button
cont1Btn.addEventListener("click", function(){
    toggleHide(cont1Btn);
    toggleHide(enterGuestNames);
    toggleHide(murderDiv);
    chooseMurder();
    declarationOfMurder.textContent = "You stand in front of the estate of the late " + murderedGuest + ". Where would you like to go?";
});

// testBtn.addEventListener("click", function(e){
// 	e.preventDefault();
// 	console.log(document.querySelector("#roomChoice").value);
// })

// document.querySelector("#roomChoice").onsubmit = function(){
	
// }



//chooses someone to be murdered and a murderer
function chooseMurder () {
    murderedGuest = originalGuestList[Math.floor(Math.random() * 8)];
    guestList = originalGuestList.filter(f => f !== murderedGuest);
    murderer = guestList[Math.floor(Math.random() * 7)];
}


//toggles the hide class
function toggleHide(el){
	el.classList.toggle("hide");
}


// adds guest to guestlist
function addAGuest (){
	if (originalGuestList.length < 6) {
		originalGuestList.push(addGuest.value);
		printList.textContent = "You have added: " + originalGuestList;
        addGuest.value = "";
        numOfGuestNames -= 1;
		guestCounter.textContent = numOfGuestNames;
	} else if (originalGuestList.length = 6){
		if (addGuest.value != ""){
			originalGuestList.push(addGuest.value);
			printList.textContent = "The final guest list is: " + originalGuestList;
			addGuest.value="";
			addGuest.disabled=true;
			guestNameBtn.disabled=true;
			toggleHide(guestH1);
			toggleHide(addGuest);
			toggleHide(guestNameBtn);
			cont1Btn.classList.remove("hide");	
		}
	} 
}

