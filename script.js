const convertbutton = document.querySelector(".button")
const seletorDeMoedas = document.querySelector(".seletor-de-moeda")

function covertValues(){
    const valorDoinput = document.querySelector(".valordoinput").value
    const valoraconvert = document.querySelector(".moeda-real")
    const valorconvertido = document.querySelector(".moeda-dolar")
    
    const dolarhoje = 5.7
    const eurohoje = 6.37
    const librahoje = 7.52

     if(seletorDeMoedas.value == "Dolar"){
     valorconvertido.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(valorDoinput / dolarhoje)

     }
    if(seletorDeMoedas.value == "Euro"){
        valorconvertido.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency: "EUR"
    }).format(valorDoinput / eurohoje)

    }

    if(seletorDeMoedas.value == "Libra"){
        valorconvertido.innerHTML = new Intl.NumberFormat("en-GB",{
        style: "currency",
        currency: "GBP"
    }).format(valorDoinput / librahoje)


    }

    valoraconvert.innerHTML = new Intl.NumberFormat("pt-br",{
       style: "currency",
       currency: "BRL"
     }).format(valorDoinput)   
}

 function mudarDEmoeda(){
    const nomeDAMoeda = document.getElementById("nome-da-moeda")
    const imgmoeda = document.querySelector(".img-moeda")

    if (seletorDeMoedas.value == "Dolar"){
     nomeDAMoeda.innerHTML = "Dolar Americano" 
     imgmoeda.src = "./assests/estados-unidos (1) 1.jpg"
    
    }

    if (seletorDeMoedas.value == "Euro"){
        nomeDAMoeda.innerHTML = "Euro"
        imgmoeda.src = "./assests/Design sem nome 3.png"
    }

if (seletorDeMoedas.value == "Libra"){
    nomeDAMoeda.innerHTML = "Libra"
    imgmoeda.src = "assests/libra 1.png"
}


    covertValues()
 }

seletorDeMoedas.addEventListener("change", mudarDEmoeda)
convertbutton.addEventListener("click", covertValues )