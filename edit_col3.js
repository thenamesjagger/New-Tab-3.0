window.onload = function() {
  const container = document.querySelector('#container');
  let two = JSON.parse(localStorage.getItem('three')) || [];

  const renderForm = (item, i) => {
    const form = document.createElement('form');
    form.innerHTML = `
      <input type="text" name="name" value="${item.name || ''}" placeholder="Name" />
      <input type="text" name="link" value="${item.link || ''}" placeholder="Link" />
      <button type="submit">Submit</button>
      <button type="button" class="delete">Delete</button>
    `;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (i === -1) {
        two.push({ name: event.target.name.value, link: event.target.link.value });
      } else {
        two[i].name = event.target.name.value;
        two[i].link = event.target.link.value;
      }
      localStorage.setItem('three', JSON.stringify(two));
      window.location.reload();
    });

    form.querySelector('.delete').addEventListener('click', () => {
      if (i !== -1) {
        two.splice(i, 1);
        localStorage.setItem('three', JSON.stringify(two));
        window.location.reload();
      } else {
        form.remove();
      }
    });

    container.appendChild(form);
  };

  two.forEach((item, i) => renderForm(item, i));

  const addButton = document.createElement('button');
  addButton.textContent = 'Add';
  addButton.addEventListener('click', () => renderForm({}, -1));
  container.appendChild(addButton);
};