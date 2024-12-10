function getRandomNaturePhotos() {
    const accessKey = 'AaBtrIwydbZ0MEKamiIFSTk3KT5eJJhSd6naYwiD4sc'; // Replace 'YOUR_UNSPLASH_ACCESS_KEY' with your Unsplash API access key
    const searchQuery = 'nature'; // Search query for nature images

    axios.get('https://api.unsplash.com/photos/random', {
        params: {
            client_id: accessKey,
            query: searchQuery,
            count: 5 // Display only 5 images
        }
    })
    .then(response => {
        const randomPhotos = response.data;
        const heroContainer = document.getElementById('heroContainer');
        let index = 0;

        // Display each nature image with animation
        randomPhotos.forEach(photo => {
            const photoUrl = photo.urls.regular;
            const img = new Image();
            img.src = photoUrl;
            img.classList.add('hero-image');
            img.style.animationDelay = `${index * 6}s`; // Delay each image animation
            heroContainer.appendChild(img);
            index++;
        });
    })
    .catch(error => {
        console.error('Error fetching random photos:', error);
    });
}

// Call the function to fetch random nature photos when the page loads
window.onload = () => {
    getRandomNaturePhotos(); // Load nature photos on page load
};


  document.getElementById('authForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  
  
  var userData = {
      name: username,
      email: email,
      password: pass
  };

  localStorage.setItem('userData', JSON.stringify(userData));
  
  if (username === "") {
  alert("Name must be filled out");
  } else if (email === "") {
  alert("Email must be filled out");
  } else if (pass === "") {
  alert("Password must be filled out");
  } else if (!validateEmail(email)) {
  alert("Please enter a valid email address");
  } else if (!email.endsWith("@gmail.com")) {
  alert("Email must end with @gmail.com");
  } else if (pass.length < 6) {
  alert("Password must be at least 6 characters long");
  } else {
  // Form is valid
  alert("Form submitted successfully!");
let enterButton = document.querySelector(".enterbtn");
enterButton.style="display:block;transform:translateX(-280px); transition: transform .5s linear;";
let sbmt = document.querySelector(".sbmtButton");
sbmt.style="display:none";   
const userData = JSON.parse(localStorage.getItem('userData'));
  if(userData && userData.name){
    document.getElementById("user").innerHTML = `<i class="fa-solid fa-user"></i>`+userData.name;
  }
  else{
    document.getElementById("user").innerHTML = `<i class="fa-solid fa-user"></i>`+"Guest";
  }

   document.getElementById("username").value="";
 document.getElementById("email").value="";
  document.getElementById("password").value="";
  // Show the enter button
   
  enterButton.onclick = function() {
  window.location.href = 'E:\minor-project\minor2\Component\randomImage.html'; // Update with your desired path
  }
  ;
  }
  
  function validateEmail(email) {
  var emailPattern = /^[^\s@]+@gmail\.com$/;
  return emailPattern.test(email);
  }
  
  });   
 
