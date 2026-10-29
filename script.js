// Ano automático no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const aberto = navLinks.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(aberto));
  toggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
  });
});

// Validação e envio do formulário
// Por enquanto mostra apenas uma confirmação. Para receber os contatos de verdade,
// troque o bloco "simulação" por um envio real (ex.: Formspree, endpoint próprio ou WhatsApp).
const form = document.getElementById("contact-form");
const status = form.querySelector(".form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let valido = true;

  form.querySelectorAll("[required]").forEach((campo) => {
    const vazio = !campo.value.trim();
    const emailInvalido = campo.type === "email" && campo.value && !/^\S+@\S+\.\S+$/.test(campo.value);
    campo.classList.toggle("invalid", vazio || emailInvalido);
    if (vazio || emailInvalido) valido = false;
  });

  if (!valido) {
    status.className = "form-status err";
    status.textContent = "Preencha os campos obrigatórios com dados válidos.";
    return;
  }

  // simulação de envio
  status.className = "form-status ok";
  status.textContent = "Mensagem recebida! Retornaremos em breve.";
  form.reset();
});
