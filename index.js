const body = document.querySelector('body')[0];
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;

function submitData(usersName, usersEmail){
  let formData = {
    name: usersName,
    email: usersEmail
};
 
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
  fetch("http://localhost:3000/dogs", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });

}
