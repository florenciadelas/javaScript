// Mostrar el valor el producto en pantalla

let remera = 100
let pantalon = 200
let vestido = 500
let resultado = 0
let carrito = []
let valorCarrito = 0
let tipoProducto = []
let suma = []



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

class Carrito {

    constructor(producto, cant) {
        this.producto = producto
        this.cant = cant
    }
}

const btnAgregar = document.getElementById("agregarAlCarrito")
btnAgregar.addEventListener("click", () => {

    let nombre = document.getElementById("nombre")
    localStorage.setItem("NOMBRE-USUARIO", nombre.value)


    let apellido = document.getElementById("apellido")
    localStorage.setItem("APELLIDO-USUARIO", apellido.value)

    const cliente = new Cliente(nombre, apellido)

    let titluloPagina = document.getElementById("titulo")
    titluloPagina.innerHTML = `Bienvenid@ ${nombre.value} ${apellido.value}`


    let producto = document.getElementById("producto")
    localStorage.setItem("PRODUCTO", producto.value)

    let cant = document.getElementById("cantidad")
    localStorage.setItem("CANTIDAD", cant.value)


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


    function mostrarCompra() {
        if (producto.value !== "0" && cant.value) {

            carrito.push(resultado)
            tipoProducto.push(producto)

            let nombreProducto = document.getElementById("contenedor")
            const ul = document.createElement("ul")
            ul.innerHTML = `Producto ` + producto.value + " $" + resultado
            contenedor.appendChild(ul)
        }
    }
    mostrarCompra()

    let carro = new Carrito(producto.value, cant.value)
    suma.push(carro)
    localStorage.setItem("carritos", JSON.stringify(suma))

    producto.value = "0"
    cant.value = ""

})


const btnFinalizar = document.getElementById("finalizar")
btnFinalizar.addEventListener("click", () => {

    if (carrito.length === 0) {
        return
    }

    btnAgregar.setAttribute("style", "display:none")

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
    carrito = []
    mostrarValorTotal()
    agradecer()
})


