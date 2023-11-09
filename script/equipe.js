const URL_equipe = "https://rpstdm9a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27equipe%27%5D%7B%0A++nome%2C%0A++cargo%2C%0A++%27imagem%27%3A+imagem.asset+-%3Eurl%2C%0A%7D"

async function equipe(){
    var dados = await fetch(URL_equipe, {
        method: "GET"
    })

    var dadosJS = await dados.json();

    dadosJS.result.forEach(element => {
        var profs = document.createElement("div")
        profs.className = "profs"

        var img = document.createElement("img")
        img.setAttribute("src", `${element.imagem}?h=150&w=150`)

        var nome = document.createElement("div")
        nome.id = "nome"

        var h3 = document.createElement("h3")
        h3.innerText = element.nome

        var p = document.createElement("p")
        p.innerText = element.cargo

        nome.appendChild(h3)
        nome.appendChild(p)

        profs.appendChild(img)
        profs.appendChild(nome)

        var sep = document.querySelector("#sep")

        sep.appendChild(profs)
    })
}

equipe();
