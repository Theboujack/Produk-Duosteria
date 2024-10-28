// Data komposisi produk
const compositions = {
    minuman1: "Air, Gula, teh.",
    snack1: "Wortel, Daun Bawang, Tepung Terigu, Air Mineral, Merica Bubuk, Garam, Telur, Bawang Putih.",
    snack2: "Jagung Manis, Margarin, Kaldu Bubuk, Boncabe, Garam, Lada Bubuk.",
};

// Fungsi untuk menampilkan komposisi
function showComposition(product) {
    const compositionText = document.getElementById("composition-text");
    compositionText.innerText = compositions[product];
    document.getElementById("composition-modal").style.display = "flex";
}

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById("composition-modal").style.display = "none";
}