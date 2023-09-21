// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

let toDoList = document.querySelector('.todo-list');
let addItemButton = document.querySelector('#addItemButton');
let toDoInput = document.querySelector('#toDoInput'); // Store a reference to the input field

toDoList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    let itemToDelete = event.target.parentElement;
    if (itemToDelete) {
      itemToDelete.remove();
    }
  }
});

addItemButton.addEventListener('click', () => {
  let toDoText = toDoInput.value; // Get the value from the input field
  if (toDoText.trim() !== '') { // Check if the input is not empty or only whitespace
    toDoList.innerHTML += `<li>${toDoText} <button class="delete-button">Done</button></li>`;
    toDoInput.value = ''; // Clear the input field
  }
});

