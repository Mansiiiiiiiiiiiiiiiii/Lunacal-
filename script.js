document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tabs li');
  const tabContents = document.querySelectorAll('.tab-content div');

  // Flash highlight function for a fraction of a second
  function flashHighlight(element) {
    element.classList.add('highlighted');
    setTimeout(() => {
      element.classList.remove('highlighted');
    }, 500); // Highlight for 500 milliseconds (0.5 sec)
  }

  // Tab navigation with flash highlight on click
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      tab.classList.add('active');
      const tabTarget = tab.getAttribute('data-tab');
      document.getElementById(tabTarget).classList.add('active');

      // Flash the clicked tab
      flashHighlight(tab);
    });
  });

  // Gallery Functionality
  const galleryImagesContainer = document.querySelector('.gallery-images');
  const addImageBtn = document.querySelector('.add-image-btn');
  const leftArrow = document.getElementById('previous-arrow');
  const rightArrow = document.getElementById('next-arrow');

  let images = []; // Array to store the image elements
  let currentIndex = 0; // To keep track of the current image displayed
  const maxImages = 4; // Maximum number of images

  // Function to update gallery display
  function updateGallery() {
    galleryImagesContainer.innerHTML = ''; // Clear the gallery first

    const imagesToShow = images.slice(currentIndex, currentIndex + 3); // Show 3 images at a time

    imagesToShow.forEach(image => {
      galleryImagesContainer.appendChild(image); // Append each image
      
    });

    // Check if there's space for adding a new image (after clicking right arrow)
    if (images.length < currentIndex + 3) {
      const emptySlot = document.createElement('div');
      emptySlot.classList.add('image-placeholder'); // Style the empty slot if needed
      galleryImagesContainer.appendChild(emptySlot);
    }
  }

  // Image upload handler (limit to max 4 images)
  function handleImageUpload(event) {
    const files = event.target.files;

    if (images.length >= maxImages) {
      alert("You can only upload a maximum of 4 images.");
      return;
    }

    for (let file of files) {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (images.length < maxImages) {
          const img = document.createElement('img');
          img.src = e.target.result;
          images.push(img); // Add the image to the array
          updateGallery(); // Update the gallery
        }
      };
      reader.readAsDataURL(file);
    }
  }

  // Add image button event
  addImageBtn.addEventListener('click', () => {
    flashHighlight(addImageBtn); // Flash Add Image button
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';
    input.addEventListener('change', handleImageUpload);
    document.body.appendChild(input);
    input.click();
  });

  // Arrow Navigation
  leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateGallery();
      flashHighlight(leftArrow); // Flash left arrow
    }
  });

  rightArrow.addEventListener('click', () => {
    if (currentIndex < images.length - 3) {
      currentIndex++;
      updateGallery();
      flashHighlight(rightArrow); // Flash right arrow
    }
  });
});
