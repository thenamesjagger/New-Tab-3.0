window.onload = function() {

    const container = document.querySelector('#container');

    // Retrieve current data from local storage
    const data = JSON.parse(localStorage.getItem('username'));

    // Create HTML elements for each item in the array
    data.forEach((item) => {
    const div = document.createElement('div');

    // Create a form for each item
    const form = document.createElement('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = event.target[0].value;

        // Update the item's name
        item.name = name;

        // Update local storage
        localStorage.setItem('username', JSON.stringify(data));
    });
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'name';
    input.value = item.name;
    form.appendChild(input);
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Submit';
    form.appendChild(button);
    div.appendChild(form);

    container.appendChild(div);
    });
}