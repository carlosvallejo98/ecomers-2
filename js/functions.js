const button = document.querySelector("button.buy");
console.log(button);


const elemButton = button;
    elemButton.addEventListener("click" , () =>{
      elemButton.classList.toggle("toggle")
});





const header = document.querySelector("header");
console.log(header);

const cartIcon = header.lastElementChild;
console.log(cartIcon);


const cart = document.querySelector(".cart__diseño");
console.log(cart);

cartIcon.addEventListener("click", () =>{
    cart.classList.toggle("sow")
});

// Esta es la funcion para controlar el menu , cerrarlo y abrirlo 

const menuIcon = header.firstElementChild;
console.log(menuIcon);

const cartMenu = document.querySelector("section.menu");
console.log(cartMenu);

const closeM = document.querySelector("div.container");
console.log(closeM);

const closeItem = closeM.firstElementChild;
console.log(closeItem);

closeItem.addEventListener("click", () =>{
    cartMenu.classList.toggle("close")
});

menuIcon.addEventListener("click" , () =>{
    cartMenu.classList.toggle( "show")
    
});


//Agregar prodcutos al carrito 

let allProducts = [];

const productsL = document.querySelector("section.products__diseño");
console.log(productsL)


productsL.addEventListener("click", e => {
    if (e.target.classList.contains("add")) {
        const products = e.target.parentElement;

        const infoProducts = {
            imagen: products.querySelector("img"),
            cantidad: 1,
            titulo: products.querySelector("h3").textContent,
            precio: products.querySelector("p").textContent,
        };

        // Verificar si el producto ya está en el carrito
        const exists = allProducts.some(product => product.titulo === infoProducts.titulo);
        if (exists) {
            // Incrementar cantidad si el producto ya existe
            allProducts = allProducts.map(product => {
                if (product.titulo === infoProducts.titulo) {
                    product.cantidad++;
                }
                return product;
            });
        } else {
            // Si no existe, agregarlo al carrito
            allProducts = [...allProducts, infoProducts];
        }

        // Actualizar el contenido del carrito en el HTML
        displayCartItems();
    }
});




const cartContainer = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");

function displayCartItems() {
    // Limpiar el contenido del carrito antes de añadir los elementos actualizados
    cartContainer.innerHTML = '';

    let total = 0;

    // Recorrer todos los productos en el array 'allProducts'
    allProducts.forEach(product => {
        // Crear un nuevo div para cada producto en el carrito
        const productElement = document.createElement('div');
        productElement.classList.add('cart-item');

        // Sumar el precio al total (asegurarse de convertir el precio a número)
        const priceNumber = parseFloat(product.precio.replace(/[^0-9.-]+/g, ""));
        total += priceNumber * product.cantidad;

        // Insertar los detalles del producto en el nuevo div
        productElement.innerHTML = `
            <img class="cart_img"src="${product.imagen.src}"  alt="${product.titulo}">
            <p class="texto">Cantidad: ${product.cantidad}</p>
            <p class="texto">Precio: ${product.precio}</p>
            <span class="remove-btn" onclick="removeFromCart(${".cart__diseño"})"><img class="remove" src="img/basurero.svg" alt=""></span>
        `;

        // Añadir el producto al contenedor del carrito
        cartContainer.appendChild(productElement);
    });

    // Mostrar el total en el carrito
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}


