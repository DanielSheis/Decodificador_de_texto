let respostaDecodificada = document.querySelector(".mensagem-decodificada");
let mensagemParaDecodificar = document.querySelector(".input-mensagem");
let conteinerSemMensagem = document.querySelector(".informacao-sem-mensagem");
let conteinerMensagemInformada = document.querySelector(".conteiner-mensagem-informada");

function criptografarMensagem() {
    respostaDecodificada.innerHTML = "";
    let mensagemParaDecodificarValue = document.querySelector(".input-mensagem").value;
    
    respostaDecodificada.value = mensagemParaDecodificarValue
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mensagemParaDecodificar.value = "";

    conteinerSemMensagem.style.display = "none";
    conteinerMensagemInformada.style.display = "flex";
}

function descriptografarMensagem() {
    respostaDecodificada.innerHTML = "";
    let mensagemParaDecodificarValue = document.querySelector(".input-mensagem").value;
    
    respostaDecodificada.value = mensagemParaDecodificarValue
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mensagemParaDecodificar.value = "";

    conteinerSemMensagem.style.display = "none";
    conteinerMensagemInformada.style.display = "flex";
}

// Função criada para copiar o resultado
function copiar() {
    document.querySelector(".mensagem-decodificada").select();
    document.execCommand("copy");
    
    respostaDecodificada.value = "";
}