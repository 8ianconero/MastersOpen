import {
    paco, bianconero, quique, javicho, raton
} from "./tableData.js";
import { resultados} from "./data.js";


const firstPlace = document.getElementById("position1");
const secondPlace = document.getElementById("position2");
const thirdPlace = document.getElementById("position3");

const table20 = document.getElementById("table20-body");

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

table20.innerHTML +=
`
<tr class="text"><td>${quique.nombre}</td><td>${quique.victorias}</td><td>${quique.derrotas}</td><td>${quique.puntosFavor}</td><td>${quique.puntosContra}</td><td class="text-b">${quique.puntosTotales}</td></tr>

<tr class="text"><td>${javicho.nombre}</td><td>${javicho.victorias}</td><td>${javicho.derrotas}</td><td>${javicho.puntosFavor}</td><td>${javicho.puntosContra}</td><td class="text-b">${javicho.puntosTotales}</td></tr>

<tr class="text"><td>${paco.nombre}</td><td>${paco.victorias}</td><td>${paco.derrotas}</td><td>${paco.puntosFavor}</td><td>${paco.puntosContra}</td><td class="text-b">${paco.puntosTotales}</td></tr>

<tr class="text"><td>${bianconero.nombre}</td><td>${bianconero.victorias}</td><td>${bianconero.derrotas}</td><td>${bianconero.puntosFavor}</td><td>${bianconero.puntosContra}</td><td class="text-b">${bianconero.puntosTotales}</td></tr>

<tr class="text"><td>${raton.nombre}</td><td>${raton.victorias}</td><td>${raton.derrotas}</td><td>${raton.puntosFavor}</td><td>${raton.puntosContra}</td><td class="text-b">${raton.puntosTotales}</td></tr>
`;

const j1 = document.getElementById("jornada1-container");

for(let resultado of resultados){
    if(resultado.jornada == 1){

    j1.innerHTML += 
    `<div class="score-container">

        <span class="token-left"></span>
        <span class="local-player body-font">${resultado.jugadorLocal}</span>
        <span class="local-player--points body-font">${resultado.jugadorLocalPuntos}</span>
    
        <span class="token-right"></span>
        <span class="away-player body-font">${resultado.jugadorVisitante}</span>
        <span class="away-player--points body-font">${resultado.jugadorVisitantePuntos}</span>

    </div>` 
}
}

const j2 = document.getElementById("jornada2-container");

for(let resultado of resultados){
    if(resultado.jornada == 2){

    j2.innerHTML += 
    `<div class="score-container">

        <span class="token-left"></span>
        <span class="local-player body-font">${resultado.jugadorLocal}</span>
        <span class="local-player--points body-font">${resultado.jugadorLocalPuntos}</span>
    
        <span class="token-right"></span>
        <span class="away-player body-font">${resultado.jugadorVisitante}</span>
        <span class="away-player--points body-font">${resultado.jugadorVisitantePuntos}</span>

    </div>` 
}
}

const j3 = document.getElementById("jornada3-container");

for(let resultado of resultados){
    if(resultado.jornada == 3){

    j3.innerHTML += 
    `<div class="score-container">

        <span class="token-left"></span>
        <span class="local-player body-font">${resultado.jugadorLocal}</span>
        <span class="local-player--points body-font">${resultado.jugadorLocalPuntos}</span>

        <span class="token-right"></span>
        <span class="away-player body-font">${resultado.jugadorVisitante}</span>
        <span class="away-player--points body-font">${resultado.jugadorVisitantePuntos}</span>

    </div>` 
}
}

const homePoints = document.querySelectorAll('.local-player--points');
const homePlayers = document.querySelectorAll('.local-player');
const homeWinner = document.querySelectorAll('.token-left');
const awayPoints = document.querySelectorAll('.away-player--points');
const awayPlayers = document.querySelectorAll('.away-player');
const awayWinner = document.querySelectorAll('.token-right')



for(let homePoint of homePoints){
    let hP = homePoint.innerHTML.toLowerCase();
    if(hP == 5){
        homePoint.previousElementSibling.previousElementSibling.classList.add('winner-mark')
        homePoint.classList.add('winner')
        homePoint.previousElementSibling.classList.add('winner')
        
    }
}


for(let awayPoint of awayPoints){
    let aP = awayPoint.innerHTML.toLowerCase();
    if(aP == 5){
        awayPoint.classList.add('winner');
        awayPoint.previousElementSibling.classList.add('winner')
        awayPoint.previousElementSibling.previousElementSibling.classList.add('winner-mark')
    }
}