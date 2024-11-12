//typeWriter Effect
document.addEventListener("DOMContentLoaded", function () {
    const words = ["Designer", "Developer", "Freelancer"]; // Array of words to display
    const textElement = document.getElementById("dynamic-text");
    let wordIndex = 0; // Current word index
    let charIndex = 0; // Current character index in the word
    let isDeleting = false; // Flag to determine if we are deleting text

    function typeWriter() {
        const currentWord = words[wordIndex];

        // Update the text with a blinking cursor at the end
        textElement.innerHTML = currentWord.substring(0, charIndex) + '<span class="blinking-cursor"></span>';

        // Typing logic
        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeWriter, 200); // Typing speed
        }
        // Start deleting when the word is fully typed
        else if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1000); // Pause before deleting
        }
        // Deleting logic
        else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeWriter, 100); // Deleting speed
        }
        // Move to the next word once the word is fully deleted
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Loop back to the first word
            setTimeout(typeWriter, 500); // Short pause before typing the next word
        }
    }

    typeWriter(); // Start the typewriter effect
});

// JavaScript to handle modal functionality
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDetails = document.getElementById("modalDetails");
    const closeBtn = document.getElementById("closeBtn");

    // Buttons inside the modal
    const projectLink = document.getElementById("projectLink");
    const githubLink = document.getElementById("githubLink");

    // Open modal when project title is clicked
    document.querySelectorAll(".project-title").forEach((project) => {
        project.addEventListener("click", function () {
            const title = this.getAttribute("data-title");
            const details = this.getAttribute("data-details");
            const projectUrl = this.getAttribute("data-project-link");
            const githubUrl = this.getAttribute("data-github-link");

            // Set modal content
            modalTitle.textContent = title;
            modalDetails.textContent = details;

            // Set href attributes for buttons
            projectLink.href = projectUrl;
            githubLink.href = githubUrl;

            // Show modal
            modal.style.display = "flex";
        });
    });

    // Close modal when close button is clicked
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});


// JavaScript for Contact Form Validation
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {
        // Prevent form from submitting initially
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (name === "") {
            formMessage.textContent = "Please enter your name.";
            formMessage.style.display = "block";
        } else if (email === "" || !validateEmail(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.display = "block";
        } else if (message === "") {
            formMessage.textContent = "Please enter a message.";
            formMessage.style.display = "block";
        } else {
            formMessage.style.display = "none";
            formMessage.textContent = "";

            // Form is valid, submit it here or handle form data
            alert("Form submitted successfully!");
            contactForm.reset(); // Reset form fields
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});



// Project Data from Api calling


// JavaScript for API Integration
document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.getElementById("projectList");
    const errorMessage = document.getElementById("errorMessage");

    // GitHub username and API URL
    const username = "your-github-username"; // Replace with the desired GitHub username
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    // Function to fetch project data
    function fetchProjects() {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                if (data.length === 0) {
                    throw new Error(alert("No projects found"));
                }
                displayProjects(data);
            })
            .catch(error => {
                showError(error.message);
            });
    }

    // Function to display projects
    function displayProjects(projects) {
        projectList.innerHTML = ""; // Clear loading text
        projects.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.classList.add("project-item");
            projectElement.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description || "No description provided."}</p>
                <a href="${project.html_url}" target="_blank">View on GitHub</a>
            `;
            projectList.appendChild(projectElement);
        });
    }

    // Function to show error message
    function showError(message) {
        projectList.style.display = "none";
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
    }

    // Fetch projects on page load
    fetchProjects();
});

// For Small Screen Display menu
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}