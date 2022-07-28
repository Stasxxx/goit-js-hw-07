import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const markup = createPictureGallery(galleryItems);
let instance;

gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener('click', onGalleryPictureClick)


function createPictureGallery(pictures) {
    return pictures.map((picture) => 
            `<div class="gallery__item">
                <a class="gallery__link" href="${picture.original}">
                    <img
                    class="gallery__image"
                    src="${picture.preview}"
                    data-source="${picture.original}"
                    alt="${picture.description}"
                    />
                </a>
            </div>`
        )
        .join('');
    
}


function onGalleryPictureClick(evt) {
    evt.preventDefault()

    instance = basicLightbox.create(`
	<img src="${evt.target.dataset.source}">
`, {
        onShow: (instance) => {
        window.addEventListener('keydown', onEscKeyPress)
    },
        onClose: (instance) => {
        window.removeEventListener('keydown', onEscKeyPress)
    }
    }
    );
    instance.show() 
}

function onEscKeyPress(event) {
    
    if (event.code === 'Escape') {
        onCloseModal();
    }
}

function onCloseModal() {
    instance.close();
    // document.body.lastElementChild.remove()
}
