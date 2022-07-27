import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const markup = createPictureGallery(galleryItems);


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
console.log(createPictureGallery(galleryItems))

function onGalleryPictureClick(evt) {
    evt.preventDefault()


    const instance = basicLightbox.create(`
	<img src="${evt.target.dataset.source}">
`)
    instance.show()
}
