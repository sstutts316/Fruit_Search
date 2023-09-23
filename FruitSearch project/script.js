const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Function to populate the list items based on user input
function populateSuggestions(inputVal) {
    inputVal = inputVal.toLowerCase(); // Convert input to lowercase for case-insensitive matching
    let results = [];

    for (let fruitName of fruit) {
        if (fruitName.toLowerCase().includes(inputVal)) {
            results.push(fruitName);
        }
    }

    showSuggestions(results, inputVal);
}


function search(inputVal) {
    inputVal = inputVal.toLowerCase(); // Convert input to lowercase for case-insensitive matching
    let results = [];

    for (let fruitName of fruit) {
        if (fruitName.toLowerCase().includes(inputVal)) {
            results.push(fruitName);
        }
    }

    showSuggestions(results, inputVal); // Automatically show suggestions
}


function showSuggestions(results, inputVal) {
    const ul = document.querySelector('.suggestions ul');
    ul.innerHTML = ''; // Clear previous suggestions

    for (let result of results) {
        const li = document.createElement('li');
        li.textContent = result;
        ul.appendChild(li);
    }

    if (results.length > 0) {
        ul.classList.add('has-suggestions');
    } else {
        ul.classList.remove('has-suggestions');
    }
}

function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        input.value = e.target.textContent;
        suggestions.innerHTML = ''; // Clear the suggestions dropdown
    }
}

input.addEventListener('input', function () {
    const inputVal = input.value;
    search(inputVal);
});

suggestions.addEventListener('click', useSuggestion);
