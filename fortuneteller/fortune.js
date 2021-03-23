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

// Henry's Video