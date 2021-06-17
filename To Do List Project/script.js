let inputField = document.getElementById('inputField');
let addtodoButton = document.getElementById('addtodo');
let todo_container = document.getElementById('todo_container');


addtodoButton.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    todo_container.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function () {
        todo_container.removeChild(paragraph);
    })
})