// Створення карт

let card1 = new Card("ГЛЮК СИМУЛЯЦІЇ", "images/card_1.png");
card1.set_description("past", "normal", "Колесо долі з викарбуваними рядками коду, що виходять від центру, несе воно невдачі за собою, нові умови потребують мужності і волі");
card1.set_description("present", "normal", "Колесо долі з викарбуваними рядками коду, що виходять від центру, це колесо фортуни, що заперечує усі випадковості до цього і може змінити хід життя.");
card1.set_description("future", "normal", "Колесо долі з викарбуваними рядками коду, що виходять від центру, це колесо фортуни, що віддячило так щедро, достатком, щастям й везінням неземним");

let card2 = new Card("НЕОНОВИЙ ВІДБЛИСК", "images/card_2.png");
card2.set_description("past", "normal", "Навіть у темні похмурі часи був він – відблиск від неоново-жовтої зірки, та був він такий недосяжний серед тенет виснажливого вчення");
card2.set_description("present", "normal", "Величезна сяюча неоново-жовтим кольром зірка. Вона несе за собою силу ї міру недооцінених скарбів, великий розум сходить на небосхил всесвіту алгоритмів");
card2.set_description("future", "normal", "Величезна сяюча неоново-жовтим кольром зірка на вершині піраміди всесвіту, та це не завершення, багато здобутків попереду чекає");

let card3 = new Card("АЛГОРИТММАГ", "images/card_3.png");
card3.set_description("past", "normal", "Юна душа з впевненою усмішкою та сяючими від цікавості очима, та втомлена вона від марного вчення, зневірилась у власних силах");
card3.set_description("present", "normal", "Юна душа з впевненою усмішкою та сяючими від цікавості очима. Володіє він силою алгоритмів, ця сила несе великі сподівання. ");
card3.set_description("future", "normal", "Юна душа з впевненою усмішкою та сяючими від цікавості очима, її шлях легкий, її хода вільна, її доля велика");

let card4 = new Card("ТЕХНОМАНТ", "images/card_4.png");
card4.set_description("past", "normal", "Його руки підняті догори, над ними витають символи 0 та 1. Та поки в світі не знайшлося ні душі, хто б це побачити був здатний");
card4.set_description("present", "normal", "Він випромінює підготовленість та вперту волю, та пауза у трудній боротьбі дає пригнічення підступне");
card4.set_description("future", "normal", "Його руки підняті догори, над ними витають символи 0 та 1. Його сила беззаперечна, перед ним лежать усі ключі цього світу");

let card5 = new Card("КІБЕРНЕТИЧНИЙ МОТОЦИКЛ", "images/card_5.png");
card5.set_description("past", "normal", "Техно-бунтівник, прямуючий на гіперзвуковій модерністській колісниці вглиб кіберпростору, дістатися не може нікуди, в неволі простору");
card5.set_description("present", "normal", "Нарешті бачить техно-бунтівник вглиб кіберпростору сяйливу зірку, пора вже мчать туди на гіперзвуковій модерністській колісниці");
card5.set_description("future", "normal", "Техно-бунтівник, прямуючий на гіперзвуковій модерністській колісниці вглиб кіберпростору, за його плечами велич, успіх, тріумф розуму");

let card6 = new Card("КВАНТОВИЙ ІМПЕРАТОР", "images/card_6.png");
card6.set_description("past", "normal", "Владний, величний повелитель світу мережі, його сили не вичерпні, але не мають застосування і марно пропадають.");
card6.set_description("present", "normal", "Владний, величний повелитель світу мережі вперше повністю розгублений, його розум метається між теперішнім та майбутнім.");
card6.set_description("future", "normal", "Владний, величний повелитель світу мережі. Він сидить на суперзручному геймерському кріслі, і наділений вищими атребутами – мишка та клавіатура.");

let card7 = new Card("КІБЕРВІРУС", "images/card_7.png");
card7.set_description("past", "normal", "Душа кіборга переживає муки, придушені бажання й плани, складні емоції, тяжкий хвилястий шлях");
card7.set_description("present", "normal", "Душа кіборга знаходиться у певних муках перед великим вибором, вона інертна та заціпеніла");
card7.set_description("future", "normal", "Душа кіборга нарешті зцілюється, життя увінчується у трансформації та стрімкому зціленні");

let card8 = new Card("КІБЕРМОНАХ", "images/card_8.png");
card8.set_description("past", "normal", "Відлюдник без плащу, шукає рівноваги у житті, між штучним й реальним, між мріями та можливостями");
card8.set_description("present", "normal", "Відлюдник, замотаний у сріблястий плащ, зітканий з цифрової сітки, шукач просвітлення в дзен-коді, відновлювач рівноваги між штучним та реальним");
card8.set_description("future", "normal", "Відлюдник, замотаний у сріблястий плащ, зітканий з цифрової сітки, наставник та учитель, просвітлений відновлювач рівноваги між штучним та реальним");

const cards = [card1, card2, card3, card4, card5, card6, card7, card8]; // Створення списку доступних карт