// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const galleryMarkUp = document.querySelector('.gallery');

const galleryEl = galleryItems.map(({ preview, description, original }) =>
`<div class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</div>`
).join('');

galleryMarkUp.insertAdjacentHTML('beforeend', galleryEl);

new SimpleLightbox('.gallery .gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
 });