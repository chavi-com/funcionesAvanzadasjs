//declarando una funcion que calcule la distancia entre 2 puntos

function calcularDistancia(x1,y1,x2,y2){
  /*  let restax = x2 - x1
    let restay = y2 - y1

    let potenciax = Math.pow(restax,2)
    let potenciay = Math.pow(restay,2)

    let sumaPotencias = potenciax + potenciay
    let raiCuadrada = Math.sqrt(sumaPotencias)*/
    return (Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2)))


   
}
//llamar funcion
let distancia=calcularDistancia(0,0,12,0)
console.log(`la distancia calculada fue ${distancia}`)
console.log("la distancia es: "+distancia)




