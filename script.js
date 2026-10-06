const botao = document.getElementById("botao-tema");
const body = document.body;

botao.addEventListener("click", function () {

    body.classList.toggle("tema-escuro");

    if (body.classList.contains("tema-escuro")) {
        botao.textContent = "☀️";
    } else {
        botao.textContent = "🌙";
    }

});