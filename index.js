const listContainer = document.querySelector(".categories_grid");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then((data) => showCategoryList(data));

function showCategoryList(data) {
  console.log(data);
  const markup = data
    .map(
      (category) => `            
            <a href="productlist.html?category=${category.category}">${category.category}</a>`
    )
    .join("");

  console.log(markup);
  listContainer.innerHTML = markup;
}
