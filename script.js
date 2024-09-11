document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tabs li');
  const tabContents = document.querySelectorAll('.tab-content div');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      tab.classList.add('active');
      const tabTarget = tab.getAttribute('data-tab');
      document.getElementById(tabTarget).classList.add('active');
    });
  });

  // Gallery Functionality
  const galleryImagesContainer = document.querySelector('.gallery-images');
  const addImageBtn = document.querySelector('.add-image-btn');
  const leftArrow = document.getElementById('previous-arrow');
  const rightArrow = document.getElementById('next-arrow');

  let images = []; // Array to store the image elements
  let currentIndex = 0; // To keep track of which image is currently displayed

  function updateGallery() {
    galleryImagesContainer.innerHTML = ''; // Clear the gallery first

    const imagesToShow = images.slice(currentIndex, currentIndex + 3); // Show 3 images at a time

    imagesToShow.forEach(image => {
      galleryImagesContainer.appendChild(image); // Append each image
    });
  }

  function handleImageUpload(event) {
    const files = event.target.files;

    for (let file of files) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        images.push(img); // Add the image to the array
        updateGallery(); // Update the gallery
      };
      reader.readAsDataURL(file);
    }
  }

  addImageBtn.addEventListener('click', () => {
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
    }
  });

  rightArrow.addEventListener('click', () => {
    if (currentIndex < images.length - 3) {
      currentIndex++;
      updateGallery();
    }
  });
});
