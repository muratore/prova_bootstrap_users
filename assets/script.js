const tbody = document.querySelector("tbody");
const select = document.querySelector("select");
const cityOptions = document.querySelector('#city')
// Get users

const getAllUsers = async () => {
  tbody.innerHTML = "";
  select.innerHTML = "";
  cityOptions.innerHTML= "";
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  fillTable(data);
  createSelection(data);
  createOptionByCity(data)
};
getAllUsers();

const createSelection = (users) => {
  select.insertAdjacentHTML(
    "beforeend",
    ` <option value="null">Filtre pelo id</option>`
  );
  users.map((user) => {
    select.insertAdjacentHTML(
      "beforeend",
      `<option value="${user.id}">${user.id}</option>`
    );
  });
};

const createOptionByCity = (users) =>{
    cityOptions.insertAdjacentHTML('beforeend', `<option value="null">Filtre pela Cidade</option>`)
    users.map((user)=>{
        cityOptions.insertAdjacentHTML('beforeend', `<option value="${user.address.city}">${user.address.city}</option>`)
    })

}
const filterById = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/?id=${id}`
  );
  const data = await response.json();
  fillTable(data);
};

const filterByCity = async (city)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/?address.city=${city}`)
    const data = await response.json();
    fillTable(data);
}

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
        <td>${user.company.name}</td>`
    );
  });
};

const handleFilter = () => {
  tbody.innerHTML = "";
  cityOptions.value=null
  const id = document.querySelector("select").value;
  filterById(id);
};

const filterCity=()=>{
    tbody.innerHTML = "";
    select.value= null;
    const city = document.getElementById('city').value
    filterByCity(city)
}
