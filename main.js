import "./reset.scss";
import "./style.scss";

const form = document.getElementById("form");
const inputConsumptionHdpePowder = document.getElementById("consumption-hdpe-powder");
const inputConsumptionHdpeGranulated = document.getElementById("consumption-hdpe-granulated");
const selectPowderGranulated = document.getElementById("select-powder-granulated");
const capacidadeSistemaExtrusora = 200;

// time = inputConsumptionHdpePowder * 200;

form.children[2].style.display = "none";

form.addEventListener("change", () => {
  if (selectPowderGranulated.value === "granulated") {
    form.children[1].style.display = "none";
    form.children[2].style.display = "flex";
  }
  if (selectPowderGranulated.value === "powder") {
    form.children[2].style.display = "none";
    form.children[1].style.display = "flex";
  }
});
