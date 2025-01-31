const productContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products.map((data) => {
    console.log(data);
    markup += `<div class="item">
                <h5>50%</h5>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="bluse">
                <h2>${data.productdisplayname}</h2>
                <h3>${data.brandname}</h3>
                <h4>${data.price}</h4>
                <a href="product.html"> Read more</a>
            </div>`.join("");
    listContainer.innerHTML = markup;
  });
}
