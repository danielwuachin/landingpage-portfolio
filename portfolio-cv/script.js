/* *************************MENU  ********************** */


((d) => {
    const $btnmenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

    $btnmenu.addEventListener("click",(e) => {
        /* esto cambia el icono de 3 rayas por la X */
        $btnmenu.firstElementChild.classList.toggle("none");
        $btnmenu.lastElementChild.classList.toggle("none");
        /* y aqui haces visible los items del menu */
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", e=> {
        if(!e.target.matches(".menu a")) return false;
        /* en esta parte, haces invisible los items y vuleven las 3 rayas al hacer click en un item */
        $btnmenu.firstElementChild.classList.remove("none");
        $btnmenu.lastElementChild.classList.add("none");

        $menu.classList.remove("is-active");
    })
})(document);



/********************** ContactFotm ********************************/ 
((d) => {
    const $form = d.querySelector(".contact-form"),
      $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");
  
    $form.addEventListener("submit", (e) => {
      e.preventDefault();
      $loader.classList.remove("none");
      fetch("https://formsubmit.co/ajax/danielwuachin@gmail.com", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);
          location.hash = "#gracias";
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          let message =
            err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
          $response.querySelector(
            "h3"
          ).innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
          $loader.classList.add("none");
          setTimeout(() => {
            location.hash = "#close";
          }, 3000);
        });
    });
  })(document);