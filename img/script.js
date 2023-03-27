const modalContainer = document.getElementById("modal-container")

class Producto {
    constructor(id, nombre, precio,img)  {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.img = img;
      
    }
  }
  
  const producto1 = new Producto(1, 'Miel',  20, "miel");
  const producto2 = new Producto(2, 'Crema de Maní',25, "crema");
  const producto3 = new Producto(3, 'Mermelada', 15, "mermelada");
  const producto4 = new Producto(4, 'Stevia', 22.5, "stevia")
  
  const productos = [producto1, producto2, producto3, producto4];
  
  
  const contenedorProductos = document.getElementById('contenedorProductos');

  const carrito = [];
  
  productos.forEach((producto) => {
    const divProducto = document.createElement('div');
    divProducto.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12','text-center');
    divProducto.innerHTML = `
      <div>
          <img src="img/${producto.img}.jpg" class="card-img-top img-fluid py-3">
          <div class="card-body">
              <h2 class="card-title"> ${producto.nombre} </h2>
              <p class="card-text h4"> S/. ${producto.precio} soles</p>
              <button id="boton${producto.id}" class="btn btn-primary"> Agregar al Carrito </button>
          </div>
      </div>`;
    contenedorProductos.appendChild(divProducto);
   
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        img: producto.img

      });
      console.log(carrito)
    });
  });
  
const verCarrito = document.getElementById('verCarrito');
verCarrito.addEventListener('click', () =>{
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header"; 
  modalHeader.innerHTML=`
    <h1 class="modal-header-title">Carrito.</h1>
  `;
  modalContainer.append(modalHeader);

  const modalButton = document.createElement("h1");
  modalButton.innerText = "x"
  modalButton.className = "modal-header-button"

  modalHeader.append(modalButton);

  carrito.forEach((producto) => {
  const carritoContent =  document.createElement("div");
  carritoContent.className = "modal-content";
  carritoContent.innerHTML=`
    <img src="img/${producto.img}.jpg">
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
  `;

  modalContainer.appendChild(carritoContent);
  });

   const total = carrito.reduce((acc,e) => acc + e.precio, 0);
   const totalCompra = document.createElement("div");
   totalCompra.className="total-content";
   totalCompra.innerHTML = `Total a pagar: S/. ${total} soles`

   modalContainer.append(totalCompra);

});



  
  
  
 
  
  
  