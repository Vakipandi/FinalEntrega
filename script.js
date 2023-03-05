let carrito = [];
let total = 0;


function agregarProducto(nombre,precio){

    const producto = {
        nombre: nombre,
        precio: precio
    };

    carrito.push(producto);

    const listaCarro = document.getElementById("lista-carro");
    const elemento = document.createElement("li");
    elemento.innerText = `${nombre} -- s/. ${precio} soles`;
    listaCarro.appendChild(elemento);

    total += precio;
    const totalCarrito = document.getElementById("total-carro");
    totalCarrito.innerText = `EL total a pagar seria S/. `+ total.toFixed(2) + " soles";
    
}

function reiniciar(){
    alert("Compra realizada.");
    location.reload();
}
