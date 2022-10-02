// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import imgTmp from "../templates/galley-item.hbs";

const gallery = document.querySelector(".gallery");
const galletyTemplate = imgTmp(galleryItems);

gallery.insertAdjacentHTML("beforeend", galletyTemplate);

const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
  });
