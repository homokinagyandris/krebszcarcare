document.addEventListener('DOMContentLoaded', function() {
    // Gallery Images with Categories
    const galleryImages = [
        {
            src: 'img/gallery/exterior-1.jpg',
            alt: 'Exterior Detailing Before/After 1',
            category: 'exterior'
        },
        {
            src: 'img/gallery/exterior-2.jpg',
            alt: 'Exterior Detailing Before/After 2',
            category: 'exterior'
        },
        {
            src: 'img/gallery/interior-1.jpg',
            alt: 'Interior Detailing Before/After 1',
            category: 'interior'
        },
        {
            src: 'img/gallery/interior-2.jpg',
            alt: 'Interior Detailing Before/After 2',
            category: 'interior'
        },
        {
            src: 'img/gallery/ceramic-1.jpg',
            alt: 'Ceramic Coating Before/After 1',
            category: 'ceramic'
        },
        {
            src: 'img/gallery/ceramic-2.jpg',
            alt: 'Ceramic Coating Before/After 2',
            category: 'ceramic'
        },
        {
            src: 'img/gallery/paint-1.jpg',
            alt: 'Paint Correction Before/After 1',
            category: 'paint'
        },
        {
            src: 'img/gallery/paint-2.jpg',
            alt: 'Paint Correction Before/After 2',
            category: 'paint'
        }
    ];

    // Initialize Lightbox
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'albumLabel': 'Image %1 of %2'
        });
    }

    // Gallery Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryGrid = document.querySelector('.gallery-grid');

    if (!galleryGrid) {
        console.error('Gallery grid not found');
        return;
    }

    // Populate Gallery
    function populateGallery(filter = 'all') {
        console.log('Filtering gallery with:', filter);
        galleryGrid.innerHTML = '';
        
        galleryImages.forEach(image => {
            if (filter === 'all' || image.category === filter) {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                
                const link = document.createElement('a');
                link.href = image.src;
                link.setAttribute('data-lightbox', 'gallery');
                link.setAttribute('data-title', image.alt);
                
                const img = document.createElement('img');
                img.src = image.src;
                img.alt = image.alt;
                img.loading = 'lazy';
                
                link.appendChild(img);
                galleryItem.appendChild(link);
                galleryGrid.appendChild(galleryItem);
            }
        });
    }

    // Filter Button Click Handler
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = button.getAttribute('data-filter');
            console.log('Filter button clicked:', filter);
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter gallery
            populateGallery(filter);
        });
    });

    // Initial gallery population
    populateGallery('all');
}); 