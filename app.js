// ===========================
// PRODUCT CATALOG - Loaded from external file
// ===========================
// Products are now loaded from products-data.js
// Make sure to include <script src="products-data.js"></script> before app.js in HTML


// ===========================
// USER AUTHENTICATION
// ===========================
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

function openLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.classList.add('active');
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.classList.remove('active');
}

function openRegisterModal() {
    const modal = document.getElementById('registerModal');
    if (modal) modal.classList.add('active');
    closeLoginModal();
}

function closeRegisterModal() {
    const modal = document.getElementById('registerModal');
    if (modal) modal.classList.remove('active');
}

function switchToRegister() {
    closeLoginModal();
    openRegisterModal();
}

function switchToLogin() {
    closeRegisterModal();
    openLoginModal();
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simple validation (in real app, this would be server-side)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = { name: user.name, email: user.email };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserUI();
        closeLoginModal();
        showNotification(`Welcome back, ${user.name}!`);
    } else {
        showNotification('Invalid email or password');
    }
}

function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (password !== confirmPassword) {
        showNotification('Passwords do not match!');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(u => u.email === email)) {
        showNotification('Email already registered!');
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    currentUser = { name, email };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserUI();
    closeRegisterModal();
    showNotification(`Welcome, ${name}! Your account has been created.`);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserUI();
    showNotification('Logged out successfully');
    window.location.href = 'Home.html';
}

function updateUserUI() {
    const authButtons = document.getElementById('authButtons');
    const userProfile = document.getElementById('userProfile');
    const authButtonsSidebar = document.getElementById('authButtonsSidebar');

    if (currentUser) {
        // Hide navbar auth buttons (if they exist)
        if (authButtons) authButtons.style.display = 'none';
        // Show user profile
        if (userProfile) {
            userProfile.style.display = 'flex';
            const userName = document.getElementById('userName');
            const userAvatar = document.getElementById('userAvatar');
            if (userName) userName.textContent = currentUser.name;
            if (userAvatar) userAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
        }
        // Hide sidebar auth buttons
        if (authButtonsSidebar) authButtonsSidebar.style.display = 'none';
    } else {
        // Show navbar auth buttons (if they exist)
        if (authButtons) authButtons.style.display = 'flex';
        // Hide user profile
        if (userProfile) userProfile.style.display = 'none';
        // Show sidebar auth buttons
        if (authButtonsSidebar) authButtonsSidebar.style.display = 'block';
    }
}

// ===========================
// PAGINATION
// ===========================
let currentPage = 1;
const itemsPerPage = 12;
let allFilteredProducts = [];

function renderProductsWithPagination(productsToRender) {
    allFilteredProducts = productsToRender;
    const totalPages = Math.ceil(allFilteredProducts.length / itemsPerPage);

    // Reset to page 1 if current page is out of bounds
    if (currentPage > totalPages) currentPage = 1;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = allFilteredProducts.slice(startIndex, endIndex);

    renderProducts(paginatedProducts);
    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer || totalPages <= 1) {
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }

    let paginationHTML = `
        <button class="pagination-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            ← Previous
        </button>
    `;

    // Show page numbers
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
        paginationHTML += `<button class="pagination-btn" onclick="changePage(1)">1</button>`;
        if (startPage > 2) paginationHTML += `<span class="pagination-info">...</span>`;
    }

    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button class="pagination-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) paginationHTML += `<span class="pagination-info">...</span>`;
        paginationHTML += `<button class="pagination-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
    }

    paginationHTML += `
        <button class="pagination-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            Next →
        </button>
    `;

    paginationContainer.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = Math.ceil(allFilteredProducts.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    renderProductsWithPagination(allFilteredProducts);

    // Scroll to top of product grid
    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
        productGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


// ===========================
// FAVORITES SYSTEM
// ===========================
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function updateFavoritesCount() {
    const favoritesCount = document.getElementById('favoritesCount');
    if (favoritesCount) {
        favoritesCount.textContent = favorites.length;
        favoritesCount.style.display = favorites.length > 0 ? 'flex' : 'none';
    }
}

function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);

    if (index > -1) {
        favorites.splice(index, 1);
        showNotification('Removed from favorites');
    } else {
        favorites.push(productId);
        showNotification('Added to favorites');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    updateFavoriteButtons();

    // If on favorites page, re-render
    if (window.location.pathname.includes('favorites.html')) {
        renderFavorites();
    }
}

function isFavorite(productId) {
    return favorites.includes(productId);
}

function updateFavoriteButtons() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const productId = parseInt(btn.dataset.productId);
        if (isFavorite(productId)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function renderFavorites() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    const favoritesEmpty = document.getElementById('favoritesEmpty');

    if (!favoritesGrid) return;

    const favoriteProducts = products.filter(p => favorites.includes(p.id));

    if (favoriteProducts.length === 0) {
        favoritesGrid.style.display = 'none';
        if (favoritesEmpty) favoritesEmpty.style.display = 'block';
        return;
    }

    favoritesGrid.style.display = 'grid';
    if (favoritesEmpty) favoritesEmpty.style.display = 'none';

    favoritesGrid.innerHTML = favoriteProducts.map(product => `
        <div class="product-card">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                <button class="favorite-btn product-card-favorite active" data-product-id="${product.id}" onclick="toggleFavorite(${product.id})">❤️</button>
                <div class="product-actions">
                    <button class="action-btn" onclick="window.location.href='product-detail.html?id=${product.id}'" title="Quick View">👁️</button>
                    <button class="action-btn" onclick="addToCart(${product.id})" title="Add to Cart">🛒</button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">৳${product.price}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// ===========================
// SEARCH FUNCTIONALITY
// ===========================
let searchTimeout;

function handleSearch(event) {
    const query = event.target.value.toLowerCase().trim();
    const searchResults = document.getElementById('searchResults');

    if (!searchResults) return;

    clearTimeout(searchTimeout);

    if (query.length < 2) {
        searchResults.classList.remove('active');
        return;
    }

    searchTimeout = setTimeout(() => {
        const results = products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        ).slice(0, 5);

        if (results.length > 0) {
            searchResults.innerHTML = results.map(product => `
                <div class="search-result-item" onclick="window.location.href='product-detail.html?id=${product.id}'">
                    <img src="${product.image}" alt="${product.name}" class="search-result-image">
                    <div class="search-result-info">
                        <div class="search-result-name">${product.name}</div>
                        <div class="search-result-price">৳${product.price}</div>
                    </div>
                </div>
            `).join('');
            searchResults.classList.add('active');
        } else {
            searchResults.innerHTML = '<div style="padding: 1rem; text-align: center; color: var(--color-gray);">No products found</div>';
            searchResults.classList.add('active');
        }
    }, 300);
}

function closeSearchResults() {
    const searchResults = document.getElementById('searchResults');
    if (searchResults) {
        setTimeout(() => searchResults.classList.remove('active'), 200);
    }
}

// ===========================
// SIDEBAR NAVIGATION
// ===========================
function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (sidebar) sidebar.classList.add('active');
    if (sidebarOverlay) sidebarOverlay.classList.add('active');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (sidebar) sidebar.classList.remove('active');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
}

// ===========================
// SHOPPING CART (Enhanced)
// ===========================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProductQty = 1;

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

function addToCartFromDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += currentProductQty;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: currentProductQty
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} (x${currentProductQty}) added to cart!`);
    currentProductQty = 1;
    if (document.getElementById('qtyDisplay')) {
        document.getElementById('qtyDisplay').textContent = '1';
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartModal();
}

function updateCartItemQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartModal();
            updateCartCount();
        }
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// ===========================
// CART MODAL
// ===========================
function openCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.add('active');
        updateCartModal();
    }
}

function closeCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function updateCartModal() {
    const cartModalBody = document.getElementById('cartModalBody');
    const cartTotalAmount = document.getElementById('cartTotalAmount');

    if (!cartModalBody) return;

    if (cart.length === 0) {
        cartModalBody.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add some items to get started!</p>
            </div>
        `;
        if (cartTotalAmount) cartTotalAmount.textContent = '৳0';
        return;
    }

    const cartItemsHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">৳${item.price}</div>
                <div class="cart-item-controls">
                    <button class="cart-qty-btn" onclick="updateCartItemQuantity(${item.id}, -1)">-</button>
                    <span class="cart-qty">${item.quantity}</span>
                    <button class="cart-qty-btn" onclick="updateCartItemQuantity(${item.id}, 1)">+</button>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    `).join('');

    cartModalBody.innerHTML = `<div class="cart-items">${cartItemsHTML}</div>`;

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotalAmount) cartTotalAmount.textContent = `৳${total}`;
}

function goToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    window.location.href = 'checkout.html';
}

// ===========================
// HERO SLIDESHOW
// ===========================
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slideshow-dot');

    if (!slides.length) return;

    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
    resetSlideInterval();
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
    resetSlideInterval();
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

function initSlideshow() {
    if (document.querySelector('.slideshow-container')) {
        showSlide(currentSlide);
        slideInterval = setInterval(nextSlide, 5000);

        const slideshow = document.querySelector('.hero-slideshow');
        if (slideshow) {
            slideshow.addEventListener('mouseenter', () => clearInterval(slideInterval));
            slideshow.addEventListener('mouseleave', () => resetSlideInterval());
        }
    }
}

// ===========================
// PRODUCT DETAIL PAGE
// ===========================
function changeMainImage(thumbnail) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = thumbnail.src;

        document.querySelectorAll('.product-thumbnail').forEach(thumb => {
            thumb.classList.remove('active');
        });
        thumbnail.classList.add('active');
    }
}

function incrementQty() {
    currentProductQty++;
    const qtyDisplay = document.getElementById('qtyDisplay');
    if (qtyDisplay) qtyDisplay.textContent = currentProductQty;
}

function decrementQty() {
    if (currentProductQty > 1) {
        currentProductQty--;
        const qtyDisplay = document.getElementById('qtyDisplay');
        if (qtyDisplay) qtyDisplay.textContent = currentProductQty;
    }
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('option-btn')) {
        const group = e.target.closest('.option-group');
        if (group) {
            group.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            e.target.classList.add('selected');
        }
    }
});

// ===========================
// PRODUCT RENDERING
// ===========================
function renderProducts(productsToRender) {
    const productGrid = document.getElementById('productGrid');
    const emptyState = document.getElementById('emptyState');

    if (!productGrid) return;

    if (productsToRender.length === 0) {
        productGrid.style.display = 'none';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    productGrid.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';

    productGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                <button class="favorite-btn product-card-favorite ${isFavorite(product.id) ? 'active' : ''}" data-product-id="${product.id}" onclick="toggleFavorite(${product.id})">❤️</button>
                <div class="product-actions">
                    <button class="action-btn" onclick="window.location.href='product-detail.html?id=${product.id}'" title="Quick View">👁️</button>
                    <button class="action-btn" onclick="addToCart(${product.id})" title="Add to Cart">🛒</button>
                    <button class="action-btn ${isFavorite(product.id) ? 'active' : ''}" onclick="toggleFavorite(${product.id})" title="Add to Wishlist">❤️</button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">৳${product.price}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// ===========================
// FILTERING & SORTING
// ===========================
function filterAndSortProducts() {
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');

    let filteredProducts = [...products];

    // Check URL parameters first
    const urlParams = new URLSearchParams(window.location.search);
    const urlCategory = urlParams.get('category');

    if (urlCategory) {
        filteredProducts = filteredProducts.filter(p => p.category === urlCategory);
        if (categoryFilter) categoryFilter.value = urlCategory;
    } else if (categoryFilter) {
        const selectedCategory = categoryFilter.value;
        if (selectedCategory !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
        }
    }

    if (sortFilter) {
        const sortBy = sortFilter.value;
        switch (sortBy) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                break;
        }
    }

    // Reset to page 1 when filtering
    currentPage = 1;

    // Check if pagination container exists (Product.html)
    const paginationContainer = document.getElementById('pagination');
    if (paginationContainer) {
        renderProductsWithPagination(filteredProducts);
    } else {
        renderProducts(filteredProducts);
    }
}


// ===========================
// NAVIGATION
// ===========================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    if (mobileMenuToggle && navbarMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!navbarMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navbarMenu.classList.remove('active');
            }
        });
    }
}

// ===========================
// SCROLL ANIMATIONS
// ===========================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        '.animate-fade-in-up, .animate-fade-in-down, .animate-slide-in-left, .animate-slide-in-right, .animate-scale-in'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===========================
// FORMS
// ===========================
function initForms() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value;
            showNotification(`Thank you for subscribing! We'll send updates to ${email}`);
            newsletterForm.reset();
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.style.display = 'block';
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }

            contactForm.reset();
            if (successMessage) successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
}

// ===========================
// PRODUCT PAGE FILTERS
// ===========================
function initProductFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterAndSortProducts);
    }

    if (sortFilter) {
        sortFilter.addEventListener('change', filterAndSortProducts);
    }

    if (document.getElementById('productGrid')) {
        renderProducts(products);
    }
}

// ===========================
// SMOOTH SCROLL
// ===========================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===========================
// INITIALIZATION
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateFavoritesCount();
    updateUserUI();
    initNavigation();
    initScrollAnimations();
    initForms();
    initProductFilters();
    initSmoothScroll();
    initSlideshow();

    if (window.location.pathname.includes('favorites.html')) {
        renderFavorites();
    }

    // Initialize Product page with pagination
    if (window.location.pathname.includes('Product.html')) {
        // Render all products with pagination on initial load
        renderProductsWithPagination(products);
    }


    const cartIcon = document.getElementById('cartIcon');
    if (cartIcon) {
        cartIcon.addEventListener('click', openCartModal);
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('blur', closeSearchResults);
    }

    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(400px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});
