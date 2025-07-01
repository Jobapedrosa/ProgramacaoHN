function inserirNome () {
    let nomeUsuario = prompt("Qual o seu Nome");
    let elemento = document.querySelector("#nome-usuário");
    elemento.textContent = nomeUsuario;
}
inserirNome();

let linguagens = ["JavaScript", "Python", "C++"];
console.log(linguagens[0]);

const item = document.querySelector("#lista");
item.textContent = linguagens[0];