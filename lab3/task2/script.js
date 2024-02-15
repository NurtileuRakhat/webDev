function addItem() {
    let newItemText = document.querySelector('.input__item').value;
    if (newItemText.trim() == '') {
        alert('Please enter a task!');
        return;
    }

    let list = document.getElementById('todo__list');
    let listItem = document.createElement('li');
    listItem.innerHTML = `
        <input id="item__${newItemText}" type="checkbox" class="checkbox" onchange="toggleDone(this)">
        <label for="item__${newItemText}">${newItemText}</label>
        <button class="delete-btn" onclick="deleteItem(this)"><i class="fas fa-trash"></i></button>
    `;
    list.appendChild(listItem);

    document.querySelector('.input__item').value = '';
}

function toggleDone(checkbox) {
    checkbox.parentElement.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
}

function deleteItem(button) {
    button.parentElement.remove();
}

