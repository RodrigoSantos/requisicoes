import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");//Data atributos, serve para individualizar os elemntos e conseguirmos manipular o dom através deles 

export default function constroiCard(titulo, descricao, url, imagem){
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>`
    return video;
}

async function listaVideos(){
    try  {
         const listaApi = await conectaApi.listaVideos();
        //console.log(listaApi)
        listaApi.forEach(element => lista.appendChild( //cada elemnt da lista será adicionado na lista li  ao final.
        constroiCard(element.titulo, element.descricao, element.url, element.imagem)));//card é uma nova li
    }catch (e){ 
        lista.innerHTML = `<h2 class "mensagem__titulo"> Não foi possível carregar a lista de videos</h2>`;
        alert(e);
    }
}

listaVideos();