var nombreColores = [
	'rgba(107, 116, 82, 0.664)',
	'rgba(107, 116, 82, 0.664)',
	'rgba(107, 116, 82, 0.664)',
	'rgba(107, 116, 82, 0.664)',
	'rgba(107, 116, 82, 0.664)',
	'rgba(107, 116, 82, 0.664)',
	'rgba(107, 116, 82, 0.664)',


];

var imagenColores = [
	'url(lechuga.png)',
	'url(rucula.png)',
	'url(espinaca.png)',
	'url(kale.png)',
	'url(tomate.png)',
	'url(lechuga.png)',
	'url(lechuga.png)',

];

var nombreVerduras = ['Lechuga', 'Rucula', 'Espinaca', 'Kale', 'Cherry', 'Acelga', 'perejil'];
var colorPersonalizado = document.getElementById('color-personalizado');
var grillaPixeles = $('#grilla-pixeles');
var paleta = $('#paleta');
var clickApretado = false;



colorPersonalizado.addEventListener('change',
	(function () {
		colorActual = colorPersonalizado.value;
		colorActualNombre = colorPersonalizado.innerHTML;
		cambiarColorIndicado(colorActualNombre, colorActual);
	})
);




// Mis funciones
function cambiarColorIndicado(nombreColor, color, imagen) {
	$('#indicador-de-color').css('background-color', color);
	$('#indicador-de-color').css('background-image', imagen);
	$('#indicador-de-color').innerHTML(nombreColor);
}

function crearPaletaDeColores() {
	for (var i = 0; i < nombreColores.length; i++) {
		var color = $(document.createElement('div'));

		color.addClass('color-paleta');
		color.css('background-color', nombreColores[i]);
		color.css('background-image', imagenColores[i]);
		color.html(nombreVerduras[i]);
		color.click(function () {
			var backgroundColor = $(this).css('background-color');
			var backgroundImage = $(this).css('background-image');
			cambiarColorIndicado(nombreVerduras[i], backgroundColor, backgroundImage);
		});
		paleta.append(color);
	}
}

// Agregar if para que no pinte cuando no se seleccione ningun color
function pintar() {
	var selectedColor = $('#indicador-de-color').css('background-color');
	var selectedImage = $('#indicador-de-color').css('background-image');
	$(this).css('background-color', selectedColor);
	$(this).css('background-image', selectedImage);
	$(this).css('background-size', '100% 100%');
	$(this).css('background-repeat', 'no-repeat');
	$(this).css('background-blend-mode', 'lighten');

}

function crearGrillaPixeles() {
	for (var i = 0; i < 30; i++) {
		var pixel = $(document.createElement('div'));
		pixel.addClass("plantas");
		pixel.click(pintar);

		pixel.hover(function () {
			if (clickApretado) {
				// TODO refactorizar en la funcion pintar
				var selectedColor = $('#indicador-de-color').css('background-color');
				$(this).css('background-color', selectedColor);
			}
		});

		grillaPixeles.append(pixel);
	}
}

// Se encarga de borrar todos los pixeles de la grilla al hacer click en el boton
$('#borrar').click(function () {
	$('#grilla-pixeles div').each(function (pixel) {
		$(this).animate({ 'background-color': 'transparent' }, 'slow');
	})
});


// Guardar grilla de pixeles como una imagen
$('#guardar').click(function () {
	alert("Su siembre fue ingresada. En las proximas 24 horas podra visualizarla")
});

// Crear componentes del Proyecto
crearPaletaDeColores();
crearGrillaPixeles();

$('body').mousedown(function () { clickApretado = true; });
$('body').mouseup(function () { clickApretado = false; });

$(document).ready(function () {
	var overlay = $('#overlay');
	overlay.on('click', function (e) {
		overlay
			.hide()
			.off();
	});
});