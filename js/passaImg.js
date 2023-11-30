const seta = document.querySelectorAll(".seta");
const imgCapa = document.querySelector(".img__produto");
const imgMenor = document.querySelectorAll(".img__menores");

const listaSrc = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
];

imgMenor.forEach((img) => {
    img.addEventListener("click", () => {
        const idImagem = img.id;
        if (idImagem === "0") {
            imgCapa.setAttribute("src", listaSrc[0]);
        }
        if (idImagem === "1") {
            imgCapa.setAttribute("src", listaSrc[1]);
        }
        if (idImagem === "2") {
            imgCapa.setAttribute("src", listaSrc[2]);
        }
        if (idImagem === "3") {
            imgCapa.setAttribute("src", listaSrc[3]);
        }
    });
});

// passando imgem principal
let imagemAtual = 0;
const totalImagens = document.querySelectorAll(".img__produto").length;

function mudarImagem(direcao) {
    imagemAtual += direcao;

    if (imagemAtual < 0) {
        imagemAtual = totalImagens - 1;
    } else if (imagemAtual >= totalImagens) {
        imagemAtual = 0;
    }

    exibirImagemAtual();
}

function exibirImagemAtual() {
    const imagens = document.querySelectorAll(".img__produto");

    imagens.forEach((imagem, index) => {
        if (index === imagemAtual) {
            imagem.style.display = "block";
        } else {
            imagem.style.display = "none";
        }
    });
}

// Exibir a primeira imagem inicialmente
exibirImagemAtual();
