var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
mySong.volume = 0.2;
icon.onclick = function () {
    if (mySong.paused) {
        mySong.play();
        icon.src = "images/pause.png";
    } else {
        mySong.pause();
        icon.src = "images/play.png";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    mySong.play();
});