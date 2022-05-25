//INGRESO
//array en el cual deben de agregarse lo que se ponga en el input
let capacidad = [];
let number = "";
//resultado de la suma
let total = 0;
// aca puse para que se active la funcion luego de dar al boton
document.getElementById("enviar").onclick = function (e) {
  e.preventDefault()
  Swal.fire({
    title: "Se cargo tu respuesta",
    Text: "Se cargo correctamente tu respuesta, Enseguida obtendras una respuesta",
    icon: "sucess",
    confirmButtonText: "Genial!",
  });
  IngresarValores();
};
//la funcion consiste en que cada vez que se agrega algo al input, lo agregue al array, una vez que se agregue al array se deben de sumar y dar un resultado
function IngresarValores() {
  let reserva = parseInt(document.getElementById("reservar").value);
  capacidad.push(reserva);
  total = capacidad.reduce((acc, el) => acc + el, 0);
  console.log(total);


  function hayEspacioo() {
    alert("hay espacio");
    let persona = ["Art And Craft", "Mesa X", "escanee Qr para ver la carta,"];
    frase = `Bienvenido a ${persona[0]} ingrese por favor a la ${persona[1]} ${persona[2]}`;
    alert(frase);
  }
  total <= 100 ?
    alert(hayEspacioo()) :
    alert("no hay espacio, por favor reserve un turno");
};
//RESERVA
let nombre = "";
let apellido = "";
let fechaReserva = "";
let horaReserva = "";

let reservaUser = [];

class objetoReserva {
  constructor(nombre, apellido, fecha, hora) {
    this.nombreUsuario = nombre;
    this.apellidoUsuario = apellido;
    this.fechaUsuario = fecha;
    this.horaUsuario = hora;
  }
};

document.getElementById("btn_reserva").addEventListener("click", tomarDatos);

function tomarDatos() {
  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  fechaReserva = document.getElementById("fecha").value;
  horaReserva = document.getElementById("hora").value;

  const oReserva = new objetoReserva(
    nombre,
    apellido,
    fechaReserva,
    horaReserva
  );
  reservaUser.push(oReserva);
  imprimirReserva(oReserva)
};

function imprimirReserva(oReserva) {
  console.log(oReserva);
  const {
    nombreUsuario,
    apellidoUsuario,
    fechaUsuario,
    horaUsuario
  } = oReserva
  document.getElementById("nombreReserva").value = nombreUsuario;
  document.getElementById("nombreReserva").style.visibility = "visible";
  document.getElementById("apellidoReserva").value = apellidoUsuario;
  document.getElementById("apellidoReserva").style.visibility = "visible";
  document.getElementById("fechaReserva").value = fechaUsuario;
  document.getElementById("fechaReserva").style.visibility = "visible";
  document.getElementById("horaReserva").value = horaUsuario;
  document.getElementById("horaReserva").style.visibility = "visible";
};

//RESERVAS YA CREADAS
let reservascreadas = document.querySelector(".reservascreadas")

fetch("./reservascreadas.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
    reservascreadas.innerHTML += `<h3>${element.first_name}</h3>
    <h2>${element.mail}</h2>`;
    });
    console.log(data);
  });