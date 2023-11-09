const URL = "https://rpstdm9a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27laboratorios%27%5D%7B%0A++titulo%2C%0A++descricao%2C%0A++%22imagem1%22%3A+imagem1.asset-%3Eurl%2C%0A++++%22imagem2%22%3A+imagem2.asset-%3Eurl%2C%0A++++%22imagem3%22%3A+imagem3.asset-%3Eurl%2C%0A%7D";

async function laboratorios(){
    var dados = await fetch(URL,{
        method: "GET"
    })


    var count = 0;

    var dadosJS = await dados.json()
    dadosJS.result.forEach(element =>{

    var div_card = document.createElement("div");
    var div_card_img = document.createElement("div");

    if (count % 2 == 0) {
        div_card.className = "card"
        div_card_img.className = "card-img"
    }else{
        div_card.className = "card-reverse"
        div_card_img.className = "card-img-reverse"
    }
    count++;
   
    var div_txt = document.createElement("div");
    div_txt.className = "txt"
    var div_p1 = document.createElement("p");
    div_p1.className = "lab";
    var div_p2 = document.createElement("p");
    div_p2.className = "desc-lab";


    
    

    var div_img_none = document.createElement("div");
    div_img_none.className = "card-img-none";

    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    var img3 = document.createElement("img");
    

    div_p1.innerText = element.titulo;
    div_p2.innerText = element.descricao;
    img1.setAttribute("src", `${element.imagem1}?h=320&w=500`);
    img2.setAttribute("src", `${element.imagem2}?h=150&w=200`);
    img3.setAttribute("src", `${element.imagem3}?h=150&w=200`);


    var cards = document.querySelector(".cards");

    div_txt.appendChild(div_p1);
    div_txt.appendChild(div_p2);
    div_card.appendChild(div_txt);


    div_card_img.appendChild(img1);
    div_img_none.appendChild(img2);
    div_img_none.appendChild(img3);

    div_card_img.appendChild(div_img_none);

    div_card.appendChild(div_card_img);

    cards.appendChild(div_card);
    




});

}

laboratorios();
