document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission for now
    
    // Simple validation for demonstration
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Your message has been sent!');
        // You can implement AJAX here to send the form data to a server
    }
});
