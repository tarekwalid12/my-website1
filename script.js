function showPage(page) {
    document.getElementById('shop').classList.add('hidden');
    document.getElementById('design').classList.add('hidden');

    if (page === 'shop') {
        document.getElementById('shop').classList.remove('hidden');
    } else if (page === 'design') {
        document.getElementById('design').classList.remove('hidden');
    }
}

function showCategory(category) {
    const productsDiv = document.getElementById('products');
    productsDiv.classList.remove('hidden');
    productsDiv.innerHTML = ''; // Clear existing products

    let products = [];
    if (category === 'men' || category === 'women') {
        products = ['T-shirt', 'Tank Tops', 'Long-sleeved Shirts', 'Hoodies and Sweatshirts'];
    } else if (category === 'kids') {
        products = ['T-shirt', 'Long-sleeved Shirts', 'Hoodies and Sweatshirts', 'Baby One Pieces'];
    }

    products.forEach(product => {
        const btn = document.createElement('button');
        btn.innerText = product;
        btn.onclick = () => alert('Product selected: ' + product);
        productsDiv.appendChild(btn);
    });
}

function startDesign(product) {
    alert('Starting design for: ' + product);
}
