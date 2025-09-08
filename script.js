// Efek fade-in saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector("section");
  content.style.opacity = "0";
  content.style.transform = "translateY(30px)";
  
  setTimeout(() => {
    content.style.transition = "all 1s ease";
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
  }, 200);
});

// Konfirmasi sebelum kembali ke beranda
const backBtn = document.querySelector(".btn");
if (backBtn) {
  backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const confirmBack = confirm("Apakah Anda yakin ingin kembali ke beranda?");
    if (confirmBack) {
      window.location.href = "index.html";
    }
  });
}

// Navbar berubah warna saat scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("header");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "brown"; // lebih gelap
  } else {
    navbar.style.backgroundColor = "#222"; // default
  }
});
