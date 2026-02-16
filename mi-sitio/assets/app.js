// Menú mobile + link activo
(function () {
  const btn = document.querySelector("[data-menu-btn]");
  const nav = document.querySelector("[data-nav]");
  if (btn && nav) {
    btn.addEventListener("click", () => nav.classList.toggle("open"));
  }

  // Marcar link activo según la página
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav] a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  // Form demo: muestra mensaje (sin backend)
  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const box = document.querySelector("[data-form-msg]");
      if (box) {
        box.textContent = "✅ Recibido. (Demo) Conectá esto a Formspree / Google Forms para que se envíe de verdad.";
        box.classList.add("notice");
      }
      form.reset();
    });
  }
})();