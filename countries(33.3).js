const countryOfWorld = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => countryData(data));
};

const countryData = (countries) => {
  console.log(countries);
  const countryContainer = document.getElementById("box-container");

  countries.forEach((country) => {
    const createDiv = document.createElement("div");
    createDiv.classList.add("country-container");
    createDiv.innerHTML = `
      <h2>Name: ${country.name.common} </h2>
      <p>Capital city: ${
        country.capital ? country.capital[0] : "No capital for this"
      } </p>
      <button onclick = "countryCode('${country.cca3}')">Show Detail</button>
      `;
    countryContainer.appendChild(createDiv);
  });
};

const countryCode = (code) => {
  fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then((res) => res.json())
    .then((data) => detailiNFO(data[0]));
};

const detailiNFO = (country) => {
  console.log(country);
  const detailField = document.getElementById("detail-info");
  detailField.innerHTML = `
   <img src='${country.flags?.png}'>
   <h2>Name: ${country.name?.common} </h2>
   <p>Capital city: ${
     country.capital ? country.capital[0] : "No capital for this"
   } </p>
   `;
};

countryOfWorld();
