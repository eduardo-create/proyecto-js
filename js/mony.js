// Simulador de prestamo


nuevaPersona = JSON.parse(localStorage.getItem("persona"));
//console.log(nuevaPersona)
// for (element of nuevaPersona) {
//   //console.log(element);
// }

function recogerDatos() {


  //array para almacenar datos de cliente 
  const persona = [];


  let form = document.forms["registro"];
  //VARIABLES PARA OBTENER DATOS INGRESADOS 
  let nombreUsuario = $("#nombre1").val();
  let documentoUsuario = $("#documento").val();
  let monto = parseInt($("#monto").val());
  let cuota = parseInt($("#cuotas").val());
  let valorCuota;

  //VALIDACION DE CAMPOS
  if (nombreUsuario.length == 0 || documentoUsuario.length == 0 || cuota.length == 0 || monto.length == 0) {
    
    return Swal.fire("Debes completar todos los campos", {
      buttons: [true]
    });
    //OCULTAR BOTON 
  }else{ $("#calcular").css('visibility','hidden');

  }

  

  //CONSTRUCTOR DE OBJETO
  class Personas {
    constructor(nombre, documento, ) {
      this.nombre = nombre;
      this.documento = documento;

    }
  }


  //CALCULAMOS EL VALOR DE LA CUOTA SEGUN EL MONTO INGRESADO
  function calcularCuota() {


    if (monto > 100000) {
      
      return Swal.fire("Te puedo prestar hasta 100.000$", {
        buttons: [true],
      });
    }

    if (cuota <= 11) {
      porcentaje = 1.3;
    } else {
      porcentaje = 1.6;
    }
    return valorCuota = (monto * porcentaje) / cuota;

  }

  calcularCuota();


  montoTotal = valorCuota * cuota;

  //SE CREA LA VARIABLE Y SE MUESTRA EL RESULTADO DE LA OPERACION EN EL DOM 

  let mensajeFinal = document.createElement("div");
  mensajeFinal.innerHTML = `<table class="table table-primary table-striped text-center">
  <thead>
  <tr>
    <th scope="col">Documento</th>
    <th scope="col">Nombre</th>
    <th scope="col">Monto del prestamo</th>
    <th scope="col">Valor de cuota</th>
    <th scope="col">Me devolves</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">${documentoUsuario}</th>
    <td scope="row">${nombreUsuario}</td>
    <td scope="row">${monto} $</td>
    <td scope="row">${valorCuota} $</td>
    <td scope="row">${montoTotal} $</td>
  </tr>
</tbody>
</table>`;
  

$("#calculoResultado").append(mensajeFinal);



  //se crea el objeto 
  const persona1 = new Personas(nombreUsuario, documentoUsuario);

  //pusheamos los datos 
  persona.push(persona1);
  console.log(persona)

  let nuevaPersona = localStorage.setItem("persona", JSON.stringify(persona));


}

//OBTENIENDO DATOS DE API DOLAR  

$("#dolar").click(function () {
  $.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales", function (posts) {
    console.log(posts);
    Swal.fire({
      type: 'info',
      title: 'Dólar Compra / Venta:',
      text: posts[0].casa.compra + " - " + posts[0].casa.venta,
      footer: '<a href=https://www.dolarsi.com/ target="_blank">¿Necesitas saber otras cotizaciones? Hace click acá.</a>'
    });
  });
});

//BOTON "IR ARRIBA"
jQuery(function ($) {
  "use strict";
  var $window = $(window);
 
  var $root = $("html, body");
  

  $("body").append('<a href="#" class="back-top"><i class="bi bi-arrow-up-circle"></i></a>');
  var amountScrolled = 300;
  var backBtn = $("a.back-top");
  $window.on("scroll", function () {
     if ($window.scrollTop() > amountScrolled) {
        backBtn.addClass("back-top-visible");
     } else {
        backBtn.removeClass("back-top-visible");
     }
  });
  backBtn.on("click", function () {
     $root.animate({
        scrollTop: 0
     }, 300);
     return false;
  });

});








