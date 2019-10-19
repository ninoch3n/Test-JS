//Create DIV and append it to a class/document.body etc.
function createDiv(divClassName, appendto) {
	var div = document.createElement("div");
	div.className = divClassName;
	appendto.appendChild(div);
}

//Add Paragraph to an element with a classname
function addParagraph(className, classArray, innerText) {
	var paragraph = document.createElement("p");
	paragraph.innerText = innerText;
	var addTo = document.getElementsByClassName(className)[classArray];
	addTo.appendChild(paragraph);
}

var divCount = 10;
var divStatus = [];
for (let i = 0; i < divCount; i++) {
	createDiv("box", document.body);
	addParagraph("box", i, `Number ${i + 1}.`);
	divStatus[i] = -1;
}

var divs = document.getElementsByClassName("box");

for (let i = 0; i < divs.length; i++) {
	divs[i].addEventListener("click", function() {
		divStatus[i] = divStatus[i] * -1;
		if (divStatus[i] == 1) {
			this.style.backgroundColor = "grey";
			this.style.color = "white";
		} else {
			this.style.backgroundColor = "white";
			this.style.color = "black";
		}
	});
}

var counter = 0;

var submitbutton = document.getElementById("submitbutton");
submitbutton.addEventListener("click", function() {
	var paragraph = document.createElement("p");
	var outputString = "";
	for(let i = 0; i < divCount; i++){
		if(divStatus[i] == 1){
			outputString += `${i+1}, `;
		}
	}
	outputString+= " have been checked";
	paragraph.innerText = outputString;
	paragraph.className = "resultpara"
	document.body.appendChild(paragraph);
});
