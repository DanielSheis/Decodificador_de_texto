let modoEscuro = document.querySelector(".lua-icon");
let modoClaro = document.querySelector(".sol-icon");

let botaoDescriptografar = document.querySelector(".botao-Descriptografar");
let copiarMensagem = document.querySelector(".copiar-mensagem");

// Variaveis CSS
let root = document.documentElement;

let qualModoEsta = "claro"; //Cor padrão da pagina

function mudarModoDaPagina() {
    if (qualModoEsta == "claro") {
        modoClaro.style.display = "block";
        modoEscuro.style.display = "none";
        qualModoEsta = "escuro";

        root.style.setProperty('--cor-primaria', '#1A3636');
        root.style.setProperty('--cor-secundaria', '#677D6A');
        root.style.setProperty('--cor-terciaria', '#D6BD98');
        root.style.setProperty('--cor-footer', '#D6BD98');
        root.style.setProperty('--cor-hover-botao-descriptografar', '#40534C');

        botaoDescriptografar.style.color = "#1A3636";
        copiarMensagem.style.color = "#1A3636";
    }
    else {
        modoClaro.style.display = "none";
        modoEscuro.style.display = "block";
        qualModoEsta = "claro";
        
        root.style.setProperty('--cor-primaria', '#E7F0DC');
        root.style.setProperty('--cor-secundaria', '#729762');
        root.style.setProperty('--cor-terciaria', '#597445');
        root.style.setProperty('--cor-footer', '#99a88e');
        root.style.setProperty('--cor-hover-botao-descriptografar', '#c0c0c0f1');

        botaoDescriptografar.style.color = "#597445";
        copiarMensagem.style.color = "#597445";
    }
}