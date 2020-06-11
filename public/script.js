async function displayResult() {
  const budget = document.querySelector("#budget").value;
  const data = await fetch(`/api/restaurants/${budget}`);
  const datajson = await data.json();

  const restaurants_info = datajson.restaurants_info;

  const searchResult = document.querySelector(".search_result");
  searchResult.innerHTML = "";
  const numberOfContents = document.querySelector(".numberOfContents");
  numberOfContents.textContent =
    "検索結果 : 全" + restaurants_info.length + "件";

  for (let restaurant of restaurants_info) {
    const div = document.createElement("div");
    div.classList.add("container");
    div.innerHTML = `
    <span class="img">
    <img src='${restaurant.image_url}'>
    </span>
    <span class="info">
    <p class="name">${restaurant.restaurant_name}</p>
    <p class="category">${restaurant.category}</p>
    <p class="budget">予算 : ${restaurant.budget}円</p>
    </span>
    `;

    searchResult.append(div);
  }
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", displayResult);
