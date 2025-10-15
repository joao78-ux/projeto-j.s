const convertbutton = document.querySelector(".button");
const seletorDeMoedas = document.querySelector(".seletor-de-moeda");

async function covertValues() {
  const valorDoinput = document.querySelector(".valordoinput").value;
  const valoraconvert = document.querySelector(".moeda-real");
  const valorconvertido = document.querySelector(".moeda-dolar");

  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
  ).then((Response) => Response.json());
  const dolarhoje = data.USDBRL.high;
  const eurohoje = data.EURBRL.high;
  const Bitcoin = data.BTCBRL.high;

  if (seletorDeMoedas.value == "Bitcoin") {
    valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
    }).format(valorDoinput / Bitcoin);
  }
  if (seletorDeMoedas.value == "Dolar") {
    valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valorDoinput / dolarhoje);
  }
  if (seletorDeMoedas.value == "Euro") {
    valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valorDoinput / eurohoje);
  }

  valoraconvert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(valorDoinput);
}

function mudarDEmoeda() {
  const nomeDAMoeda = document.getElementById("nome-da-moeda");
  const imgmoeda = document.querySelector(".img-moeda");

  if (seletorDeMoedas.value == "Dolar") {
    nomeDAMoeda.innerHTML = "Dolar Americano";
    imgmoeda.src = "./assests/estados-unidos (1) 1.jpg";
  }

  if (seletorDeMoedas.value == "Euro") {
    nomeDAMoeda.innerHTML = "Euro";
    imgmoeda.src = "./assests/Design sem nome 3.png";
  }

  if (seletorDeMoedas.value == "Bitcoin") {
    nomeDAMoeda.innerHTML = "Bitcoin";
    imgmoeda.src = "assests/bitcoin 1.png";
  }

  covertValues();
}

seletorDeMoedas.addEventListener("change", mudarDEmoeda);
convertbutton.addEventListener("click", covertValues);
