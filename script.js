document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    emailjs.sendForm(
        "service_0fb5bde",    // 👈 Replace this
        "template_toimsxu",   // 👈 Replace this
        this                  // `this` is the form element
    ).then(
        function () {
            document.getElementById("form-response").textContent = "✅ Message sent successfully!";
        },
        function (error) {
            document.getElementById("form-response").textContent = "❌ Failed to send message.";
            console.error("EmailJS error:", error);
        }
    );

    this.reset(); // Clear the form
});
