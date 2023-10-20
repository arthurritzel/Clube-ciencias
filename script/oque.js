const URL_oque = "https://rpstdm9a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27oque%27+%5D%7B%0A++descricao%0A%7D"

async function oque(){
    var dados = await fetch(URL_oque, {
        method: "GET"
    })

    var dadosJS = await dados.json();

    var p = document.createElement("p");
    p.innerText = dadosJS.result[0].descricao
    console.log(dadosJS)
    var sobre_conteudo = document.querySelector(".sobre-conteudo");
    var picture = document.querySelector(".imgs_oque")
    sobre_conteudo.insertBefore(p, picture);
}

oque();