const products = [
  { id: 1, name: "Laptop", price: 1000, description: "High-end laptop", category: "Electronics", image: "laptop.jpg" },
  { id: 2, name: "Headphones", price: 200, description: "Noise-canceling headphones", category: "Electronics", image: "headphones.jpg" },
  { id: 3, name: "T-Shirt", price: 20, description: "Comfortable cotton t-shirt", category: "Clothing", image: "tshirt.jpg" },
  { id: 4, name: "Book", price: 15, description: "Fiction novel", category: "Books", image: "book.jpg" },
  { id: 5, name: "Watch", price: 150, description: "Luxury wristwatch", category: "Accessories", image: "watch.jpg" }
];

function displayProducts() {
  const productContainer = document.getElementById("products");
  productContainer.innerHTML = "";
  products.forEach(product => {
      const div = document.createElement("div");
      div.innerHTML = `
          <img src="${product.image}" alt="${product.name}" width="100">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>$${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productContainer.appendChild(div);
  });
}

displayProducts();

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function goToCart() {
  window.location.href = "cart.html";
}

function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const tbody = document.querySelector("#cartTable tbody");
  tbody.innerHTML = "";
  cart.forEach((item, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td><img src="${item.image}" width="50"></td>
          <td>${item.name}</td>
          <td>$${item.price}</td>
          <td>${item.category}</td>
          <td><button onclick="removeFromCart(${index})">Remove</button></td>
      `;
      tbody.appendChild(tr);
  });
  calculateTotal();
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function calculateTotal() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("totalPrice").innerText = `Total: $${total}`;
}

function purchase() {
  localStorage.removeItem("cart");
  alert("Thank you for your purchase!");
  displayCart();
}

function backToProducts() {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.title.includes("Cart")) {
      displayCart();
  }
});