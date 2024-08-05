// document.addEventListener('DOMContentLoaded', () => {
//     const thumbnails = document.querySelectorAll('.gallery-item');
//     const lightbox = document.getElementById('lightbox');
//     const lightboxImage = document.getElementById('lightboxImage');
//     const close = document.querySelector('.close');

//     thumbnails.forEach(thumbnail => {
//         thumbnail.addEventListener('click', () => {
//             lightboxImage.src = thumbnail.src;
//             lightbox.style.display = 'flex';
//         });
//     });

//     close.addEventListener('click', () => {
//         lightbox.style.display = 'none';
//     });

//     lightbox.addEventListener('click', (event) => {
//         if (event.target === lightbox) {
//             lightbox.style.display = 'none';
//         }
//     });
// });
// function openModal(imageSrc) {
//     const modal = document.getElementById('modal');
//     const modalImage = document.getElementById('modal-image');
//     modal.style.display = 'flex';
//     modalImage.src = imageSrc;
// }

// function closeModal() {
//     const modal = document.getElementById('modal');
//     modal.style.display = 'none';
// }

// function openModal(src) {
//     var modal = document.getElementById("modal");
//     var modalImg = document.getElementById("modal-img");
//     modal.style.display = "block";
//     modalImg.src = src;
// }

// function closeModal() {
//     var modal = document.getElementById("modal");
//     modal.style.display = "none";
// }
var fullimgbox=document.getElementById("fullimgbox");
var fullimage=document.getElementById("fullimage");
function openFullimg(pic){
    fullimgbox.style.display="flex";
    fullimage.src=pic;
}