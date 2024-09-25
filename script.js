function addImage() {
    const imageInput = document.getElementById('imageInput');
    const imageContainer = document.getElementById('imageContainer');
    
    if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = "Tribute Image of Virat Kohli";
        imageContainer.innerHTML = ''; // Clear previous image
        imageContainer.appendChild(img);
      }
  
      reader.readAsDataURL(imageInput.files[0]);
    } else {
      alert('Please select an image to upload.');
    }
  }
  