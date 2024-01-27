// Declare variables to store timer interval, seconds, minutes, and hours
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Select necessary DOM elements
const display = document.querySelector('.display');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

// Function to start the timer
function startTimer() {
    // Set an interval to update the display every second
    timer = setInterval(updateDisplay, 1000);
}

// Function to stop the timer
function stopTimer() {
    // Clear the interval to stop updating the display
    clearInterval(timer);
}

// Function to reset the timer
function resetTimer() {
    // Stop the timer (if running)
    clearInterval(timer);
    // Reset the timer values to 0
    seconds = 0;
    minutes = 0;
    hours = 0;
    // Update the display to show 00:00:00
    display.textContent = '00:00:00';
}

// Function to update the display with the current time
function updateDisplay() {
    // Increment seconds
    seconds++;
    // Check if seconds reach 60, reset and increment minutes
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        // Check if minutes reach 60, reset and increment hours
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    // Format the time as HH:MM:SS
    const displayTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    // Update the display with the formatted time
    display.textContent = displayTime;
}

// Event listeners for buttons
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
