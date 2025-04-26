document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // You could store this in localStorage or send to an API
    console.log('Form data:', data);
    
    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    
    // Reset form
    event.target.reset();
    
    // Hide success message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
}
