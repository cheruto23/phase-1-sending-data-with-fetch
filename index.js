// Add your code here
function submitData(name, email) {
  const data = {
    name: name,
    email: email
  };

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  };
  const BASEURL = "http://localhost:3000/users"

  return fetch(BASEURL, config)
    .then(response => response.json())
    .then(data => {
      const id = data.id;
      document.body.innerHTML += `<p>id: ${id}</p>`;
    })
    .catch(error => {
      document.body.innerHTML += `<p>Error: ${error.message}</p>`;
    });
}

submitData('Steve','steve@gmail.com');





  


  
