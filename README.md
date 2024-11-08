﻿# image-gallery
Tasks:
1. HTML Structure:
• Create the basic HTML structure:
o A container for the image gallery.
o Thumbnail elements with attributes pointing to the thumbnail images.
o Alt text for accessibility and captions.
o The lightbox container is initially hidden. 
o Elements within the lightbox:
1. Full-sized image container.
2. Caption container.
3. “Next” and “Previous” buttons.
4. Close button.
2. CSS Styling:
• Style the gallery to your liking:
o Thumbnail grid layout (e.g., using Flexbox or CSS Grid).
o Lightbox overlay effect (e.g., darkening the background).
o Lightbox content positioning (e.g., centered).
o Button styles and hover effects.
3. JavaScript Functionality:
• Image Data:
o Create an array or object to store image information:
1. Image URL (full-size)
2. Thumbnail URL
3. Caption
• DOM Manipulation:
o Write functions to:
1. Dynamically create thumbnail elements and add them to the 
gallery container.
2. Open the lightbox when a thumbnail is clicked:
a. Display the full-sized image in the lightbox container.
b. Update the caption in the lightbox.
3. Handle navigation (next/previous buttons):
a. Load the correct image and caption based on the current 
index.
b. Disable buttons at the beginning and end of the gallery.
4. Close the lightbox.
• Event Handling:
o Add event listeners to:
1. Thumbnails (click to open lightbox).
2. Next and Previous buttons (click to navigate).
3. Close button (click to close the lightbox).
• Date/Time Handling:
o Use JavaScript’s Date object or a library like Moment.js to work with 
due dates/times.
o Ensure proper formatting and validation of date/time input.
