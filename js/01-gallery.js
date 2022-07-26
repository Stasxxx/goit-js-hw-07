import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
console.log(galleryItems);
const markup = createPictureGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', markup);

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
console.log(createPictureGallery(galleryItems))

