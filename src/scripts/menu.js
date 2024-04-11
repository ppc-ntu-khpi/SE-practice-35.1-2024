function toggleMenu() {
	let menu = document.getElementById("menu");
	if (menu.style.display === "flex") {
		menu.style.display = "none";
		menu.style.position = "fixed";
	} else {
		menu.style.display = "flex";
		menu.style.position = "fixed";
	}
}