const urlParams = new URLSearchParams(window.location.search);
const mycategory = urlParams.get("category") || "shoes";

const listContainer = document.querySelector(".product_list_container");
const overskrift = document.querySelector("h1");
overskrift.innerHTML = mycategory;

fetch(`https://kea-alt-del.dk/t7/api/products?limit=80&category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products.map((data) => {
    console.log(data);
    markup += `<div class="item" >
                <div class="sold_out ${!data.soldout ? "hide" : ""}">SOLD OUT</div>
               <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="bluse">
                <h2>${data.productdisplayname}</h2>
                <h3> BRAND NAME: ${data.brandname}</h3>
                 <div class="price">
                    <h4 class="${data.discount && "foer_pris"}" >${data.price} ,-</h4>
                    <h4 class= " ${!data.discount && "hide"}">${Math.round(data.price * (1 - data.discount / 100))} ,-  </h4>
                </div>
                <a href="product.html?id=${data.id}">Read more</a>
            </div>`;
    listContainer.innerHTML = markup;
  });
}
