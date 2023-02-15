class Producto{
    constructor(id,nombre,precio,stock,imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
    restaStock(){
        this.stock = this.stock - 1;
        console.log(`El stock de ${this.nombre} ha sido actualizado`);
    }
}

// Creamos los productos

const producto0 = new Producto(00,"Miel",15, 50, "miel.jpg");
const producto1 = new Producto(01,"Crema de Maní",20, 75, "cremademani.jpg");
const producto2 = new Producto(02,"Mermelada",8, 37, "mermelada.jpg");
const producto3 = new Producto(03,"Stevia",18, 46, "stevia.jpg");

const productos = [producto0,producto1,producto2];

productos.push(producto3);

const cardBootstrap = (listaStock) => {
    for(e of listaStock){
        let card = document.createElement("div");
        card.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="./img/${e.imagen}" class="card-img-top" alt="Aca va la imagen de ${e.nombre}">
        <div class="card-body">
          <h5 class="card-title">${e.nombre}</h5>
          <p class="card-text">Llevalo a tan solo S/.${e.precio} soles</p>
          <input type="button" onclick="agregaCarrito(${e.id})"  class="btn btn-primary" value="Agregar carrito."></input>
        </div>
      </div>`
      document.body.append(card)
    }
}

cardBootstrap(productos);

const carritoCompra = [];

class ObjCarrito{
    constructor(producto,cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }

    sumaStock(){
        this.cantidad = this.cantidad + 1;
    }
}

function agregaCarrito(prod){
    let existeCarrito = carritoCompra.find(e => e.producto == prod)

    if (existeCarrito != undefined){
        let position = carritoCompra.findIndex(elem => elem.producto == existeCarrito.producto);
        carritoCompra[position].sumaStock();
        console.table(carritoCompra);

    }else{
        const alCarrito = new ObjCarrito(prod,1);
        carritoCompra.push(alCarrito);
        console.table(carritoCompra);
    }
}


