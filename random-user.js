const usersData = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => {
      userDetail(data.results);
      //   console.log(data.results);
    });
};

const userDetail = (users) => {
  console.log(users);
  const divContainer = document.getElementById("user-container");
  for (const user of users) {
    console.log(user);
    const addData = document.createElement("div");
    addData.classList.add("user");
    addData.innerHTML = `
      <h2>Name: ${user.name.first} </h2>
      <h4>email${user.email} : </h4>
      <h5>Info: ${user.location.city} </h5>
      `;
    divContainer.appendChild(addData);
  }
};

usersData();
