const video = document.getElementById('vio');
video.oncanplaythrough = function() {
    video.muted = true;
    video.play();
}