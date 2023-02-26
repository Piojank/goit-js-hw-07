import { galleryItems } from './gallery-items.js';

const qs = (s) => document.querySelector(s);
const gallery = qs('.gallery');

const galleryList = galleryItems.map((image) => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
        <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
        />
    </a>
</div>`).join("");

function selectImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    };
    galleryItems.forEach((image) => {
        const instance = basicLightbox.create(`<img src=${image.original}>`);
        if (event.target.src === image.preview) {
            instance.show();
        }
        if (instance.visible() === true) {
            document.addEventListener("keydown", function (event) {
                if (event.key === "Escape") {
                    instance.close();
                }
            });
        }
    })
};

gallery.insertAdjacentHTML("beforeend", galleryList);
gallery.addEventListener("click", selectImage);


