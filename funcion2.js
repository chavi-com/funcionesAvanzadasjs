function obtenerNombre(codigo){
    let codigo2 = codigo.split(":")[1]+codigo.split(":")[0]
    return codigo2
}
let resultado=obtenerNombre("1128460815: Edison :Chavarria")
console.log(resultado)
