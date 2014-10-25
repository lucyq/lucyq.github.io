//
//	A N S W E R S
//
var answers = [{"id": 0, "Event": "Big Bang", "Month": 1, "Day":1, "bya": 13.8},
			   {"id": 1, "Event": "Milky Way Galaxy forms", "Month": 3, "Day":15, "bya": 11},
			   {"id": 2, "Event": "The Sun is formed", "Month": 8, "Day":31, "bya": 4.57},
			   {"id": 3, "Event": "Oldest rocks known on Earth form", "Month": 9, "Day":16, "bya": 4.0},
			    // Evolution of Life on Earth
			   {"id": 4, "Event": "First prokaryotes", "Month": 9, "Day":21, "bya": 3.8},	 
			   {"id": 5, "Event": "Photosynthesis begins", "Month": 10, "Day":12, "bya": 3},
			   {"id": 6, "Event": "Oxygen appears in Earth's atmosphere", "Month": 10, "Day":29, "bya": 2.4},
			   {"id": 7, "Event": "Complex cells (eurkaryotes) form", "Month": 11, "Day":9, "bya": 2},
			   {"id": 8, "Event": "First multicellular life", "Month": 12, "Day":5, "bya": 1.0},
			   {"id": 9, "Event": "Simple animals emerge", "Month": 12, "Day":14, "bya": 0.67},
			   {"id": 10, "Event": "Ancestors of insects emerge", "Month": 12, "Day":14, "bya": 0.55},
			   {"id": 11, "Event": "Fish emerge", "Month": 12, "Day":18, "bya": 0.5},
			   {"id": 12, "Event": "Land plants", "Month": 12, "Day":20, "bya": 0.45},
			   {"id": 13, "Event": "Insects and seeds", "Month": 12, "Day":21, "bya": 0.4},
			   {"id": 14, "Event": "Amphibians", "Month": 12, "Day":22, "bya": 0.36},
			   {"id": 15, "Event": "Mammals", "Month": 12, "Day":26, "bya": 0.2},
			   {"id": 16, "Event": "Birds", "Month": 12, "Day":27, "bya": 0.15},
			   {"id": 17, "Event": "Flowers", "Month": 12, "Day":28, "bya": 0.13},
			   {"id": 18, "Event": "Dinosaurs die out", "Month": 12, "Day":30, "bya": 0.065}]


//
// G L O B A L   V A R I A B L E S 
//
var usedIndex = [0, 0, 0, 0, 0, 
				 0, 0, 0, 0, 0];
var monthGuess = new Array();
var dayGuess = new Array();
var count = 0;



//
//	I N I T I A L I Z I N G   P A G E
//
function init() {


//	loadIntro();
	inputText();
//	calText();
	// ask the user a question
	for (var i = 0; i < answers.length; i++) {
		var index = ask();
	//	if ((setMonth() == true) && (setDay() == true)) {}
		//getResponse(index);
	}
}

/*
	var canvas = document.getElementById("calendar");
	var ctx = canvas.getContext("2d");

	if (!(document.getElementById("calendar"))) {
		// browser is not supported
		console.log("Your browser doesn't support canvas!");
		return;
	}
	*/

	// Browser is supported, go ahead with other functions


	// Ask user a question

	// Get responses from user


	// Draw relevant information
//	drawCal();
//	drawMarkers();



//
//	I N T R O D U C T I O N   &   D I R E C T I O N S

//
//	A S K   Q U E S T I O N S
//

function ask() {

	do {
		var randomIndex = Math.floor(Math.random() * ((answers.length-1) + 1));
	} while (usedIndex[randomIndex] == 1);

	usedIndex[randomIndex]++;


	// add paragraph with question description
	var para = document.createElement('p');
	para.innerHTML = answers[randomIndex]["Event"];

	// append paragraph to the question div
	var questionDiv = document.getElementById("question");
	questionDiv.appendChild(para);

	//	evalResponse(randomIndex);
	getIndex(randomIndex);
	
}
// Clear the question after it's asked
function clearQuestion() {
	var questionDiv = document.getElementById("question");
	questionDiv.removeChild('p');


}

function getIndex(randomIndex) {
	return randomIndex;
}

//
//	D R A W   I M A G E S  
//
//

// Make this a div.
function drawCal() {
	var fullCal = document.getElementById("calendar");
	ctx.drawImage(full_calendar, 0, 0, 0, 0);
}

	// drawImage(img_name, sx, sy, sw, sh, x, y, w, h)
function drawMarkers() {
	var guess = document.getElementById("IMAGE");
	ctx.drawMarkers


}


// 
//	E V E N T S
//
function getResponse() {
	// set month 
	monthGuess[count] = document.getElementById("month").value;
//	if (monthGuess > 0 && monthGuess <= 12) 
// CHECK MONTH LATER

	// set day
	dayGuess[count] = document.getElementById("day").value;
	count++;

	if (monthGuess[count] == answers[index]["Month"]) {
		console.log("CORRECT MONTH!");
	}
	else if (monthGuess[count] == answers[index]["Month"] && day == answers[index]["Day"]) {
		console.log("AWESOMEEEE!");
	}
	else {
		console.log("BOOOOOO");
	}

}

// REMOVE ERROR MESSAGE

/*
function setMonth() {
	var monthGuess = document.getElementById("month").value;
	if (monthGuess > 0 && monthGuess <= 12) {
		monthGuess[count] = document.getElementById("month").value;
	} else {
		var msg = document.createElement('p');
		msg.innerHTML = "Uh oh! Please use the format specified above";
		// append paragraph to the question div
		var responseDiv = document.getElementById("response");
		responseDiv.appendChild(msg);
		
	}
	return true;
}

function setDay() {
	var dayGuess = document.getElementById("day").value;
	if (dayGuess > 0 && dayGuess <= 31) {
		dayGuess[count] = document.getElementById("day").value;
		count++;
	} else {
		var msg = document.createElement('p');
		msg.innerHTML = "Uh oh! Please use the format specified above";
		// append paragraph to the question div
		var responseDiv = document.getElementById("response");
		responseDiv.appendChild(msg);
		
	}
	return true;

}
*/


// Prints out message on how to type in responses
function inputText() {
	var para = document.createElement('p');
	para.innerText = "TEST";
	var responseDiv = document.getElementById("response");
	responseDiv.insertBefore(para, responseDiv.firstChild);
}

//
//	C A N V A S
//
/*
// Generate "correct" or "incorrect", if same month "close"
function calText {
	var para = document.createElement("p");
	para.innerText = "CORRECT!"
	ctx.fillText(para, 20, 20, 30);
}

*/






