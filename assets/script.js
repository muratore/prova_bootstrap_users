const tbody = document.querySelector("tbody");
const select = document.querySelector("select");
// Get users

const getAllUsers = async () => {
  tbody.innerHTML = "";
  select.innerHTML = "";
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  fillTable(data);
  createSelection(data);
};
getAllUsers();

const createSelection = (users) => {
  select.insertAdjacentHTML(
    "beforeend",
    ` <option value="null">Escolha um id</option>`
  );
  users.map((user) => {
    select.insertAdjacentHTML(
      "beforeend",
      `<option value="${user.id}">${user.id}</option>`
    );
  });
};

const filterById = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/?id=${id}`
  );
  const data = await response.json();
  console.log(data);
  fillTable(data);
};

const fillTable = (users) => {
  users.map((user) => {
    tbody.insertAdjacentHTML(
      "beforeend",
      `<td scope="col">${user.id}</td>
        <td>${user.name} </td>
        <td>${user.email} </td>
        <td>${user.address.street}  ${user.address.suite}</td>
        <td>${user.address.city}</td>
        <td>${user.phone}</td>
        <td>${user.company.name}</td>      `
    );
  });
};

const handleFilter = () => {
  tbody.innerHTML = "";
  const id = document.querySelector("select").value;
  filterById(id);
};
