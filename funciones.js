// Mostrar el valor el producto en pantalla

let remera = 100
let pantalon = 200
let vestido = 500
let resultado = (a,b) => a*b


let producto = prompt("Ingrese el producto que desea comprar: REMERA, PANTALON, VESTIDO")


while(producto !== "REMERA" && producto !== "PANTALON" && producto !== "VESTIDO"){
     producto = prompt("Error! Ingrese el producto que desea comprar: REMERA, PANTALON, VESTIDO")
}   

let cantidad = prompt("Ingrese la cantidad que desea.")
 
mostrarValor = (a,b) => {
    if(producto == "REMERA"){
        alert("El valor del producto es: " + resultado(Number(remera),cantidad))
        }else if (producto == "PANTALON"){
           alert ("El valor del producto es: " + resultado((Number(pantalon)),cantidad))
                }else{
                    alert ("El valor del producto es: " + resultado((Number(vestido)),cantidad))
                }
}
mostrarValor()

