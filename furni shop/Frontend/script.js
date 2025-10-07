 // script.js

// Welcome message when the page loads
window.addEventListener('DOMContentLoaded', () => {
  console.log('Welcome to FurniShop!');
});
 

// Add click event to "Shop Now" button
const shopBtn = document.querySelector('.btn');
if (shopBtn) {
  shopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Redirecting to our product collection...');
    // You can add actual redirection logic here
  });
}

// Example: Highlight product cards on hover
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});

// Optional: Filter products by price (basic demo)
function filterProducts(maxPrice) {
  productCards.forEach(card => {
    const priceText = card.querySelector('p').textContent;
    const price = parseFloat(priceText.replace('$', ''));
    card.style.display = price <= maxPrice ? 'block' : 'none';
  });
}

// Example usage: filterProducts(300); // Show products $300 or less
