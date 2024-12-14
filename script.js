const countdown = () => {
    const countDate = new Date('Jan 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
};


setInterval(countdown, 1000); 

document.getElementById('newYearButton').addEventListener('click', () => {document.getElementById('message').innerText = 'Happy New Year! '; } )
document.getElementById('newYearButton').addEventListener('click', () => {document.getElementById('message1').innerText = '2025 '; } )


document.getElementById('newYearButton').addEventListener('click', () => {
     const section1 = document.getElementById('section1'); 
     const images = [ 'url("./icon/OIP.jpg")' ]; 
     
     section1.style.backgroundImage = images;
     });

document.getElementById('newYearButton').addEventListener('click', () => {
        confetti();
});
document.getElementById('newYearButton').addEventListener('click', () => {
    const song = document.getElementById('backgroundSong');
    const button = document.getElementById('newYearButton');

    if (song.paused) {
        song.play();
        button.textContent = 'Pause Song';
        setTimeout(() => {
            song.pause();
            button.textContent = 'Play Song';
        }, 10000); // Stop the song after 10 seconds
    } else {
        song.pause();
        button.textContent = 'Play Song';
    }
});