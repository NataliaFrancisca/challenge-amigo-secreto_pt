let listaAmigos = [];
let listaAmigosSorteados = [];

function verificaNomesRepetidos(nome){
    return listaAmigos.includes(nome);
}

function adicionarAmigo(){
    const amigo = document.getElementById("amigo");
    const textoAlerta = document.getElementById("alerta");

    const amigoJaFoiAdicionado = verificaNomesRepetidos(amigo.value);

    if(amigoJaFoiAdicionado){
        textoAlerta.innerHTML = "Você já adicionou esse nome.";
        return;
    }

    textoAlerta.innerHTML = "";
    listaAmigos.push(amigo.value);
    imprimirAmigosNaLista(amigo.value);
    amigo.value = "";
}

function imprimirAmigosNaLista(nome){
    const listaAmigosElemento = document.getElementById("listaAmigos");

    const amigo = document.createElement("li");
    amigo.innerHTML += nome;

    listaAmigosElemento.appendChild(amigo);
}

function sortearAmigo(){
    const textoAlerta = document.getElementById("alerta");

    if(listaAmigos.length < 2){
        textoAlerta.innerHTML = "Você não adicionou ninguém na lista.";
        return;
    }

    textoAlerta.innerHTML = "";

    const numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[numeroAleatorio];

    if(listaAmigosSorteados.length == listaAmigos.length){
        textoAlerta.innerHTML = "Todos da lista já foram sorteados.";
        return;
    }

    if(listaAmigosSorteados.includes(amigoSorteado)){
        sortearAmigo();
        return;
    }

    imprimirSorteado(amigoSorteado);
    listaAmigosSorteados.push(amigoSorteado);
}

function imprimirSorteado(sorteado){
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = sorteado;
}


function resetarSorteio(){
    const textoAlerta = document.getElementById("alerta");

    listaAmigosSorteados = [];
    imprimirSorteado("");

    textoAlerta.innerHTML = "";
}