import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";


async function buscaVideos(evento){
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideos(dadosDePesquisa);//console.log(busca)
   
    const lista = document.querySelector("[data-lista]");
   
    while(lista.firstChild){ //apga todos os itens da lista 
        lista.removeChild(lista.firstChild);
    }
    
    busca.forEach(element => lista.appendChild( //cada elemnt da lista será adicionado na lista li  ao final.
        constroiCard(element.titulo, element.descricao, element.url, element.imagem)));//card é uma nova li 
    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo"> Não foi encontrado nada </h2> `
    }  
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscaVideos(evento))