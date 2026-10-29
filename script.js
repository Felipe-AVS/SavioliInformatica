// Ano automático no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");

function fecharMenu() {
  menu.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Abrir menu");
}

toggle.addEventListener("click", () => {
  const aberto = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(aberto));
  toggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", fecharMenu));

// Formulário
// Hoje apenas valida e mostra a confirmação. Para receber os contatos por e-mail,
// conecte o envio a um serviço (ex.: Formspree) ou direcione para o WhatsApp.
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

  status.className = "form-status ok";
  status.textContent = "Mensagem recebida! Retornaremos em breve.";
  form.reset();
});
