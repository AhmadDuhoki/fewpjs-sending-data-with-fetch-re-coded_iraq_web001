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


}
