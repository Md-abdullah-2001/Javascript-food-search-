// step-01: Get the API and make promise and then transfer it to json

const foodData = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data.meals));
};

// step-02: Get the transfered data from above fetch  and call the html parent field where you wanna create card and create all the template string and append them as child , then show them by defining dynamic variables

const displayData = (meals) => {
  console.log(meals);
  const getContainer = document.getElementById("Food-container");
  getContainer.innerHTML = "";
  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
    <div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
    </div>
</div>
    
    `;
    getContainer.appendChild(mealDiv);
  });
};

// step-03: Call the html button to show the result when you search something in input field and call input value , put this value into the first API function and clear when another data wanna show
const searchBtn = () => {
  const inputField = document.getElementById("input-field");
  const inputValue = inputField.value;
  // console.log("searched", inputValue);
  foodData(inputValue);
};

foodData("");
