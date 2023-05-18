let items = [];

const itemInput = document.getElementById('item');
const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');

addButton.addEventListener('click', () => {

const itemText = itemInput.value.trim();
itemInput.value = '';

const itemWords = itemText.split(' ');
itemWords.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    items.push(word);
    document.getElementById('list').appendChild(li);
});

updateBackgroundColors();
});

removeButton.addEventListener('click', () => {
const itemText = itemInput.value.trim().toLowerCase();
itemInput.value = '';
const index = items.findIndex(item => item.toLowerCase() === itemText);

if (index !== -1) {
    items.splice(index, 1);
    const liToRemove = document.querySelector(`#list li:nth-child(${index + 1})`);
    liToRemove.parentNode.removeChild(liToRemove);
    updateBackgroundColors();
}
});

function updateBackgroundColors() {
const lis = document.querySelectorAll('#list li');
lis.forEach((li, index) => {
    if (index % 2 === 0) {
    li.style.backgroundColor = 'white';
    } else {
    li.style.backgroundColor = 'yellow';
    }
});
}