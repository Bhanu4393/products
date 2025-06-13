// --- PRODUCT SECTION ---
const product = {
    name: "Essence Mascara Lash Princess",
    description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    brand: "Essence",
    category: "beauty",
    price: 9.99,
    discount: 10.48,
    stock: 99,
    rating: 2.56,
    sku: "BEA-ESS-ESS-001",
    weight: "4g",
    dimensions: "15.14 × 13.08 × 22.99 cm",
    warranty: "1 week warranty",
    shipping: "Ships in 3-5 business days",
    availability: "In Stock",
    returnPolicy: "No return policy",
    minOrder: 48,
    createdAt: "2025-04-30T09:41:02.053Z",
    updatedAt: "2025-04-30T09:41:02.053Z",
    barcode: "5784719087687",
    images: [
        "https://i.imgur.com/XTd7gRx.png",
        "https://i.imgur.com/XTd7gRx.png",
        "https://i.imgur.com/XTd7gRx.png"
    ]
};

document.getElementById("product-name").textContent = product.name;
document.getElementById("description").textContent = product.description;
document.getElementById("brand").textContent = product.brand;
document.getElementById("category").textContent = product.category;
document.getElementById("price").textContent = product.price;
document.getElementById("discount").textContent = product.discount;
document.getElementById("stock").textContent = product.stock;
document.getElementById("rating").textContent = product.rating;
document.getElementById("sku").textContent = product.sku;
document.getElementById("weight").textContent = product.weight;
document.getElementById("dimensions").textContent = product.dimensions;
document.getElementById("warranty").textContent = product.warranty;
document.getElementById("shipping").textContent = product.shipping;
document.getElementById("availability").textContent = product.availability;
document.getElementById("returnPolicy").textContent = product.returnPolicy;
document.getElementById("minOrder").textContent = product.minOrder;
document.getElementById("createdAt").textContent = product.createdAt;
document.getElementById("updatedAt").textContent = product.updatedAt;
document.getElementById("barcodeVal").textContent = product.barcode;

const imageContainer = document.getElementById("product-images");
product.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    imageContainer.appendChild(img);
});

QRCode.toCanvas(document.getElementById("qrcode"), product.barcode, function (error) {
    if (error) console.error(error);
});

// --- USER SECTION ---
fetch("https://fakestoreapi.in/api/users")
    .then(res => res.json())
    .then(data => {
        const users = data.users;
        const userList = document.getElementById("user-list");

        users.forEach(user => {
            const card = document.createElement("div");
            card.className = "user-card";
            card.innerHTML = `
                <h3>${user.name.firstname} ${user.name.lastname}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
                <p><strong>Street:</strong> ${user.address.street}, #${user.address.number}</p>
                <p><strong>Zipcode:</strong> ${user.address.zipcode}</p>
            `;
            userList.appendChild(card);
        });
    })
    .catch(err => {
        console.error("Failed to fetch users:", err);
        document.getElementById("user-list").textContent = "Failed to load user data.";
    });
