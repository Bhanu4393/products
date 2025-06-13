const products = [
    {
        name: "Lipstick",
        price: 399,
        image: "https://via.placeholder.com/150/FF69B4/FFFFFF?text=Lipstick"
    },
    {
        name: "Foundation",
        price: 699,
        image: "https://via.placeholder.com/150/FFD700/000000?text=Foundation"
    },
    {
        name: "Eyeliner",
        price: 299,
        image: "https://via.placeholder.com/150/000000/FFFFFF?text=Eyeliner"
    }
];

const container = document.getElementById("products");
products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = \`
        <img src="\${product.image}" alt="\${product.name}" />
        <h3>\${product.name}</h3>
        <p>Price: ₹\${product.price}</p>
    \`;
    container.appendChild(div);
});