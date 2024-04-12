function checkCards(thisCard) {
	let bool = false;
	if (thisCard > 3) {
		const toggle_details = document.getElementById('toggle-details');
		down_button.innerHTML = "<p>Тлумачення</p>";
		down_button.onclick = function() {
			if (bool == false) {
				toggle_details.style.display = "flex";
				description_card1.style.display = "flex";
				description_card2.style.display = "flex";
				description_card3.style.display = "flex";
				bool = true;
			} else {
				toggle_details.style.display = "none";
				description_card1.style.display = "none";
				description_card2.style.display = "none";
				description_card3.style.display = "none";
				bool = false;
			}
		}
	}
}