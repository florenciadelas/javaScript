// Mostrar el valor el producto en pantalla

let remera = 100
let pantalon = 200
let vestido = 500
let resultado = 0
let carrito = []
let valorCarrito = 0

// Objeto cliente

class Cliente{

    constructor(nombre, apellido, id){
        this.nombre = nombre
        this.apellido = apellido
    }

    nombreCompleto(){
        return this.nombre+ " " + this.apellido
    }
}

let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")

const cliente = new Cliente (nombre, apellido)


// Array para agregar productos


let producto = prompt("Ingrese el producto que desea comprar: REMERA, PANTALON, VESTIDO, o FIN para finalizar la compra")

while (producto !== "FIN") {

    while (producto !== "REMERA" && producto !== "PANTALON" && producto !== "VESTIDO" && producto !== "FIN") {
        producto = prompt("Error! Ingrese el producto que desea comprar: REMERA, PANTALON, VESTIDO o FIN")
    }

    let cantidad = prompt("Ingrese la cantidad que desea comprar.")

    devolverResultado = (a, b) =>{
        return resultado = a * b
    } 

    mostrarValor = () => {
        if (producto == "REMERA") {
            alert("El valor del producto es: " + devolverResultado((Number(remera)), cantidad))

        } else if (producto == "PANTALON") {
            alert("El valor del producto es: " + devolverResultado((Number(pantalon)), cantidad))
        } else {
            alert("El valor del producto es: " + devolverResultado((Number(vestido)), cantidad))
        }
    }

  
    mostrarValor()

    carrito.push(resultado)

    producto = prompt("Ingrese el producto que desea comprar: REMERA, PANTALON, VESTIDO, o FIN para finalizar la compra")
}

for (i=0; i<carrito.length; i++){
    valorCarrito += carrito[i]
}

console.log("Nombre del cliente")
console.log(cliente)
console.log("Lista de compras")
console.log(carrito)
console.log("Valor final")
console.log(valorCarrito)






