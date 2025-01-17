function getRandomCard(thisCard, chosenCards, cardCondition, cards) {
    let bool = true;
	let randomIndex;

    // Вибираємо випадкову карту, перевіряючи, чи вона ще не була вибрана
    while (bool) {
		randomIndex = Math.floor(Math.random() * cards.length);
		if (!chosenCards.includes(cards[randomIndex])) {
			chosenCards.push(cards[randomIndex]);
			condition = 0/*Math.floor(Math.random() * 2);*/
			if (condition == 0) {
				cardCondition.push("normal");
			} else if (condition == 1) {
				cardCondition.push("inversed");
			}
			bool = false;
		}
    }
	
    // Встановлюємо вибрану карту на сторінку
	main.style.display = "flex";
	const card = document.getElementById(`card${thisCard}`);
	card.style.display = "flex";
	
	// Картинка
    const cardImg = document.getElementById(`img-card${thisCard}`);
    cardImg.src = cards[randomIndex].get_imageURL();
	cardImg.style.display = "flex";
	
	// Назва
	const name = document.getElementById(`name-card${thisCard}`);
	name.innerText = chosenCards[thisCard-1].get_name();
	
	// Опис
	const description = document.getElementById(`description-card${thisCard}`);
	if (cardCondition[thisCard-1] == "normal") {
		switch (thisCard) {
			case 1: description.innerText = chosenCards[thisCard-1].get_description("past", "normal"); break;
			case 2: description.innerText = chosenCards[thisCard-1].get_description("present", "normal"); break;
			case 3: description.innerText = chosenCards[thisCard-1].get_description("future", "normal"); break;
		}
	}
	/*if (cardCondition[thisCard-1] == "inversed") {
		cardImg.style.transform = "scale(-1, -1)";
		switch (thisCard) {
			case 1: description.innerText = chosenCards[thisCard-1].get_description("past", "inversed"); break;
			case 2: description.innerText = chosenCards[thisCard-1].get_description("present", "inversed"); break;
			case 3: description.innerText = chosenCards[thisCard-1].get_description("future", "inversed"); break;
		}
	}*/
	
	if (thisCard+1 > 3) {
		return;
	}
}