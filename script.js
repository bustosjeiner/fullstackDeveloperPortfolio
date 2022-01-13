let auxVar = true;
let mainPosition = window.pageYOffset; 
const $nav = document.querySelector(".header");
const form = document.querySelector('#form');

/*window.addEventListener("scroll", () => {
  let actualMovement = window.pageYOffset;

  if(mainPosition >= actualMovement) {
      $nav.style.top = "0px";
      $nav.style.boxShadow = "0px 5px 5px rgba(46, 46, 46, 0.25)";
  } 
  else {
      $nav.style.top = "-40px";
      $nav.style.boxShadow = "none";
  }
  mainPosition = actualMovement;
});*/

function showmenu() {
  if(auxVar) {
    document.querySelector('.nav-bar').style.right = "0";
    document.querySelector('#icon-menu').classList.replace('icon-bgr-menu', 'icon-cancel');
    auxVar = false;
  }
  else {
    document.querySelector('.nav-bar').style.right = "-100vw";
    document.querySelector('#icon-menu').classList.replace('icon-cancel', 'icon-bgr-menu');
    auxVar = true;
  }
}

form.addEventListener('submit', handleSubmit);
    
async function handleSubmit(event) {
  event.preventDefault();
  const status = document.querySelector("#status");
  const data = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: data,
    headers: {  
        'Accept': 'application/json'
    }
  });

  if (response.ok) {
    status.innerHTML = "Gracias por contactarte conmigo. El mensaje fue envuado satisfactoriamente";
    this.reset();
  }
  else {
    status.innerHTML = "Oops! Ha ocurrido un error al enviar el formulario";
  }
}
