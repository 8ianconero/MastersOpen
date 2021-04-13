import {
    paco, bianconero, quique, javicho, raton
} from "./tableData.js";
import { resultados} from "./data.js";

const firstPlace = document.getElementById("position1");
const secondPlace = document.getElementById("position2");
const thirdPlace = document.getElementById("position3");

const table20 = document.getElementById("table-2020__body");

firstPlace.innerHTML+=
`
<p>${quique.nombre}
`

secondPlace.innerHTML+=
`
<p>${javicho.nombre}
`

thirdPlace.innerHTML+=
`
<p>${paco.nombre}
`