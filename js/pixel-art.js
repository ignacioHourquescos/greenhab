var nombreColores = [
  'rgba(87, 116, 7, 0.664)', 
  'rgba(45, 218, 55, 0.233)', 
  'rgba(142, 170, 67, 0.507)',

  'rgba(44, 226, 68, 0.507)',
  'rgba(226, 80, 44, 0.507)',
  'rgba(102, 121, 66, 0.507)',
  'rgba(248, 119, 45, 0.233)',
];

var nombreVerduras = ['Lechuga', 'Rucula','Kale', 'Espinaca', 'Cherry', 'Acelga', 'perejil'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    colorActualNombre =colorPersonalizado.innerHTML;

    // Completar para que cambie el indicador-de-color al colorActual
    cambiarColorIndicado(colorActualNombre,colorActual);
  })
);

// Mis variables Globales
var grillaPixeles = $('#grilla-pixeles');
var paleta = $('#paleta');
var clickApretado = false;

// Mis funciones
function cambiarColorIndicado(nombreColor, color)
{
  $('#indicador-de-color').css('background-color', color);
  $('#indicador-de-color').innerHTML(nombreColor);

}

function crearPaletaDeColores()
{
  for (var i = 0; i < nombreColores.length; i++)
  {
     var color = $(document.createElement('div'));
     
     color.addClass('color-paleta');    
     color.css('background-color', nombreColores[i]);
     color.html(nombreVerduras[i]);
     color.click(function() {
       var backgroundColor = $(this).css('background-color');
       cambiarColorIndicado(nombreVerduras[i],backgroundColor);
     });

     paleta.append(color);
  }
} 

// Agregar if para que no pinte cuando no se seleccione ningun color
function pintar() {
  var selectedColor = $('#indicador-de-color').css('background-color');
  $(this).css('background-color', selectedColor);
  $(this).css('background-image', 'url(lechuga.png)');
  $(this).css('background-size', '100% 100%');
  $(this).css('background-repeat', 'no-repeat');
  $(this).css('background-blend-mode', 'lighten');

}

function crearGrillaPixeles()
{
  for (var i = 0; i < 30; i++)
  {
    var pixel = $(document.createElement('div'));
    pixel.addClass("plantas");
    pixel.click(pintar);    

    pixel.hover(function() {
      if(clickApretado)
      {
        // TODO refactorizar en la funcion pintar
        var selectedColor = $('#indicador-de-color').css('background-color');
        $(this).css('background-color', selectedColor);
      }
    });

    grillaPixeles.append(pixel);
  }
}

// Se encarga de borrar todos los pixeles de la grilla al hacer click en el boton
$('#borrar').click(function() {
  $('#grilla-pixeles div').each(function(pixel) {
    $(this).animate({ 'background-color': 'transparent'}, 'slow');
  })
});

// Cargar un Superheroe en la grilla de pixeles
$('#batman').click(function() {
  cargarSuperheroe(batman);
});

$('#wonder').click(function() {
  cargarSuperheroe(wonder);
});

$('#flash').click(function() {
  cargarSuperheroe(flash);
});

$('#invisible').click(function() {
  cargarSuperheroe(invisible);
});

// Guardar grilla de pixeles como una imagen
$('#guardar').click(function() {
  alert("Su siembre fue ingresada. En las proximas 24 horas podra visualizarla")
});

// Crear componentes del Proyecto
crearPaletaDeColores();
crearGrillaPixeles();

$('body').mousedown(function() { clickApretado = true; });
$('body').mouseup(function() { clickApretado = false; });