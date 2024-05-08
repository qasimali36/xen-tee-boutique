document.addEventListener("DOMContentLoaded", function() {
    // JavaScript for product redirection
    const productLinks = document.querySelectorAll('.product-link');

    productLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            const productId = this.dataset.productId;
            const productName = this.querySelector('.product-name').innerText;
            const productImage = this.querySelector('.product-image img').src;
            const productPrice = this.querySelector('.product-price').innerText;
            const productDescription = this.querySelector('.product-description').innerText;

            // Construct the URL with query parameters
            const url = new URL('productpage.html', window.location.origin);
            url.searchParams.set('productId', productId);
            url.searchParams.set('productName', productName);
            url.searchParams.set('productImage', productImage);
            url.searchParams.set('productPrice', productPrice);
            url.searchParams.set('productDescription', productDescription);

            // Redirect to product page with query parameters
            window.location.href = url.href;
        });
    });

    // JavaScript for product page
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('productId');
    const productName = params.get('productName');
    const productImage = params.get('productImage');
    const productPrice = params.get('productPrice');
    const productDescription = params.get('productDescription');

    if (productId && productName && productImage && productPrice && productDescription) {
        // Update product details on product page
        const productImageElem = document.getElementById('product-details-image');
        const productTitleElem = document.getElementById('product-details-title');
        const productPriceElem = document.getElementById('product-details-price');
        const productDescriptionElem = document.getElementById('product-details-description');

        productImageElem.src = productImage;
        productTitleElem.innerText = productName;
        productPriceElem.innerText = productPrice;
        productDescriptionElem.innerText = productDescription;
    }

    // JavaScript for on-hover animations
    const productImages = document.querySelectorAll('.product-image img');

    productImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.5s';
        });

        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.5s';
        });
    });
});
