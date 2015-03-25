$(".ajax-content-loader").remove();
$(document).ready(function(){

	$(".fulltext-search-box").val("Encuentra todo para tu +KOTA");
	$('#newsletterClientEmail').val('Ingresa tu email');
});

$(window).load(function(){
	// Sticky header
	var ayudas = $(".encabezado").offset().top;
	console.log(ayudas);


	$(window).on("scroll", function(){
		if ( $(window).scrollTop() > ayudas){
			console.log("entro a la altura");
			$(".encabezado").addClass("encabezadoFijo");
			$(".menuPrincipal").addClass("menuFijo");
			$(".menuFijo").slideUp();
			$(".contenedorPrincipal").addClass("contenidoFijo");
		}else{
			$(".encabezado").removeClass('encabezadoFijo');
			$(".menuPrincipal").removeClass('menuFijo');
			$(".menuPrincipal").slideDown();
			$(".contenedorPrincipal").removeClass("contenidoFijo");
		}
	});
	//Fin sticky header

	//Desplegar y contraer el menu principal
	$(".menuFijoEncabezado").click(function(){
		if($(".menuPrincipal").css("display") == "none"){
			$(".menuPrincipal").slideDown();
		}else{
			$(".menuPrincipal").slideUp();
		}
	});
	//Fin desplegar y contraer el menu principal
});