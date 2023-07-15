// Select the elements with class 'loveMe' and id 'times'
const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

// Initialize variables to track click time and number of clicks
let clickTime = 0;
let timesClicked = 0;

// Add a click event listener to the 'loveMe' element
loveMe.addEventListener('click', (e) => {
    // Check if it's the first click
    if (clickTime === 0) {
        clickTime = new Date().getTime(); // Set the click time
    } else {
        // Check if the time between clicks is less than 800 milliseconds
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e); // Create a heart element
            clickTime = 0; // Reset click time
        } else {
            clickTime = new Date().getTime(); // Set the click time
        }
    }
});

// Function to create a heart element
const createHeart = (e) => {
    const heart = document.createElement('i'); // Create a new <i> element
    heart.classList.add('fa-solid'); // Add the 'fa-solid' class
    heart.classList.add('fa-heart'); // Add the 'fa-heart' class

    // Get the mouse position relative to the element
    const x = e.clientX;
    const y = e.clientY;

    // Get the offset of the element from the top-left corner of the page
    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    // Calculate the position of the mouse inside the element
    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    // Set the top and left positions of the heart element
    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart); // Append the heart element to the 'loveMe' element

    times.innerHTML = ++timesClicked; // Increment and display the number of clicks

    setTimeout(() => heart.remove(), 1500); // Remove the heart element after 1.5 seconds
};
