var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("#tabela-pacientes"); //Event Bubbling - passa por todos os elementos que são pais.

tabela.addEventListener("dblclick", function (event){ //após carreagar, a tabela, busca o event (evento);
       //console.log(event.target) qual evento foi? event.target.remove(); elimina só o td
    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode;

    // paiDoAlvo.remove();
    //outra forma de fazer


    setTimeout(function() {
        event.target.parentNode.remove();
        }, 500);

    event.target.parentNode.classList.add("fadeOut")

}

)

// pacientes.forEach(function (paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove();  //remove apénas os pacientes que já foram carregados na página.
//     });
// });

