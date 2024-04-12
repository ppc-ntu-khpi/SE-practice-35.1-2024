const down = document.getElementById('down');
const down_button = document.getElementById('down-button');
down.style.backgroundСolor = "rgba(100, 100, 100, 0.3)";
if (device == "desktop") {
	down_button.innerHTML = "<p>Отримати картку</p>";
	down_button.onclick = function() {
		getRandomCard(thisCard, chosenCards, cardCondition, cards);
		thisCard++;
		checkCards(thisCard);
	}
} else if (device == "phone") {
	down_button.innerHTML = "<p>Розпочати</p>";
	down_button.onclick = function() {
		checkIOS();
		down_button.onclick = function() {
			return;
		}
		down_button.innerHTML = "<p>Потрясіть телефон тричі</p>";
	}
}