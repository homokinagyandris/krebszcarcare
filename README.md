# Krebsz Car Care Website

A modern, responsive website for Krebsz Car Care, a professional car detailing business. The website features a clean design with sections for services, gallery, and contact information.

## Features

- Responsive design that works on all devices
- Modern and clean user interface
- Service showcase section
- Before/After gallery
- Contact form
- Google Maps integration
- Social media links

## Project Structure

```
krebszcarcare/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── img/
│   ├── logo.png
│   ├── hero-bg.jpg
│   └── gallery/
│       ├── before-after-1.jpg
│       ├── before-after-2.jpg
│       └── before-after-3.jpg
└── README.md
```

## Setup Instructions

1. Clone the repository
2. Replace the placeholder images in the `img` directory with your actual images
3. Update the Google Maps API key and coordinates in `js/main.js`
4. Update the contact form endpoint in `js/main.js`
5. Customize the content in `index.html` to match your business information
6. Deploy to your web hosting service

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Maps API
- Font Awesome Icons
- Google Fonts (Montserrat)

## Customization

### Colors

The website uses CSS variables for easy color customization. The main colors can be modified in the `:root` section of `style.css`:

```css
:root {
    --primary-color: #ff0000;
    --primary-dark: #cc0000;
    --secondary-color: #000000;
    --light-gray: #f5f5f5;
    --dark-gray: #333333;
    --white: #ffffff;
}
```

### Images

- Replace `hero-bg.jpg` with your own hero image
- Add your logo as `logo.png`
- Add before/after images to the `gallery` directory

### Contact Form

Update the form submission endpoint in `main.js`:

```javascript
const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
});
```

### Google Maps

Update the coordinates in `main.js`:

```javascript
const location = { 
    lat: YOUR_LATITUDE, 
    lng: YOUR_LONGITUDE 
};
```

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

All rights reserved. This project and its contents are proprietary to Krebsz Car Care.

## Contact

For any inquiries, please contact:
- Phone: +36 70 518 5906
- Email: [Your Email]
- Facebook: KrebszCarCare
- Instagram: @krebszcarcare 