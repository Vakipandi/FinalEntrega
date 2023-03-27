const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer= document.getElementById("modal-container");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


productos.forEach((product) =>{
  let content = document.createElement("div");
  content.className ="card";
  content.innerHTML = `
  <img src="img/${product.img}.jpg">
  <h3 class="nombre-producto">${product.nombre}</h3>
  <p class="price">S/. ${product.precio} soles</p>
  `;

  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "Comprar";
  comprar.className= "comprar"

  content.append(comprar);

  comprar.addEventListener("click", () => {

    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if(repeat){
      carrito.map((prod) =>{
        if(prod.id === product.id){
          prod.cantidad++;
        }
      })
    }else{

    carrito.push({
      id : product.id,
      img: product.img,
      nombre: product.nombre,
      precio: product.precio,
      cantidad:product.cantidad,
    });
    guardarLocal();
    console.log(carrito);
  }

  Toastify({
    text: `Se agregó ${product.cantidad} ${product.nombre} al carrito`,
    duration: 1000,
    close: true,
    gravity: "top",
    position: "center",

   
  }).showToast();
  
  })
});

guardarLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};




 





