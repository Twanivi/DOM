const url = 'https://jsonplaceholder.typicode.com/users';
const ul = document.querySelector('.list-group');
const divInfo = document.querySelector('main .card');

const renderUsers = (usersName) => {
    ul.insertAdjacentHTML('beforeend', `
      <li class="list-group-item">${usersName}</li>
    `
)
    ul.firstElementChild.classList.add('active');
}


const renderInfo = (names, userName, userAddress, companies, mail) => {

    const titleAddress = Object.keys(userAddress);
    const streets = titleAddress[0].toUpperCase().slice(0,1) + titleAddress[0].slice(1);
    const suites = titleAddress[1].toUpperCase().slice(0,1) + titleAddress[1].slice(1);
    const cities = titleAddress[2].toUpperCase().slice(0,1) + titleAddress[2].slice(1);
    const zipcodes = titleAddress[3].toUpperCase().slice(0,1) + titleAddress[3].slice(1);

    const fullAddress = `${streets}:${userAddress.street}, ${suites}:${userAddress.suite}, ${cities}:${userAddress.city}, ${zipcodes}:${userAddress.zipcode}`;
    
    divInfo.insertAdjacentHTML('beforeend', `
            <div class="card-body">
              <h5 class="card-title">${names}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${userName}</h6>
              <p class="card-text">${fullAddress}</p>
              <p class="card-text">${companies}</p>
              <a href="mailto:${mail}" class="card-link">Написать ему</a>
            </div>
    `
)
    divInfo.firstElementChild.classList.add('active');
    
}



const usersInfo = async () => {
    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error ('Произошла ошибка')
        }
        const users = await response.json();
       
        users.forEach(element => {            
            renderUsers(element.name);
            renderInfo(element.name, element.username, element.address, element.company.name, element.email);
        });

        const allLi = document.querySelectorAll('.list-group-item');
        const allLiArray = Array.from(allLi);
        const allLiText = allLiArray.map(item => item.textContent);
        const allInfo = document.querySelectorAll('.card-body');

        ul.addEventListener('click', (event) => {
        if(event.target.matches('.list-group-item')){        
            allLiArray.forEach(li => li.classList.remove('active'));
            event.target.classList.add('active');
            const activeIndex = allLiArray.indexOf(event.target);
            allInfo.forEach(info => info.classList.remove('active'));
            allInfo[activeIndex].classList.add('active');
            
        }
})
    } catch (error){
        console.error(error);
    }
}

usersInfo();


