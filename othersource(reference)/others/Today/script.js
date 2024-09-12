// Get the current date
const today = new Date();

// Format the date in Korean
const options = { 
    month: 'long', 
    day: 'numeric', 
    weekday: 'long' 
};
const formattedDate = today.toLocaleDateString('ko-KR', options);

// Display the date on the webpage
document.getElementById('current-date').textContent = formattedDate;
