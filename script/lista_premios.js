const URL = "https://rpstdm9a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27lista_premios%27%5D%7B%0A++%27imagem%27+%3A+imagem.asset-%3Eurl%2C%0A++++titulo%2C%0A++++descricao%0A%7D"

async function premio_01(){
    var dados = fetch(URL, {
        method: "GET"
    })

    var dadosJS = await dados.json()
    dadosJS.result.forEach(element => {

        

    })


}