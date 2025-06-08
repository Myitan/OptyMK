document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się z Tobą w ciągu 24 godzin.');
    this.reset();
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section-title, .service-card, .gallery-item, tr').forEach(el => {
    observer.observe(el);
});