let popUpBox = document.getElementById("popUpBox");
let popUpOverlay = document.getElementById("popUpOverlay");

function openModal() {
    popUpBox.style.display = "block";
    document.getElementById("closeModal").innerHTML =
        '<button onclick="closeModal()">OK</button>';
}

function closeModal() {
    popUpBox.style.display = "none";
    popUpOverlay.style.display = "none";
}
