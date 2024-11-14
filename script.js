document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
    alert('Thank you for reaching out!');
    
    event.target.reset();
  });
  