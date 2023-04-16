
// Get users

const getAllUsers = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    console.log(data);
    fillTable(data)
}
getAllUsers()

const fillTable = (users)=>{
    const tbody = document.querySelector('tbody')
       
    users.map((user)=>{
        tbody.insertAdjacentHTML('beforeend', 
        `<td scope="col">${user.id}</td>
        <td>${user.name} </td>
        <td>${user.email} </td>
        <td>${user.address.street}  ${user.address.suite}</td>
        <td>${user.address.city}</td>
        <td>${user.phone}</td>
        <td>${user.company.name}</td>
        `      
        )
    })
}