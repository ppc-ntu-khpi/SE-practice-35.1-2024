const main = document.getElementById('main');
const details = document.getElementById('details');

main.style.display = "none";
details.className = "hidden";

const div_card1 = document.getElementById('card1');
const div_card2 = document.getElementById('card2');
const div_card3 = document.getElementById('card3');

div_card1.style.display = "none";
div_card2.style.display = "none";
div_card3.style.display = "none";

const img_card1 = document.getElementById('img-card1');
const img_card2 = document.getElementById('img-card2');
const img_card3 = document.getElementById('img-card3');

img_card1.style.display = "none";
img_card2.style.display = "none";
img_card3.style.display = "none";

const description_card1 = document.getElementById('description-card1');
const description_card2 = document.getElementById('description-card2');
const description_card3 = document.getElementById('description-card3');

if(device == "desktop") {
	description_card1.style.display = "none";
	description_card1.style.width = "9vw";
	description_card1.style.height = "auto";
	description_card1.style.borderRadius = "5px";
	description_card1.style.background = "rgba(0, 0, 0, 0.5)";

	description_card2.style.display = "none";
	description_card2.style.width = "9vw";
	description_card2.style.height = "auto";
	description_card2.style.borderRadius = "5px";
	description_card2.style.background = "rgba(0, 0, 0, 0.5)";

	description_card3.style.display = "none";
	description_card3.style.width = "9vw";
	description_card3.style.height = "auto";
	description_card3.style.borderRadius = "5px";
	description_card3.style.background = "rgba(0, 0, 0, 0.5)";
} else if (device == "phone") {
	description_card1.style.display = "none";
	description_card1.style.width = "28vw";
	description_card1.style.height = "auto";
	description_card1.style.borderRadius = "5px";
	description_card1.style.background = "rgba(0, 0, 0, 0.5)";

	description_card2.style.display = "none";
	description_card2.style.width = "28vw";
	description_card2.style.height = "auto";
	description_card2.style.borderRadius = "5px";
	description_card2.style.background = "rgba(0, 0, 0, 0.5)";

	description_card3.style.display = "none";
	description_card3.style.width = "28vw";
	description_card3.style.height = "auto";
	description_card3.style.borderRadius = "5px";
	description_card3.style.background = "rgba(0, 0, 0, 0.5)";
}
const chosenCards = [];
const cardCondition = [];
let thisCard = 1;