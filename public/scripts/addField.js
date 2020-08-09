//procura o botao e quando clicar nele executa a função
document.querySelector("#add-time").addEventListener("click", cloneField);
//função
function cloneField() {
    //duplica os campos quue retornou na busca
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);
    //pegar os campos
    const fields = newFieldContainer.querySelectorAll("input");
    //para cada campo, limpar
    fields.forEach(function (field) {
        field.value = "";
    });
    
    //local para posicionar os campos
    document.querySelector("#schedule-items").appendChild(newFieldContainer);
}