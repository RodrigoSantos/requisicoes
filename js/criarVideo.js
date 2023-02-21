import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]")

async function criaVideo(evento){    
    evento.preventDefault();//Previnir que a ação padrão de furmalário aconteça, recarregamento de atualizar a página
    
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random()*10).toString();
    //console.log("Passou 4");
    
    try {
        await conectaApi.criaVideo(titulo,descricao,url,imagem);
        //console.log("Passou 5");
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {        
        alert(e);
    }
}
formulario.addEventListener("submit", evento => criaVideo(evento));
