function startTimer() {
    const timeInput = document.getElementById('timeInput').value;
    const liquid = document.querySelector('.liquid');
    const totalHeight = 100; // in percentage
    let time = parseInt(timeInput, 10);

    if (isNaN(time) || time <= 0) {
        alert('Please enter a valid number of seconds.');
        return;
    }

    let heightPerSecond = totalHeight / time;

    const interval = setInterval(() => {
        time--;
        let newHeight = (heightPerSecond * time);
        liquid.style.height = `${newHeight}%`;

        if (time <= 0) {
            clearInterval(interval);
            alert('Time\'s up!');
            liquid.style.height = '100%'; // Reset liquid height to full
            liquid.style.background = 'rgba(255, 255, 255, 0)'; // Make liquid transparent
        }
    }, 1000);
}
