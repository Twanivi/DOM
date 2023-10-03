const data = [
   {
       title: 'One',
       text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi quae voluptatibus unde reprehenderit ex ducimus labore qui obcaecati possimus aperiam dolore veritatis corrupti earum omnis, officia quo accusantium animi?'
   },
   {
       title: 'Two',
       text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi quae voluptatibus unde reprehenderit ex ducimus labore qui obcaecati possimus aperiam dolore veritatis corrupti earum omnis, officia quo accusantium animi? imus labore qui obcaecati possimus aperiam dolore veritatis corrupti earum omnis, officia quo accusantium animi'
   },
   {
       title: 'Three',
       text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi quae voluptatibus unde reprehenderit ex ducimus labore qui obcaecati possimus aperiam dosofficia quo accusantium animi'
   }
]

window.addEventListener('DOMContentLoaded', () => {

   const tabsWrapper = document.querySelector('.nav-tabs');
   const infoWrapper = document.querySelector('.info-wrapper');

   data.forEach(item => {
      tabsWrapper.insertAdjacentHTML('beforeend', `
      <li class="nav-item">
          <a class="nav-link" href="#">${item.title}</a>
        </li>
      `);
      infoWrapper.insertAdjacentHTML('beforeend', `
      <div class="info-item">
        <h2>${item.title}</h2>
        <p>${item.text}</p>
      </div>
      `);
   infoWrapper.firstElementChild.classList.add('active'); 
   })


   const tabs = Array.from(document.querySelectorAll('.nav-link'));
   const infoBlocks = document.querySelectorAll('.info-item');

   tabsWrapper.addEventListener('click', (e) => {
    if(e.target.matches('.nav-link')){
        tabs.forEach(tab => tab.classList.remove('active'));
        e.target.classList.add('active');
        const activeIndex = tabs.indexOf(e.target);
        infoBlocks.forEach(block => block.classList.remove('active'));
        infoBlocks[activeIndex].classList.add('active');
    }
   })
})




