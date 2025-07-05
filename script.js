// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Product Category Filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productCards = document.querySelectorAll('.product-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Filter products
            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Add to Cart Functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            // Simple cart functionality (could be expanded)
            cart.push({
                name: productName,
                price: productPrice
            });
            
            // Visual feedback
            this.textContent = 'Added!';
            this.style.background = '#28a745';
            
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.style.background = '#d4576b';
            }, 1500);
            
            // Show cart count (simple implementation)
            updateCartCount();
        });
    });

    function updateCartCount() {
        // This could be expanded to show actual cart count
        console.log('Cart items:', cart.length);
    }

    // Contact Form Handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
        });
    }

    // Navbar Background on Scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Booking Button Functionality
    const bookingButtons = document.querySelectorAll('.booking-card .btn');
    bookingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const bookingType = this.closest('.booking-card').querySelector('h3').textContent;
            
            // Simple booking simulation
            alert(`Thank you for your interest in ${bookingType}! Please call us at 07481 104516 to complete your booking.`);
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.product-card, .review-card, .booking-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Testimonial/Review Slider (if more reviews are added)
    let currentReview = 0;
    const reviews = document.querySelectorAll('.review-card');
    
    function showReviews() {
        reviews.forEach((review, index) => {
            review.style.display = index < 3 ? 'block' : 'none';
        });
    }
    
    showReviews();

    // Simple carousel for reviews (if needed)
    function nextReview() {
        currentReview = (currentReview + 1) % reviews.length;
        showReviews();
    }

    // Auto-advance reviews every 5 seconds (optional)
    // setInterval(nextReview, 5000);

    // WhatsApp and Phone Click Handlers
    document.addEventListener('click', function(e) {
        if (e.target.textContent === '07481 104516') {
            window.open('tel:07481104516');
        }
    });

    // Social Media Links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').classList[1].split('-')[1];
            
            switch(platform) {
                case 'facebook':
                    window.open('https://facebook.com/mariasbakingstories', '_blank');
                    break;
                case 'instagram':
                    window.open('https://instagram.com/mariasbakingstories', '_blank');
                    break;
                case 'whatsapp':
                    window.open('https://wa.me/447481104516', '_blank');
                    break;
                default:
                    console.log('Social link clicked:', platform);
            }
        });
    });

    // Loading Animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Keyboard Navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
        }
    });

    // Product Search (if search functionality is added)
    function searchProducts(query) {
        const products = document.querySelectorAll('.product-card');
        products.forEach(product => {
            const productName = product.querySelector('h3').textContent.toLowerCase();
            const productDesc = product.querySelector('p').textContent.toLowerCase();
            
            if (productName.includes(query.toLowerCase()) || productDesc.includes(query.toLowerCase())) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // Price Calculator (for bulk orders)
    function calculateBulkPrice(quantity, unitPrice) {
        let discount = 0;
        if (quantity >= 10) discount = 0.1;
        if (quantity >= 20) discount = 0.15;
        if (quantity >= 50) discount = 0.2;
        
        return (unitPrice * quantity * (1 - discount)).toFixed(2);
    }

    // Local Storage for Cart
    function saveCart() {
        localStorage.setItem('bakeryCart', JSON.stringify(cart));
    }

    function loadCart() {
        const savedCart = localStorage.getItem('bakeryCart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartCount();
        }
    }

    // Load cart on page load
    loadCart();

    // Save cart when items are added
    const originalAddToCart = addToCartButtons.forEach;
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(saveCart, 100);
        });
    });

    // Image Lazy Loading (for better performance)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Error Handling for Images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBBdmFpbGFibGU8L3RleHQ+PC9zdmc+';
        });
    });

    console.log('Maria\'s Baking Stories website loaded successfully!');
});

// Global Functions
function openWhatsApp() {
    window.open('https://wa.me/447481104516?text=Hello! I\'m interested in your baking services.', '_blank');
}

function callBakery() {
    window.open('tel:07481104516');
}

function emailBakery() {
    window.open('mailto:hello@mariasbakingstories.com?subject=Inquiry about baking services');
}