let controleReceita = []
let controleDespesa = []
let cacheReceita = 0
let cacheDespesa = 0

//Adiciona receita
function adicionarReceita()
{
    let valorReceita = document.getElementById("valorReceita").value

    if(valorReceita == "")
    {
        alert("Preencha o valor da receita!")
    }
    else
    {
        controleReceita.push(valorReceita)
        document.getElementById("valorReceita").value = ""
        imprimirReceita()
        imprimirBalanco()
    }
}

//Adiciona despesa
function adicionarDespesa()
{
    let valorDespesa = document.getElementById("valorDespesa").value

    if(valorDespesa == "")
    {
        alert("Preencha o valor da despesa!")
    }
    else
    {
        controleDespesa.push(valorDespesa)
        document.getElementById("valorDespesa").value = ""
        imprimirDespesa()
        imprimirBalanco()
    }
}

//Imprime a receita
function imprimirReceita()
{
    let totalReceita = document.getElementById("totalReceita")
    totalReceita.innerHTML = ""
    cacheReceita = 0

    for(let i = 0; i < controleReceita.length; i++)
    {
        cacheReceita += parseFloat(controleReceita[i])
    }
    totalReceita.innerHTML = cacheReceita.toFixed(2)
    console.log(cacheReceita)
}

//Imprime a despesa
function imprimirDespesa()
{
    let totalDespesa = document.getElementById("totalDespesa")
    totalDespesa.innerHTML = ""
    cacheDespesa = 0

    for(let i = 0; i < controleDespesa.length; i++)
    {
        cacheDespesa += parseFloat(controleDespesa[i])
    }
    totalDespesa.innerHTML = cacheDespesa.toFixed(2)
    console.log(cacheDespesa)
}

//Imprime o balanço
function imprimirBalanco()
{
    let balanco = (cacheReceita - cacheDespesa).toFixed(2);
    let imprimirBalanco = document.getElementById("totalBalanco");
    if(balanco < 0)
    {
        imprimirBalanco.innerHTML = balanco;
        imprimirBalanco.style.color = "red";
    }
    else
    {
        imprimirBalanco.innerHTML = balanco;
        imprimirBalanco.style.color = "green";
    }
    console.log(balanco)
}