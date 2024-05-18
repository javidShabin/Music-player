let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let playBtn = document.querySelector(".playOrPuse")

song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

playBtn.addEventListener("click", () => {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause()
        ctrlIcon.classList.replace("fa-pause", "fa-play")
    }else {
        song.play()
        ctrlIcon.classList.replace("fa-play", "fa-pause")
    }
})

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    },500)
}
progress.onchange = () => {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.replace("fa-play", "fa-pause")
}