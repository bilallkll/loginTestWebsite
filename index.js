



function createPassword() 
{  
  //create new password
  const newPassword = document.getElementById("password").value;
  if(newPassword == "") {  
    alert("fill password");
    return;
  }
  if(newPassword.length < 5) {  
   alert("Password length must be atleast 8 characters");  
    return;  
 }  

 
  alert(`Your new password is ${newPassword}`);
  //store it
  localStorage.setItem("password", newPassword);
  console.log(localStorage);
  location.reload();
}

function login() 
{
  //get the password
  let paswword = localStorage.getItem("password")
  //get what is typed in the input field
  const inputPassword = document.getElementById("password").value;
  //test password
  if (inputPassword === paswword) 
  {
    putherewhateveryouwant();
  } else 
  {
    alert("Incorrect password. Please try again.");
    inputPassword = ('');
  }
}

function putherewhateveryouwant()
{
  /*alert("Login successful!");*/
  document.getElementById("trees").classList.add("treeup");
  document.getElementById("trees").classList.remove("trees");
  document.getElementById("squarre").classList.add("squarup");
  document.getElementById("squarre").classList.remove("square");
  setTimeout(nextpage, 3000);
}

function nextpage(){
 window.location.href = "../html/mainMenu.html"
}




