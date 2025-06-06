// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth Scrolling for Navigation Links (only on index.html)
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Gallery Images
const galleryImages = [
    {
        src: 'img/gallery/before-after-1.jpg',
        alt: 'Before and After Detailing 1'
    },
    {
        src: 'img/gallery/before-after-2.jpg',
        alt: 'Before and After Detailing 2'
    },
    {
        src: 'img/gallery/before-after-3.jpg',
        alt: 'Before and After Detailing 3'
    },
    // Add more gallery images here
];

// Populate Gallery
const galleryGrid = document.querySelector('.gallery-grid');
galleryImages.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    
    galleryItem.appendChild(img);
    galleryGrid.appendChild(galleryItem);
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        try {
            // Replace with your actual form submission endpoint
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                alert('Thank you for your message. We will contact you soon!');
                contactForm.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            alert('Sorry, there was an error sending your message. Please try again later.');
            console.error('Form submission error:', error);
        }
    });
}

// Google Maps Integration
function initMap() {
    // Replace with your actual coordinates
    const location = { lat: 47.497913, lng: 19.040236 }; // Budapest coordinates as example
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{"color": "#242f3e"}]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{"lightness": -80}]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#746855"}]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#212a37"}]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#9ca5b3"}]
            }
        ]
    });
    
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Krebsz Car Care'
    });

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div class="map-info">
                <h3>Krebsz Car Care</h3>
                <p>Professional Car Detailing</p>
                <p>+36 70 518 5906</p>
            </div>
        `
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
} 