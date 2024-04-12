const fortune_p = document.getElementById('fortune');

function shake() {
	fortune_p.className = "hidden";

    var ball = document.getElementById("ball")

    ball.classList.add("shake");

    setTimeout(function () { ball.classList.remove("shake"); }, 1500);

    setTimeout(function () { getFortune(); }, 1500);
}

function getFortune() {
	fortune_p.className = "";
	
    var fortunes = ['Це впевнено', 'Це рішуче так', 'Без сумніву', 'Так - безумовно', 'Ви можете на цьому покластися', 'Наскільки я бачу, так', 'Ймовірно', 'Перспективи хороші', 'Так, Знаки вказують на таке', 'Відповідь туманна', 'спробуйте ще раз', 'Спитайте пізніше', 'Краще зараз не казати', 'Не можу передбачити зараз', 'Сконцентруйтеся і спитайте ще раз', 'Не розраховуйте на це', 'Моя відповідь - ні', 'Мої джерела кажуть - ні', 'Перспективи не дуже хороші', 'Дуже сумнівно']

    var fortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    fortune_p.innerHTML = fortune;
}