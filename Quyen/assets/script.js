const playButton = document.getElementById('playButton');
const videoContainer = document.querySelector('.video-container');
const myVideo = document.getElementById('myVideo');

playButton.addEventListener('click', () => {
    videoContainer.style.display = 'block'; // Show the video container
    myVideo.currentTime = 0; // Start the video from the beginning
    myVideo.play(); // Play the video
});