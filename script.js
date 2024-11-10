const formOpen = document.getElementById('open');
const mother = document.getElementById('mother');
const mother1 = document.getElementById('mother1');
const mother2 = document.getElementById('mother2');
const mother3 = document.getElementById('mother3');

let listOthings = [];

formOpen.addEventListener('submit', (event) => {
    event.preventDefault();

    const value = document.getElementById("value").value;

    listOthings.push(value);

    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('class', 'listContainer');
    cardDiv.setAttribute('draggable', 'true');

    const cardClass = document.createElement('div');
    cardClass.setAttribute('class', 'class');
    cardClass.style.backgroundColor = 'yellow';

    const cardText = document.createElement('h3');
    cardText.setAttribute('class', 'text');
    cardText.innerHTML = value;

    const cardDivChanges = document.createElement('div');
    cardDivChanges.setAttribute('class', 'changes');

    const cardEditor = document.createElement('button');
    cardEditor.setAttribute('class', 'editor');
    cardEditor.innerHTML = 'Editar';

    const cardDeleter = document.createElement('h3');
    cardDeleter.setAttribute('class', 'deleter');
    cardDeleter.innerHTML = 'X';
    cardDeleter.style.color = 'crimson';

    const left = document.createElement('p');
    left.innerHTML = '🡸';
    left.style.cursor = 'pointer';
    const right = document.createElement('p');
    right.innerHTML = '🡺';
    right.style.marginLeft = '5px';
    right.style.marginRight = '5px';
    right.style.cursor = 'pointer';

    cardDiv.appendChild(cardClass);
    cardDiv.appendChild(cardText);
    cardDivChanges.appendChild(cardEditor);
    cardDivChanges.appendChild(cardDeleter);
    cardDivChanges.appendChild(left);
    cardDivChanges.appendChild(right);
    cardDiv.appendChild(cardDivChanges);

    mother.appendChild(cardDiv);

    let classVal = 1;

    function moveCardToSection(targetSection) {
        if (targetSection && targetSection !== cardDiv.parentNode) {
            cardDiv.parentNode.removeChild(cardDiv);
            targetSection.appendChild(cardDiv);
        }
    }

    left.addEventListener('click', (event) => {
        event.preventDefault();

        if (classVal > 1) classVal--;

        switch (classVal) {
            case 1:
                cardClass.style.backgroundColor = 'yellow';
                moveCardToSection(mother);
                break;
            case 2:
                cardClass.style.backgroundColor = 'orange';
                moveCardToSection(mother1);
                break;
            case 3:
                cardClass.style.backgroundColor = 'blue';
                moveCardToSection(mother2);
                break;
            case 4:
                cardClass.style.backgroundColor = 'green';
                moveCardToSection(mother3);
                break;
        }
    });

    right.addEventListener('click', (event) => {
        event.preventDefault();

        if (classVal < 4) classVal++;

        switch (classVal) {
            case 1:
                cardClass.style.backgroundColor = 'yellow';
                moveCardToSection(mother);
                break;
            case 2:
                cardClass.style.backgroundColor = 'orange';
                moveCardToSection(mother1);
                break;
            case 3:
                cardClass.style.backgroundColor = 'blue';
                moveCardToSection(mother2);
                break;
            case 4:
                cardClass.style.backgroundColor = 'green';
                moveCardToSection(mother3);
                break;
        }
    });

    cardDeleter.addEventListener('click', () => {
        const valueToDelete = cardText.innerHTML;
        const index = listOthings.indexOf(valueToDelete);
        if (index > -1) {
            listOthings.splice(index, 1);
            cardDiv.parentNode.removeChild(cardDiv);
        }
    });

    cardEditor.addEventListener('click', () => {
        const newValue = prompt('Qual será sua modificação?', value);
        if (newValue && newValue.trim() !== '') {
            const index = listOthings.indexOf(value);
            if (index > -1) {
                listOthings[index] = newValue;
            }
            cardText.innerHTML = newValue;
        } else {
            alert('Você não inseriu uma modificação válida!');
        }
    });
});
