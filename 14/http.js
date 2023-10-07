const renderList = (users) => {
  users.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.username;
    document.querySelector('ul').append(li);
  })
}


let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');


xhr.send();


xhr.onload = function() {
//   console.log(xhr.response);
  const users = JSON.parse(xhr.response);
  console.log(users);
  renderList(users);
};