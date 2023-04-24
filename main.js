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
function calculaCapacidadeSistema(material) {
  const capacidadeSistema = 500;
  const porcentagemPowder = 0.9;
  const porcentagemGranulated = 0.1;

  if (material === "powder") {
    let capacidadeSistemaPo = capacidadeSistema * porcentagemPowder;
    return capacidadeSistemaPo;
  }
  if (material === "granulated") {
    let capacidadeSistemaGranulado = capacidadeSistema * porcentagemGranulated;
    return capacidadeSistemaGranulado;
  }
}

function calculaQuantidadePowderR1R2(r) {
  let capacidadeSistemaR1 = calculaCapacidadeSistema("powder") / 5;
  let capacidadeSistemaR2 = calculaCapacidadeSistema("powder") - capacidadeSistemaR1;

  if (r === "r1") {
    return capacidadeSistemaR1;
  }
  if (r === "r2") {
    return capacidadeSistemaR2;
  }
}

function calculaTempoConsumo() {
  const consumoPowderKgMetro = inputConsumptionHdpePowder.value;
  const quantidadeGranulatedKgMetro = inputConsumptionHdpeGranulated.value;
  const velocidadeLinha = inputSpeedLine.value;
  let tempoConsumo = 0;

  if (selectPowderGranulated.value === "powder" && selectR1R2.value === "r1") {
    tempoConsumo = calculaQuantidadePowderR1R2(selectR1R2.value) / (consumoPowderKgMetro * velocidadeLinha);
    console.log(`${tempoConsumo} minutos`);
  }
  if (selectPowderGranulated.value === "powder" && selectR1R2.value === "r2") {
    tempoConsumo = calculaQuantidadePowderR1R2(selectR1R2.value) / (consumoPowderKgMetro * velocidadeLinha);
    console.log(tempoConsumo);
  }
  if (selectPowderGranulated.value === "granulated") {
    tempoConsumo =
      calculaCapacidadeSistema(selectPowderGranulated.value) / (quantidadeGranulatedKgMetro * velocidadeLinha);
    console.log(`${tempoConsumo} minutos`);
  }
}
