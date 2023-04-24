import "./reset.scss";
import "./style.scss";

const form = document.getElementById("form");
const inputConsumptionHdpePowder = document.getElementById("consumption-hdpe-powder");
const inputConsumptionHdpeGranulated = document.getElementById("consumption-hdpe-granulated");
const selectPowderGranulated = document.getElementById("select-powder-granulated");
const inputSpeedLine = document.getElementById("speed-line");
const selectR1R2 = document.getElementById("select-r1-r2");
const buttonCalcular = document.getElementById("button-calcular");

// time = inputConsumptionHdpePowder * 200;

// form.children[2].style.display = "none";

form.onchange = selecionaMaterial;
buttonCalcular.addEventListener("click", (e) => {
  e.preventDefault();

  calculaTempoConsumo();
});

function selecionaMaterial() {
  if (selectPowderGranulated.value === "granulated") {
    form.children[1].style.display = "none";
    form.children[2].style.display = "none";
    form.children[3].style.display = "flex";
  }
  if (selectPowderGranulated.value === "powder") {
    form.children[3].style.display = "none";
    form.children[2].style.display = "flex";
    form.children[1].style.display = "flex";
  }
}

function calculaTempoConsumo() {
  const capacidadeSistema = 300;
  let capacidadeSistemaPo = 0;
  let capacidadeSistemaGranulado = 0;
  let powder = 0.9;
  let granulated = 0.1;
  let capacidadeSistemaR1 = 0;
  let capacidadeSistemaR2 = 0;
  const quantidadePowderKgMetro = inputConsumptionHdpePowder.innerHTML;
  const quantidadeGranulatedKgMetro = inputConsumptionHdpeGranulated.innerHTML;
  const velocidadeLinha = inputSpeedLine.innerHTML;
  let tempoConsumo = 0;

  capacidadeSistemaPo = capacidadeSistema * powder;
  capacidadeSistemaR1 = capacidadeSistemaPo / 5;
  capacidadeSistemaR2 = capacidadeSistema - capacidadeSistemaR1;

  capacidadeSistemaGranulado = capacidadeSistema * granulated;

  if (selectPowderGranulated.value === "powder" && selectR1R2.value === "r1") {
    tempoConsumo = capacidadeSistemaR1 / parseFloat(quantidadePowderKgMetro * velocidadeLinha);
    console.log(tempoConsumo);
  }
  if (selectPowderGranulated.value === "powder" && selectR1R2.value === "r2") {
    tempoConsumo = capacidadeSistemaR2 / parseFloat(quantidadePowderKgMetro * velocidadeLinha);
    console.log(tempoConsumo);
  }
  if (selectPowderGranulated.value === "granulated") {
    tempoConsumo = capacidadeSistemaGranulado / parseFloat(quantidadeGranulatedKgMetro * velocidadeLinha);
    console.log(tempoConsumo);
  }
}
