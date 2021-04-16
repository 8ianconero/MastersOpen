let left = 0;
let right = 0;

let scoreLeft = document.getElementById('score-left')
let plusLeft = document.getElementById('plus-left')
let minusLeft = document.getElementById('minus-left')
let scoreRight = document.getElementById('score-right')
let plusRight = document.getElementById('plus-right')
let minusRight = document.getElementById('minus-right')


scoreLeft.innerHTML = `${left}`
scoreRight.innerHTML = `${right}`


plusLeft.addEventListener('click', ()=>{
  scoreLeft.textContent = `${left+=1}`;  
})

minusLeft.addEventListener('click', ()=>{
  scoreLeft.textContent = `${left-=1}`;  
})


plusRight.addEventListener('click', ()=>{
  scoreRight.textContent = `${right+=1}`;  
})

minusRight.addEventListener('click', ()=>{
  scoreRight.textContent = `${right-=1}`;  
})

let reset = document.getElementById('reset')
reset.addEventListener('click',()=>{
    scoreLeft.textContent = left = 0;
    scoreRight.textContent = right = 0;
})