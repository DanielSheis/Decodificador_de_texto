let respostaDecodificada = document.querySelector(".mensagem-decodificada");
let mensagemParaDecodificar = document.querySelector(".input-mensagem");
let conteinerSemMensagem = document.querySelector(".informacao-sem-mensagem");
let conteinerMensagemInformada = document.querySelector(".conteiner-mensagem-informada");

let arrayPalavrasChave = [["enter"], ["imes"], ["ai"], ["ober"], ["ufat"]];

function criptografarMensagem() {
    respostaDecodificada.innerHTML = "";
    let mensagemParaDecodificarValue = document.querySelector(".input-mensagem").value;
    
    for ( let i = 0; i < mensagemParaDecodificarValue.length; i++) { // casa
        if (mensagemParaDecodificarValue[i] == "a") {
            respostaDecodificada.innerHTML += "ai";
            continue;
        }
        else if (mensagemParaDecodificarValue[i] == "e") {
            respostaDecodificada.innerHTML += "enter";
            continue;
        }
        else if (mensagemParaDecodificarValue[i] == "i") {
            respostaDecodificada.innerHTML += "imes";
            continue;
        }
        else if (mensagemParaDecodificarValue[i] == "o") {
            respostaDecodificada.innerHTML += "ober";
            continue;
        }
        else if (mensagemParaDecodificarValue[i] == "u") {
            respostaDecodificada.innerHTML += "ufat";
            continue;
        }
        
        respostaDecodificada.innerHTML += mensagemParaDecodificarValue[i]; //c
    }

    mensagemParaDecodificar.value = "";

    conteinerSemMensagem.style.display = "none";
    conteinerMensagemInformada.style.display = "flex";
}

function descriptografarMensagem() {
    respostaDecodificada.innerHTML = "";
    let mensagemParaDecodificarValue = document.querySelector(".input-mensagem").value;
    
    for ( let i = 0; i < mensagemParaDecodificarValue.length; i++) { // casa
        if (mensagemParaDecodificarValue[i] == "a") {
            respostaDecodificada.innerHTML += "a";
            i += arrayPalavrasChave[2].length;
            continue;
        }
        else if (mensagemParaDecodificarValue[i] == "e") {
            respostaDecodificada.innerHTML += "e";
            i += arrayPalavrasChave[0].length + 3;
            continue;
        }
        else if (mensagemParaDecodificarValue[i] == "i") {
            respostaDecodificada.innerHTML += "i";
            i += arrayPalavrasChave[1].length + 2;
            continue;
        }
        else if (mensagemParaDecodificarValue[i] == "o") {
            respostaDecodificada.innerHTML += "o";
            i += arrayPalavrasChave[3].length + 2;
            continue;
        }
        else if (mensagemParaDecodificarValue[i] == "u") {
            respostaDecodificada.innerHTML += "u";
            i += arrayPalavrasChave[4].length + 2;
            continue;
        }
        
        respostaDecodificada.innerHTML += mensagemParaDecodificarValue[i]; //c
    }

    mensagemParaDecodificar.value = "";

    conteinerSemMensagem.style.display = "none";
    conteinerMensagemInformada.style.display = "flex";
}

function verificaPalavras(mensagemParaDecodificarValue, index) {
    for (let i = 0; i < arrayPalavrasChave[2].length; i++) {
        if (mensagemParaDecodificarValue[index + i] != arrayPalavrasChave[2][i]) {
            return 1;
        }
    }

    return 0;
}

function copiar() {
    document.querySelector(".mensagem-decodificada").select();
    document.execCommand("copy");
    let texto = document.querySelector(".mensagem-decodificada").value;
    awaitnavigator.clipboard.writeText(texto);
    
    respostaDecodificada.value = "";
}