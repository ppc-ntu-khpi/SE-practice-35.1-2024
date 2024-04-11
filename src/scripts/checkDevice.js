let device;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles/style_phone.css';
    document.head.appendChild(link);
	device = "phone";
} else {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles/style_pc.css';
    document.head.appendChild(link);
	const menu_toggle = document.getElementById('menu-toggle');
	menu_toggle.remove();
	device = "desktop";
}