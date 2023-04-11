function recogerValores (){
  return {
    a: document.getElementById("a").value,
    b: document.getElementById("b").value,
    c: document.getElementById("c").value,
    d: document.getElementById("d").value,
    e: document.getElementById("e").value,
    f: document.getElementById("f").value,
    g: document.getElementById("g").value,
    h: document.getElementById("h").value,
    i: document.getElementById("i").value,
  }
}

const buttonCalcular = document.getElementById("CalcButton")
const buttonReiniciar = document.getElementById("CleanButton")
buttonCalcular.addEventListener("click", ()=>{
  
  const {a,b,c,d,e,f,g,h,i} = recogerValores()
  
  if (!!a && !!b && !!c && !!d && !!e && !!f && !!g && !!h && !!i){
    mostrar(calcular(a,b,c,d,e,f,g,h,i))
  } else {
    alert('Debes llenar todos los campos')
  }
});

buttonReiniciar.addEventListener("click", ()=>{
  location.reload()
});

function calcular(a, b, c, d, e, f, g, h, i) {
  const resultado = ((a * e * i) + (b * f * g) + (c * d * h)) - ((b * d * i) + (a * f * h) + (c * e * g))
  return resultado
}

function mostrar(value){
  const innerResult = document.createElement('span')
  innerResult.innerText = 'Resultado: ' + value
  const result = document.getElementById('result')
  result.appendChild(innerResult);
}