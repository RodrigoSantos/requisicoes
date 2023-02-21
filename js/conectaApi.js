//npx json-server --watch db.json comando para iniciar o servidor
async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");    
    const conexaoConvertida = await conexao.json();
    //console.table(conexao)
    //console.log(conexaoConvertida)
    //console.log("listaApi")
    return conexaoConvertida;
}

async function criaVideo(titulo,descricao,url,imagem){
    //console.log("Passou 4,5");
    const conexao = await fetch("http://localhost:3000/video",{
        method: "POST",
        headers: {
           "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,    
            url: url,
            imagem: imagem
        })
    });
    if (!conexao.ok){
        console.log("Deu Ruim")
        throw new Error("Deu ruim, não foi possível enviar o video");
    }
    //console.log("Passou 4,6");
    const conexaoConvertida = await conexao.json(); 
   // console.log("Passou 4,7");
    return conexaoConvertida;
}
async function buscaVideos(termoDeBusca){
    const conexao = await fetch( `http://localhost:3000/videos?q=${termoDeBusca}`);    
    //console.log(conexao)
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;

}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideos
}

