const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


function showPopUp(event){
 
  event.preventDefault()
  let popUpEl = document.getElementById('pop-up');
  let popUpImg = document.getElementById('pop-up-img')
  popUpImg.setAttribute('src', event.target.getAttribute("data-source"));
  popUpEl.classList.toggle("is-open");
}
function hidePopUp(event){
 
  event.preventDefault()
  let popUpEl = document.getElementById('pop-up');
  let popUpImg = document.getElementById('pop-up-img')
  popUpImg.removeAttribute('src');
  popUpEl.classList.toggle("is-open");
}

function createListeners(){
  let galleryEls = document.getElementsByClassName('gallery__item') || [];
  
  for(let i=0; i < galleryEls.length; i++){
    galleryEls[i].addEventListener('click',showPopUp,false);
  }
}

function showGallery (){
  let galleryEl= document.getElementById('gallery-container');
  
  for(let i = 0; i < galleryItems.length; i++ ){
    galleryEl.innerHTML += `<li class="gallery__item"  >
    <a
      class="gallery__link"
      href="${galleryItems[i].original}"
      onclick="showPopUp()";
    >
      <img
        class="gallery__image"
        src="${galleryItems[i].preview}"
        data-source="${galleryItems[i].original}"
        alt="${galleryItems[i].description}"
      />
    </a>
  </li>
  `
  }
  
  createListeners();
  
}



  showGallery();

  document.getElementsByClassName('lightbox__button')[0].addEventListener('click',hidePopUp,false );

