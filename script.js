const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            
        }
    }
    return stringEncriptada;
}

function btnDescriptar(){
    const textoEncriptado = descriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function descriptar(stringDescriptar){
    let matrizCodigo = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]];
    stringDescriptar = stringDescriptar.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDescriptar.includes(matrizCodigo[i][1])){
            stringDescriptar = stringDescriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptar;
}

function btnCopiar(){
    let textArea.value = document.getElementById("mensagem");
    textArea.value.select();
    textArea.value.setSelectionRange(0, 9999);

    document.oncopy("copy");
    alert("O texto copiado foi: "${textArea.value}");

    // textArea.value = mensagem.value;
    // mensagem.value = "";
}

