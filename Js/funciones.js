// Mostrar el valor el producto en pantalla

let remera = 100
let pantalon = 200
let vestido = 500
let resultado = 0
let carrito = []
let valorCarrito = 0
let tipoProducto = []


// Objeto cliente

class Cliente {

    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
    }

    nombreCompleto() {
        return this.nombre + " " + this.apellido
    }
}

let tituloH2= document.createElement("h2")
tituloH2.innerText = ("Gracias por su compra!")
document.body.appendChild(tituloH2)


let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
const cliente = new Cliente(nombre, apellido)

let titluloPagina = document.getElementById("titulo")
titluloPagina.innerHTML = `Bienvenid@ a la Maja Indumentaria, ${nombre} ${apellido}`


let producto = prompt("Ingrese el producto que desea comprar: REMERA, PANTALON, VESTIDO, o FIN para finalizar la compra")

while (producto !== "FIN") {

    while (producto !== "REMERA" && producto !== "PANTALON" && producto !== "VESTIDO" && producto !== "FIN") {
        producto = prompt("Error! Ingrese el producto que desea comprar: REMERA, PANTALON, VESTIDO o FIN")
    }

    let cantidad = Number(prompt("Ingrese la cantidad que desea comprar."))

    devolverResultado = (a, b) => {
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

    tipoProducto.push(producto)

    eliminarProducto = () => {
        productoEliminado = prompt("Desea eliminar el producto? SI/NO")

        while (productoEliminado !== "SI" && productoEliminado !== "NO") {
            productoEliminado = prompt("Error! Ingrese una respuesta valida. SI/NO")
        }

        if (productoEliminado === "SI")
            carrito.pop()
    }

    eliminarProducto()

    if (productoEliminado === "SI") {
        tipoProducto.pop()
    }

    producto = prompt("Ingrese el producto que desea comprar: REMERA, PANTALON, VESTIDO, o FIN para finalizar la compra")
}

for (i = 0; i < carrito.length; i++) {
    valorCarrito += carrito[i]
}


console.log("Nombre del cliente")
console.log(cliente)
console.log("Tipo de productos")
console.log(tipoProducto)
console.log("Lista de compras")
console.log(carrito)
console.log("Cantidad de productos a comprar")
console.log(carrito.length)
console.log("Valor final")
console.log("$" + valorCarrito)

let consultaEliminar = prompt("Desea eliminar algun producto? SI/NO")

while (consultaEliminar === "SI") {
    if (consultaEliminar === "SI") {
        let prodAEliminar = (Number(prompt("Indique el numero de producto que desea eliminar de la lista")))

        eliminarProdDeLista = () => {
            let prodEliminadoDeCarrito = carrito.splice(prodAEliminar - 1, 1) // AGREGUÉ EL -1 PARA QUE EL USUARIO ELIJA A PARTIR DEL PRODUCTO 1 Y NO DEL 0
            let prodEliminadoDeProducto = tipoProducto.splice(prodAEliminar - 1, 1)
            valorCarrito -= prodEliminadoDeCarrito
        }
    } else {
        alert("Gracias por su compra!")
    }
    eliminarProdDeLista()

    console.log("Lista de compras actualizada")
    console.log(carrito)
    console.log("Tipo de productos actualizada")
    console.log(tipoProducto)
    console.log("Cantidad de productos a comprar")
    console.log(carrito.length)
    console.log("Valor actualizado")
    console.log("$" + valorCarrito)
    consultaEliminar = prompt("Desea eliminar algun otro producto? SI/NO")

}

let prodConIva = prompt("Desea ver el valor de los productos con IVA?")

if (prodConIva === "SI") {
    carrito.forEach((prod) => {
        console.log("El valor del producto con IVA es $" + (prod *= 1.21))
    })
} else {
    alert("Gracias por su compra!")
}



function mostrarCompra() {

    let nombreProducto = document.getElementById("contenedor")
    for (let i = 0; i < tipoProducto.length; i++) {
        const ul = document.createElement("ul")
        ul.innerHTML = `Producto ` + tipoProducto[i] + " $" + carrito[i]
        contenedor.appendChild(ul)
    }
}
mostrarCompra()

let h4 = document.createElement("h4")
h4.innerHTML = `Valor total de la compra $ ` + valorCarrito
contenedor.appendChild(h4)
