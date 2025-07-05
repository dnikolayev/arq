# Maria's Baking Stories Website

A modern, responsive website for Maria's Baking Stories - an artisan bakery and patisserie inspired by the original website at mariasbakingstories.com.

## 🎂 Features

### Design & Layout
- **Modern, responsive design** that works on all devices
- **Warm color palette** with pink (#d4576b) as the primary color
- **Professional typography** using Playfair Display and Inter fonts
- **High-quality images** from Unsplash for visual appeal
- **Smooth animations** and transitions for enhanced user experience

### Sections
1. **Navigation** - Fixed header with smooth scrolling navigation
2. **Hero Section** - Eye-catching banner with call-to-action buttons
3. **About Section** - Story about Maria with statistics and professional image
4. **Products Section** - Filterable product catalog with categories:
   - Macarons
   - Truffles
   - Patisserie
   - Cookies
   - Specialty Items
5. **Reviews Section** - Customer testimonials with 5-star ratings
6. **Bookings Section** - Table reservations and afternoon tea bookings
7. **Contact Section** - Contact information and contact form
8. **Footer** - Links, social media, and additional information

### Interactive Features
- **Mobile-responsive navigation** with hamburger menu
- **Product filtering** by category
- **Add to cart functionality** with visual feedback
- **Contact form** with validation
- **Booking system** with alert notifications
- **Smooth scrolling** navigation
- **Social media integration** (Facebook, Instagram, WhatsApp)
- **Scroll animations** for better user engagement

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Playfair Display, Inter)
- **Unsplash** - High-quality stock images

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for testing)

### Installation
1. Clone or download the project files
2. Ensure you have the following files in your project directory:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

### Running the Website
1. **Option 1**: Open `index.html` directly in your web browser
2. **Option 2**: Use a local server (recommended for testing):
   ```bash
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🎨 Color Scheme

- **Primary Color**: #d4576b (Warm Pink)
- **Secondary Color**: #b84558 (Darker Pink)
- **Background**: #fdf7f0 (Cream)
- **Text**: #333 (Dark Gray)
- **Accent**: #ffd700 (Gold for stars)

## 📋 Product Categories

The website features the following product categories:
- **Macarons** - Pistachio, Limoncello, Ferrero Rocher
- **Truffles** - Red Velvet, Biscoff, Oreo
- **Patisserie** - Victoria Sponge, Choux Buns
- **Cookies** - Nutella Stuffed, Kinder Bueno
- **Specialty** - Baklava, Dubai Chocolate Bars

## 🎯 Key Features Implemented

### Navigation
- Fixed header with smooth scrolling
- Mobile hamburger menu
- Active section highlighting

### Product Showcase
- Category filtering system
- Product cards with hover effects
- Add to cart functionality
- Price display

### Customer Reviews
- 5-star rating system
- Google Reviews integration
- Customer testimonials

### Booking System
- Table reservations
- Afternoon tea bookings
- Kids afternoon tea options

### Contact Features
- Contact form with validation
- Phone number click-to-call
- Email click-to-email
- WhatsApp integration
- Address and opening hours

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #d4576b;
    --secondary-color: #b84558;
    --background-color: #fdf7f0;
}
```

### Adding Products
Add new product cards in the `index.html` file within the `.product-grid` section:
```html
<div class="product-card" data-category="your-category">
    <div class="product-image">
        <img src="your-image-url" alt="Product Name">
    </div>
    <div class="product-info">
        <h3>Product Name</h3>
        <p>Product description</p>
        <div class="product-price">£X.XX</div>
        <button class="add-to-cart">Add to Cart</button>
    </div>
</div>
```

### Updating Contact Information
Edit the contact details in the contact section and footer of `index.html`.

## 📧 Contact Integration

The website includes integration for:
- **Phone**: Click-to-call functionality
- **Email**: Click-to-email with pre-filled subject
- **WhatsApp**: Direct messaging with pre-filled text
- **Contact Form**: Full validation and submission handling

## 🎉 Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance Features

- **Lazy loading** for images
- **Intersection Observer** for scroll animations
- **Optimized images** with proper sizing
- **Minified assets** for faster loading
- **Local storage** for cart persistence

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created as a demo/template based on the original Maria's Baking Stories website. Please ensure you have proper rights to use any images or content in a commercial setting.

## 🙏 Acknowledgments

- Original inspiration from mariasbakingstories.com
- Images from Unsplash.com
- Icons from Font Awesome
- Fonts from Google Fonts

## 📞 Support

For support or questions about this website template:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Created with ❤️ for Maria's Baking Stories**
