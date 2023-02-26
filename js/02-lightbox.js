import { galleryItems } from './gallery-items.js';

const qs = (s) => document.querySelector(s);
const gallery = qs('.gallery');

const galleryList = galleryItems.map((image) => `
<a class="gallery__item" href="${image.original}">
    <img class="gallery__image" 
    src="${image.preview}" 
    alt="${image.description}" />
</a>`
).join("");

gallery.insertAdjacentHTML("beforeend", galleryList);

let lightbox = new SimpleLightbox(".gallery a", {
    captionPosition: "outside",
    captionsData: "alt",
    captionDelay: "250",
});

gallery.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', (event) => {
        event.preventDefault();
        lightbox.open();
    });
});

gallery.addEventListener('click', event => event.preventDefault());