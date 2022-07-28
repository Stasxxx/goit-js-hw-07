import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const markup = createPictureGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', markup);


function createPictureGallery(pictures) {
    return pictures.map((picture) => 
            `<div class="gallery__item">
                <a class="gallery__item" href="${picture.original}">
                    <img class="gallery__image" src="${picture.preview}" alt="${picture.description}" />
                </a>
            </div>`
        )
        .join('');
    
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionPosition: 'bottom',
    captionsData: "alt",

});

