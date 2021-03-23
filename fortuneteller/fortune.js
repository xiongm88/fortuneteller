// Prompt to ask a question
let fortune = prompt('Get your fortune! What would you like to know?');

// Results
const result = ["Signs point to yes!", "Very likely", "Maybe", "Outcome not so good", "Please ask again later"]

// Randomizer
const random = Math.floor(Math.random() * result.length);

// Results posted
if (result != null) {
	alert(result[random]);
} else {
	alert("What would you like to know?!");
}

// "The client server model" client makes request, server responds to request. 
// Front-end: 
// HTML: holds structure and contents, CSS: how to style and arrange webpage, JavaScript: how webpage should behave and its interactions 
// Back-end:
// Retrieving data from database, works on functionality. Uses programming languages that serve requests(JavaScript, Java, Python, PHP, etc)
// Both Front-end and Back-end will need knowledge of HTML, CSS, JavaScript and how they present webpages.