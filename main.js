// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})



// show/hide faq answer 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";

        }
    })
})



// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


// close nav menu 
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Verify reCAPTCHA before sending the form data
    const token = grecaptcha.getResponse();
    if (!token) {
        alert('Please complete the CAPTCHA.');
        return;
    }

    const contact = {
        name: formData.get('First Name') + " " + formData.get('Last Name'),
        email: formData.get('Email Address'),
        message: formData.get('Message'),
        recaptchaResponse: token
    };

    //https://jguides.onrender.com/contact
    try {
        const response = await fetch('http://localhost:8080/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        });

        if (response.status === 201) {
            alert('Message sent successfully.');
            form.reset();
            grecaptcha.reset(); // Reset reCAPTCHA
        } else {
            alert('Failed to send the message.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('error.');
    }
});


