function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => showData(data))
}

function showData(data) {
    const Ul = document.getElementById('Parent');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `name: ${user.name}, \u00A0 email:${user.email}`;
        // style part
        li.style.color = 'black';
        li.style.width = '660px'
        li.style.border = '2px solid LightSeaGreen';
        li.style.borderWidth = '10px';
        li.style.padding = '5px';
        li.style.fontSize = '1.5em';

        Ul.appendChild(li);

    }
}