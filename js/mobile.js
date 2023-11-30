const close = document.querySelector(".close");
const menuLista = document.querySelector(".menu__lista");
const card = document.querySelector(".card__carrinho");
const imgCart = document.querySelector(".img__cart");
const btnMenos = document.querySelector(".btn__menos");
const btnMais = document.querySelector(".btn__mais");
const form = document.querySelector(".main__enviar");

let quantidadeInput = document.querySelector(".btn__quantidade");
let spanQuantidade = document.querySelector(".quantidade");

let numero = 0;
let cardOpen = false;
let carrinho = [];
function fechaMenu() {
    close.addEventListener("click", () => {
        menuLista.style.display = "none";
    });
}

function abreMenu() {
    checkbox.addEventListener("click", () => {
        menuLista.style.display = "block";
    });
}

function abreCard() {
    imgCart.addEventListener("click", () => {
        if (cardOpen === false) {
            card.style.display = "block";
            spanQuantidade.style.display = "block";
            cardOpen = true;
        } else {
            card.style.display = "none";
            spanQuantidade.style.display = "none";
            cardOpen = false;
        }
    });
}

//Resolvendo os botões de adicionar e retirar a quantidade de itens que a pessoa quer comprar

btnMenos.addEventListener("click", btnSubtrair);
function btnSubtrair() {
    if (numero <= 0) {
        numero = 0;
        quantidadeInput.value = numero;
    } else {
        quantidadeInput.value = numero - 1;
    }

    numero = parseInt(quantidadeInput.value);
}

btnMais.addEventListener("click", adicionar);
function adicionar() {
    quantidadeInput.value = numero + 1;
    numero = parseInt(quantidadeInput.value);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    adicionarAoCarrinho();
});

function adicionarAoCarrinho() {
    let numeroItens = parseInt(quantidadeInput.value);

    if (!isNaN(numeroItens) && numeroItens >= 0) {
        carrinho.push(numeroItens);
        exibirCarrinho();
    }
}

function exibirCarrinho() {
    spanQuantidade.innerHTML = carrinho[carrinho.length - 1];
}

abreCard();
abreMenu();
fechaMenu();
