const URL_clubes = "https://rpstdm9a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27desc_clubes%27%5D%7B%0A++clube%2C%0A++descricao%2C%0A++%27imagem%27%3A+imagem.asset+-%3Eurl%2C%0A++faixaIdade%2C%0A++horarios-%3E%7BturnoManha%2C+turnoTarde%2C+dia_semana%7D%0A%7D"

async function pre_clube(){
    var dados = await fetch(URL_clubes, {
        method: "GET"
    })

    var dadosJS = await dados.json()
    
    dadosJS.result.forEach(element => {
        
        var caixa_maior_baixo = document.createElement("div")
        caixa_maior_baixo.className = 'caixa_maior_baixo'

        var img = document.createElement("img")
        img.setAttribute("src", `${element.imagem}?h=290&w=500`)

        var caixa_texto_vantagens = document.createElement("div")
        caixa_texto_vantagens.className = "caixa_texto_vantagens"

        var titulo_desc = document.createElement("h3")
        titulo_desc.innerText = 'Descrição'

        var desc = document.createElement("p")
        desc.className = "desc-cl"
        desc.innerText = element.descricao

        var titulo_hora = document.createElement("h3")
        titulo_hora.innerText = "Horários"

        var tabela = document.createElement("table")
        tabela.className = "tabela"

        var tr_titulo = document.createElement("tr")
        tr_titulo.style.backgroundColor = "#FC6335"

        var th_titulo = document.createElement("th");
        th_titulo.setAttribute("colspan", "2");
        th_titulo.className = "tabela_titulo"
        th_titulo.innerText = `${element.faixaIdade.min}-${element.faixaIdade.max} Anos`

        tr_titulo.appendChild(th_titulo);

        var tr_turnoM = document.createElement("tr")
        tr_turnoM.className = "turnos"

        var td_turnoM1 = document.createElement("td")
        td_turnoM1.setAttribute("class", "bordas center_table")
        td_turnoM1.innerText = "Turno manha"

        var td_turnoM2 = document.createElement("td")
        td_turnoM2.setAttribute("class", "borda2")
        td_turnoM2.innerText = `${element.horarios.turnoManha.min} as ${element.horarios.turnoManha.max}`

        tr_turnoM.appendChild(td_turnoM1)
        tr_turnoM.appendChild(td_turnoM2)

        var tr_turnoT = document.createElement("tr")
        tr_turnoT.className = "turnos"

        var td_turnoT1 = document.createElement("td")
        td_turnoT1.setAttribute("class", "bordas center_table")
        td_turnoT1.innerText = "Turno manha"

        var td_turnoT2 = document.createElement("td")
        td_turnoT2.setAttribute("class", "borda2")
        td_turnoT2.innerText = `${element.horarios.turnoTarde.min} as ${element.horarios.turnoTarde.min}`

        tr_turnoT.appendChild(td_turnoT1)
        tr_turnoT.appendChild(td_turnoT2)

        tabela.appendChild(tr_titulo)
        tabela.appendChild(tr_turnoM)
        tabela.appendChild(tr_turnoM)


        let cont = 1;
        element.horarios.dia_semana.forEach(element2 => {
            var tr = document.createElement("tr")
            tr.className = "dias"

            var td1 = document.createElement("td")
            var td2 = document.createElement("td")
            
            if(cont == (element.horarios.dia_semana).length){
                td1.className = "bordas bottom_table2 center_table"
                td2.className = "bottom_table"
                
            }else{
                td1.className = "bordas center_table"
                td2.className = "borda2"
            }

            td1.innerText = element2.dia
            td2.innerText = element2.descricao

            tr.appendChild(td1)
            tr.appendChild(td2)
            tabela.appendChild(tr)
            cont++;
        })


        caixa_maior_baixo.appendChild(img)

        caixa_texto_vantagens.appendChild(titulo_desc)
        caixa_texto_vantagens.appendChild(desc)
        caixa_texto_vantagens.appendChild(titulo_hora)
        caixa_texto_vantagens.appendChild(tabela)

        caixa_maior_baixo.appendChild(caixa_texto_vantagens)

        var caixa_fundo = document.createElement("div")
        caixa_fundo.className = "caixa_fundo"

        var identificador = document.createElement("div")
        identificador.className = "identificador"
        identificador.innerHTML = `<p>${element.clube}</p>`

        caixa_fundo.appendChild(identificador)
        caixa_fundo.appendChild(caixa_maior_baixo)

        var clubes = document.querySelector(".clubes")

        clubes.appendChild(caixa_fundo)
        
    });
}

pre_clube()

