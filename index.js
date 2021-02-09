// Add your code here

const url = 'http://localhost:3000/users'
function submitData(name, email){

  obj ={name: name, email: email}
  
  let headersAndBody = {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(obj) 
  }
  
  fetch(url, headersAndBody)
  .then(response => response.json())
  .then(data => console.log(data))

}

submitData('mendel','surmendel@gmail.com')