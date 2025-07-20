let currentCardIndex = 1;
const totalCards = 13;
const cardImage = document.getElementById('card-image');
const declineBtn = document.getElementById('decline-btn');
const pingBtn = document.getElementById('ping-btn');
const noMoreOpportunities = document.getElementById('no-more-opportunities');

function updateCard() {
    if (currentCardIndex > totalCards) {
        cardImage.style.display = 'none';
        declineBtn.style.display = 'none';
        pingBtn.style.display = 'none';
        noMoreOpportunities.style.display = 'block';
    } else {
        cardImage.src = `images/card${currentCardIndex}.png`;
    }
}

declineBtn.addEventListener('click', () => {
    currentCardIndex++;
    updateCard();
});

pingBtn.addEventListener('click', () => {
    currentCardIndex++;
    updateCard();
});
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the 'visible' class when the element comes into view
function handleScroll() {
    const aboutSection = document.getElementById("about");
    if (isInViewport(aboutSection)) {
        aboutSection.classList.add("visible");
    }
}

// Listen for scroll events
window.addEventListener("scroll", handleScroll);

// Initial check if the section is in the viewport when the page loads
handleScroll();

document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      // Create a new list item for the task
      const newTaskItem = document.createElement('li');
      newTaskItem.textContent = taskText;
  
      // Insert the new task at the top of the list
      const todoList = document.getElementById('todo-list');
      todoList.insertBefore(newTaskItem, todoList.firstChild);
  
      // Clear the input field after adding the task
      taskInput.value = "";
    }
  });
  // Get elements
const card = document.getElementById('card1');
const declineBtn = document.getElementById('decline-btn');
const pingBtn = document.getElementById('ping-btn');

// List of cards
let cardIndex = 1;
const cardImages = ["images/card1.png", "images/card2.png"];

// Function to handle the card swipe
function moveCard(direction) {
  card.style.animation = direction === 'left' ? 'swipeLeft 0.5s forwards' : 'swipeRight 0.5s forwards';
  
  setTimeout(() => {
    // After the animation, change the image to the next card
    card.src = cardImages[cardIndex % cardImages.length];
    card.style.animation = '';
    card.style.transform = 'translateX(0)'; // Reset the card position
    
    // Increment card index to show the next card
    cardIndex++;
  }, 500); // Wait for the animation to complete before switching the card
}

// Decline button click - swipe left
declineBtn.addEventListener('click', () => {
  moveCard('left');
});

// Ping button click - swipe right
pingBtn.addEventListener('click', () => {
  moveCard('right');
});
