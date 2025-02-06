const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

let productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(data) {
  productContainer.innerHTML = `
            <div class="item">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="bluse">
            </div>
            <div class="product_inforation">
                <h2>PRODUCT INFORMATION</h2>
                <h3>Price:</h3>
                <p>${data.price} ,- </p>
                <h3>Coler:</h3>
                <p>${data.colour1}</p>
                <h3>Inventory nummber:</h3>
                <p>${data.id}</p>
            </div>
            <div>
                <div class="rød">
                    <h2>${data.productdisplayname}</h2>
                    <h3> Brand name - ${data.brandname}</h3>
                </div>
                <div class="basket">
                    <h4>ADD TO BASKET</h4>
                </div>
            </div>  
    `;
}
