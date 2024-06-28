document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Message sent successfully!');
            form.reset();
        }
    });
});
