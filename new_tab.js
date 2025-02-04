window.onload = function() {

  if (!localStorage.getItem('titles')) {
    localStorage.setItem('titles', JSON.stringify([{id: 1, name: 'Col1'}, {id: 2, name: 'col2'}, {id: 3, name: 'col3'}]));
  }
  if (!localStorage.getItem('one')) {
    localStorage.setItem('one', JSON.stringify([{id: 1, name: 'link', link: 'https://web.dev'}, {id: 2, name: 'link', link: 'https://web.dev'}, {id: 3, name: 'link', link: 'https://web.dev'}]));
  }
  if (!localStorage.getItem('two')) {
    localStorage.setItem('two', JSON.stringify([{id: 1, name: 'link', link: 'https://web.dev'}, {id: 2, name: 'link', link: 'https://web.dev'}, {id: 3, name: 'link', link: 'https://web.dev'}]));
  }
  if (!localStorage.getItem('three')) {
    localStorage.setItem('three', JSON.stringify([{id: 1, name: 'link', link: 'https://web.dev'}, {id: 2, name: 'link', link: 'https://web.dev'}, {id: 3, name: 'github', link: 'https://github.com/thenamesjagger'}]));
  }
  if (!localStorage.getItem('username')) {
    localStorage.setItem('username', JSON.stringify([{id: 1, name: 'name'}]));
  }

  // Retrieve data from local storage
  const titles = JSON.parse(localStorage.getItem('titles'));
  const titlesArray = Object.values(titles);

  const one = JSON.parse(localStorage.getItem('one'));
  const colOne = Object.values(one);

  const two = JSON.parse(localStorage.getItem('two'));
  const colTwo = Object.values(two);

  const three = JSON.parse(localStorage.getItem('three'));
  const colThree = Object.values(three);

  for (let i = 0; i < titlesArray.length; i++) {
    const title = titlesArray[i];
    const div = document.createElement('div');
    div.className = title.name;

    const h1 = document.createElement('h1');
    h1.textContent = title.name;
    div.appendChild(h1);

    // Append the div to the appropriate element in the DOM
    document.querySelector('.list').appendChild(div);
  }

  for (let i = 0; i < colOne.length; i++) {
    const row = colOne[i];
    const name = row.name;
    const link = row.link;

    const a = document.createElement('a');
    a.textContent = name;
    a.href = link;
    a.id = name;

    document.querySelector('.list > div:first-child').appendChild(a);
  }

  for (let i = 0; i < colTwo.length; i++) {
    const row = colTwo[i];
    const name = row.name;
    const link = row.link;

    const a = document.createElement('a');
    a.textContent = name;
    a.href = link;
    a.id = name;

    document.querySelector('.list > div:nth-child(2)').appendChild(a);
  }

  for (let i = 0; i < colThree.length; i++) {
    const row = colThree[i];
    const name = row.name;
    const link = row.link;

    const a = document.createElement('a');
    a.textContent = name;
    a.href = link;
    a.id = name;

    document.querySelector('.list > div:nth-child(3)').appendChild(a);
  }

}

const storedUsername = JSON.parse(localStorage.getItem('username'));
const username = storedUsername[0].name;

function determineGreet(hours) {
  return document.getElementById("greeting").innerText = `Good ${hours < 12 ? "Morning," : hours < 18 ? "Afternoon," : "Evening,"} ${username}.`;
}
// web api to load time based on browser time, reference https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
window.addEventListener('load', (event) => {
    let today = new Date();
    let time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    determineGreet(new Date().getHours());
    displayTime(time);
});

// sets time above the greeting message
setInterval(function () {
    var today = new Date();
    var time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("time").innerHTML = time;
}, 1000);

// function to display time
function displayTime(time) {
    document.getElementById("time").innerHTML = time;
}