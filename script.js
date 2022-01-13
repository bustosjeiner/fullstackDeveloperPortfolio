let auxVar = true;
let mainPosition = window.pageYOffset; 
const $nav = document.querySelector(".header");
const form = document.querySelector('#form');

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
