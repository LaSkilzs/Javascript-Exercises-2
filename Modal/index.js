
// Create a new function
let Alert = new CustomAlert();


// create functions for function 
function CustomAlert(){

  // function to show modal
  this.open = function(){
    let popUpBox = document.getElementById('popUpBox');
    popUpBox.style.display = "block";
    document.getElementById('closeModal').innerHTML = '<button onclick="Alert.close()">OK</button>';
  }
  
  // function to close modal
  this.close = function(){
    document.getElementById('popUpBox').style.display = "none";
    document.getElementById('popUpOverlay').style.display = "none";
  }
}