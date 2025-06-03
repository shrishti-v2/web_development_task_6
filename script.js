const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        let isValid = true;

        // Clear previous error messages
        document.getElementById("name-error").textContent = "";
        document.getElementById("email-error").textContent = "";
        document.getElementById("message-error").textContent = "";

        // Name validation
        if (name.length < 3) {
            document.getElementById("name-error").textContent = "Name must be at least 3 characters.";
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById("email-error").textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Message validation
        if (message.length < 10) {
            document.getElementById("message-error").textContent = "Message must be at least 10 characters.";
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });