let addButton = document.querySelector('#addButton');
let rowList = document.querySelector('.rowList');

addButton.addEventListener('click', addRow);

function addRow() {

    let toDoRow = document.createElement('div')
    toDoRow.classList.add('toDoRow');
    rowList.appendChild(toDoRow);

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    toDoRow.appendChild(checkbox);

    let inputText = document.createElement('textarea');
    inputText.classList.add('inputText');
    inputText.rows = '1';
    inputText.cols = '33';
    inputText.textContent = '...';
    toDoRow.appendChild(inputText);

    inputText.addEventListener('focus', textareaInput);

    function textareaInput() {
        inputText.value = '';
        inputText.removeEventListener('focus', textareaInput)
    }

    let cross = document.createElement('div');
    cross.classList.add('cross');
    toDoRow.appendChild(cross);

    let imgCross = document.createElement('img');
    imgCross.classList.add('imgCross');
    imgCross.src = "images/cross.png";
    cross.appendChild(imgCross);


    cross.addEventListener('click', function() {
        toDoRow.remove()
    })

}