// Import images array from data file
import { images } from "./data";

// Select DOM elements for gallery container, lightbox, image, caption, and buttons
const galleryContainer = document.getElementById('galleryContainer');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeButton = document.getElementById('closeButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Initialize currentIndex to keep track of the currently displayed image in the lightbox
let currentIndex = 0;

// Function to create the gallery by dynamically adding image thumbnails to the gallery container
function createGallery() {
    images.forEach((img, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = img.thumbnail; // Set thumbnail source
        thumbnail.alt = img.caption; // Set alt text for accessibility
        thumbnail.classList.add('thumbnail'); // Add CSS class for styling
        thumbnail.addEventListener('click', () => openLightbox(index)); // Add click event to open lightbox with selected image
        galleryContainer.appendChild(thumbnail); // Add thumbnail to the gallery container
    });
}

// Function to open the lightbox and display the selected image
function openLightbox(index) {
    currentIndex = index; // Set current index to the selected image index
    lightboxImage.src = images[currentIndex].full; // Set lightbox image source to full-size image
    lightboxCaption.textContent = images[currentIndex].caption; // Set lightbox caption
    lightbox.classList.add('visible'); // Make the lightbox visible
    updateNavigation(); // Update the navigation buttons
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.classList.remove('visible'); // Hide the lightbox
}

// Function to update the lightbox content when navigating between images
function updateLightbox() {
    lightboxImage.src = images[currentIndex].full; // Update lightbox image source
    lightboxCaption.textContent = images[currentIndex].caption; // Update lightbox caption
    updateNavigation(); // Update navigation buttons to reflect the current image position
}

// Function to navigate to the previous image in the lightbox
function prevImage() {
    if (currentIndex > 0) {
        currentIndex--; // Decrease index by 1
        updateLightbox(); // Update lightbox with the previous image
    }
}

// Function to navigate to the next image in the lightbox
function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++; // Increase index by 1
        updateLightbox(); // Update lightbox with the next image
    }
}

// Function to show or hide navigation buttons based on current image position
function updateNavigation() {
    prevButton.style.display = currentIndex === 0 ? 'none' : 'block'; // Hide 'previous' button if on the first image
    nextButton.style.display = currentIndex === images.length - 1 ? 'none' : 'block'; // Hide 'next' button if on the last image
}

// Event listeners for lightbox control buttons
closeButton.addEventListener('click', closeLightbox); // Close lightbox on close button click
prevButton.addEventListener('click', prevImage); // Show previous image on 'prev' button click
nextButton.addEventListener('click', nextImage); // Show next image on 'next' button click

// Initialize the gallery by creating and displaying thumbnails
createGallery();
