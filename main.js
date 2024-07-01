// main.js

// Function to update current time in UTC
function updateTime() {
    const now = new Date();
    const timeUTC = now.toUTCString().split(' ')[4];
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = `⏰ Current Time (UTC): ${timeUTC}`;
}

// Function to update current day of the week
function updateDay() {
    const now = new Date();
    const day = now.toLocaleString('en-US', { weekday: 'long' });
    document.querySelector('[data-testid="currentDay"]').textContent = `📅  Current Day: ${day}`;
}

// Call the functions to update time and day
updateTime();
updateDay();

// Update time every second
setInterval(updateTime, 1000);