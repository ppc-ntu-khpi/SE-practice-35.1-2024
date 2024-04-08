if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles/style_phone.css';
    document.head.appendChild(link);
} else {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles/style_pc.css';
    document.head.appendChild(link);
}