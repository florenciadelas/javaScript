// Mostrar el valor el producto en pantalla

let remera = 100
let pantalon = 200
let vestido = 500
let resultado = 0
let carrito = []
let valorCarrito = 0
let tipoProducto = []
precioUnitario = 0


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

const btnAgregar = document.getElementById("agregarAlCarrito")
btnAgregar.addEventListener("click", () => {

let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
const cliente = new Cliente(nombre, apellido)

let titluloPagina = document.getElementById("titulo")
titluloPagina.innerHTML = `Bienvenid@ ${nombre.value} ${apellido.value}`


let producto = document.getElementById("producto")
let cant = document.getElementById("cantidad")


    devolverResultado = (a, b) => {
        return resultado = a * b
    }

    mostrarValor = () => {
        if (producto.value == "REMERA") {
            devolverResultado(remera, cantidad.value)
        } else if (producto.value == "PANTALON") {
            devolverResultado(pantalon, cantidad.value)
        } else if (producto.value == "VESTIDO") {
            devolverResultado(vestido, cantidad.value)
        }
    }

    mostrarValor()

    carrito.push(resultado)
    tipoProducto.push(producto)

    // eliminarProducto = () => {
    //     productoEliminado = prompt("Desea eliminar el producto? SI/NO")

    //     while (productoEliminado !== "SI" && productoEliminado !== "NO") {
    //         productoEliminado = prompt("Error! Ingrese una respuesta valida. SI/NO")
    //     }

    //     if (productoEliminado === "SI")
    //         carrito.pop()
    // }

    // eliminarProducto()

    //     if (productoEliminado === "SI") {
    //         tipoProducto.pop()
    //     }

    //     producto = prompt("Ingrese el producto que desea comprar: REMERA, PANTALON, VESTIDO, o FIN para finalizar la compra")
    // }

    // let consultaEliminar = prompt("Desea eliminar algun producto? SI/NO")

    // while (consultaEliminar === "SI") {
    //     if (consultaEliminar === "SI") {
    //         let prodAEliminar = (Number(prompt("Indique el numero de producto que desea eliminar de la lista")))

    //         eliminarProdDeLista = () => {
    //             let prodEliminadoDeCarrito = carrito.splice(prodAEliminar - 1, 1) // AGREGUÉ EL -1 PARA QUE EL USUARIO ELIJA A PARTIR DEL PRODUCTO 1 Y NO DEL 0
    //             let prodEliminadoDeProducto = tipoProducto.splice(prodAEliminar - 1, 1)
    //             valorCarrito -= prodEliminadoDeCarrito
    //         }
    //     } else {
    //         alert("Gracias por su compra!")
    //     }
    //     eliminarProdDeLista()


    // let prodConIva = prompt("Desea ver el valor de los productos con IVA?")

    // if (prodConIva === "SI") {
    //     carrito.forEach((prod) => {
    //         console.log("El valor del producto con IVA es $" + (prod *= 1.21))
    //     })
    // } else {
    //     alert("Gracias por su compra!")
    // }

    function mostrarCompra() {

        let nombreProducto = document.getElementById("contenedor")
        const ul = document.createElement("ul")
        ul.innerHTML = `Producto ` + producto.value + " $" + resultado
        contenedor.appendChild(ul)
    }

    mostrarCompra()

})


const btnFinalizar = document.getElementById("finalizar")
btnFinalizar.addEventListener("click", () => {


    for (i = 0; i < carrito.length; i++) {
        valorCarrito += carrito[i]
    }

    function mostrarValorTotal() {
        let h4 = document.createElement("h4")
        h4.innerHTML = `Valor total de la compra $ ` + valorCarrito
        contenedor.appendChild(h4)
    }

    function agradecer() {
        let tituloH4 = document.createElement("h4")
        tituloH4.innerText = ("Gracias por su compra!")
        contenedor.appendChild(tituloH4)
    }
    mostrarValorTotal()
    agradecer()
})
