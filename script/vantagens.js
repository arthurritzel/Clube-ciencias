const URL_metodo = "https://rpstdm9a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%27metodo%27%5D%7B%0A++descricao%0A%7D"
var div_metodo = document.querySelector(".quadrado1")
async function metodo(){
    var dados = await fetch(URL_metodo,{
        method: "GET"
    }
    )
    var dadosJS = await dados.json();
    dadosJS.result.forEach(element => {
        var desc = document.createElement("p");
        desc.className = "vant-txt";

        desc.innerText = element.descricao;

        div_metodo.appendChild(desc);
    });
}
metodo();

const URL_certificado = "https://rpstdm9a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%27certificado%27%5D%7B%0A++descricao%0A%7D"
var div_certificado = document.querySelector(".quadrado2")
async function certificado(){
    var dados = await fetch(URL_certificado,{

        method: "GET"
    }
    )
    var dadosJS = await dados.json();
    dadosJS.result.forEach(element => {
        var desc = document.createElement("p")
        desc.className = "vant-txt";

        desc.innerText = element.descricao;

        div_certificado.appendChild(desc);
});
}
certificado();


const URL_premio = "https://rpstdm9a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%27premios%27%5D%7B%0A++premio%0A%7D"
var div_premio = document.querySelector(".quadrado3")
async function premio(){
    var dados = await fetch(URL_premio,{

        method: "GET"
    }
    )
    var dadosJS = await dados.json();
    dadosJS.result.forEach(element => {
        var desc = document.createElement("p")
        desc.className = "vant-txt";

        desc.innerText = element.premio;
        botao = document.querySelector(".botaojs")
        div_premio.insertBefore(desc, botao);
});
}
premio();
