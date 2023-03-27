const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML =`
      <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
  
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
  
    modalbutton.addEventListener("click",() =>{
      modalContainer.style.display = "none";
    });
  
    modalHeader.append(modalbutton);
  
    carrito.forEach((product) =>{
      let carritoContent = document.createElement("div");
      carritoContent.className = "modal-content";
      carritoContent.innerHTML = `
        <img src="img/${product.img}.jpg">
        <h3>${product.nombre}</h3>
        <p>${product.precio}</p>
        <p>Cantidad: ${product.cantidad}</p>
        <p>Total: ${product.cantidad * product.precio}</p>
        <span class="delete-product">❌</span>

      `;
  
      modalContainer.append(carritoContent);

      let eliminar = carritoContent.querySelector(".delete-product");

      eliminar.addEventListener("click",()=>{
        eliminarProducto(product.id);
      });

  });


  
    const total = carrito.reduce((acc,e) => acc + e.precio * e.cantidad, 0);
  
     totalCompra = document.createElement("div");
     totalCompra.className = "total-content";
     totalCompra.innerHTML =`Total a pagar: S/. ${total} nuevos soles.`;
     modalContainer.append(totalCompra);
  };

verCarrito.addEventListener("click",pintarCarrito);


const eliminarProducto = (id) => {
  const foundId  = carrito.find((element) => element.id === id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });
  pintarCarrito();
};




   