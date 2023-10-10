function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
//linea de tiempo
var items = document.querySelectorAll(".timeline li");
// code for the isElementInViewport function 
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

//imagen de linea de tiempo
document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll("li[data-img]");

    timelineItems.forEach((item) => {
        item.addEventListener("click", () => {
            const imgUrl = item.getAttribute("data-img");
            abrirImagen(imgUrl);
        });
    });

    function abrirImagen(url) {
        // Crea un elemento de imagen y configúralo con la URL
        const imgElement = document.createElement("img");
        imgElement.src = url;

        // Crea un div para el fondo oscuro y la imagen
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.appendChild(imgElement);

        // Agrega el div al cuerpo del documento
        document.body.appendChild(overlay);

        // Agrega un evento de clic para cerrar la imagen al hacer clic en el fondo oscuro
        overlay.addEventListener("click", () => {
            document.body.removeChild(overlay);
        });
    }
});
