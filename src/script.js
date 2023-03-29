const imprintModal = document.getElementById('imprintModal');

var link = document.getElementById('imprint');
var span = document.getElementsByClassName('close')[0];

link.onclick = function () {
    imprintModal.style.display = "flex";
}

window.onclick = function (event) {
    if (event.target == imprintModal) {
        imprintModal.style.display = "none";
    }
}