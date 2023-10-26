function enviar_email(){
   var link = document.createElement("a");
   
   var nome = document.querySelector("#Inputnome").value;
   var email = document.querySelector("#InputEmail1").value;
   var telefone = document.querySelector("#InputNumero").value;
   var idade_aluno = document.querySelector("#InputIdade").value;
   var chegou = document.querySelector(".custom-select").value;
   
   link.setAttribute("href", `mailto:comercial.educacao@biopark.com.br?subject=Interesse no Clube de ciancias Biopark&body=Olá me chamo ${nome}, o possivel aluno tem ${idade_aluno}, conheci o clube por meio do(a) ${chegou} Voce pode entrar em contato comigo via email: ${email} ou telefone: ${telefone}`)
   
    link.className = "emailLink"
    document.body.appendChild(link)
   document.querySelector(".emailLink").click();
}