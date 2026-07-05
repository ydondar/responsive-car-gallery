let inputFirstName = document.getElementById("inputFirstName");
let inputLastName = document.getElementById("inputLastName");
let email = document.getElementById("email");
let sendButton = document.getElementById("sendButton");
let messageText = document.getElementById("messageText"); 
let messageBox = document.getElementById("message");

sendButton.addEventListener("click", () => {

   if (
    inputFirstName.value.trim() === "" &&
    inputLastName.value.trim() === "" &&
    email.value.trim() === "" &&
    messageText.value.trim() === ""
  ) {
    alert("Please fill in all fields");
    return;
  }

  if(inputFirstName.value.trim() === "") {
    alert("Enter first name");
    return;
  }

  if (!email.value.includes("@")) {
  alert("Please enter a valid email");
  return;
}
  if(inputLastName.value.trim() === "") {
    alert("Enter last name");
    return;
  }

  if(email.value.trim() === "") {
    alert("Enter email");
    return;
  }
  
  if(messageText.value.trim() === "") {
    alert("Enter a message");
    return;
  }

  messageBox.innerText = "Message Sent";
  messageBox.style.color = "white";
  messageBox.style.display = "block";
});