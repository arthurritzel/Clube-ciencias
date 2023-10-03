const URL = "https://rpstdm9a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%27metodo%27%5D%7B%0A++descricao%0A%7D"
async function metodo(){
    var dados = await fetch(URL,{
        method: "GET"
    }
    )
var dadosJS = await dadosJS.json();





}