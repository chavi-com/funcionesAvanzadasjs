let obtenerNombre=(codigo)=>codigo.split(":")[1]+codigo.split(":")[2]+codigo.split(":")[0]
let resultado=obtenerNombre(" 21811536: edison: chavarria")
console.log(resultado)