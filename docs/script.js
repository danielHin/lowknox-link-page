const imprintModal = document.getElementById('imprintModal');
const link = document.getElementById('imprint');

link.onclick = function () {
    imprintModal.style.display = "flex";
}

window.onclick = function (event) {
    if (event.target == imprintModal) {
        imprintModal.style.display = "none";
    }
}
