// Google reCAPTCHA callback functions
let captchaCompleted = false;

function onCaptchaSuccess() {
    captchaCompleted = true;
    document.getElementById('submitBtn').disabled = false;
    document.getElementById('captchaError').classList.add('hidden');
}

function onCaptchaExpired() {
    captchaCompleted = false;
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('captchaError').classList.remove('hidden');
}

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!captchaCompleted) {
        document.getElementById('captchaError').classList.remove('hidden');
        alert('Please complete the CAPTCHA verification before submitting.');
        return;
    }

    // Here you would typically send the form data to a server
    // You would also verify the reCAPTCHA response on the server side
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
    captchaCompleted = false;
    document.getElementById('submitBtn').disabled = true;
    
    // Reset reCAPTCHA
    if (typeof grecaptcha !== 'undefined') {
        grecaptcha.reset();
    }
});

// Initialize submit button as disabled
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').disabled = true;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
