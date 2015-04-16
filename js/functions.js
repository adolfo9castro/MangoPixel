$(document).ready(function(){
	

	$(".start").click(function() {    
		$("#start_game").fadeOut('fast');
	    $("#intrucciones").fadeOut('fast');
    });

    $('#contacto').mouseover(function(){
    	$(this).css('backgroundPosition', '0 35px');
    });

    $('#contacto').mouseleave(function(){
    	$(this).css('backgroundPosition', '0 0');
    });

    $('#contacto').click(function(){
    	$("#formulario_contacto").slideToggle(500);
    	$("#formulario_contacto").show();
    	/*$("#formulario_contacto").animate({
    		marginTop: "-=1060px"
    	});*/
    	//$("#formulario_contacto").fadeIn('fast');
    	//$("#formulario_contacto").slideUp('slow');
    });

    $('#arbol_categorias_abrir').click(function(){		
		$(this).animate({marginLeft: "300px"});
		$("#arbol_categorias").animate({marginLeft: "0px"})	;
		$("#arbol_categorias").show();
		$(this).delay(200);	
		$("#arbol_categorias_cerrar").fadeIn('slow');
		$(this).fadeOut('fast');
		$(this).delay(100);
		$(this).animate({marginLeft: "0px"});
		    	
    });

    $('#arbol_categorias_cerrar').click(function(){
		$(this).animate({marginLeft: "0px"});
		$("#arbol_categorias").animate({marginLeft: "-300px"});
		$("#arbol_categorias").fadeOut('fast');
		$(this).delay(100);
		$("#arbol_categorias_abrir").fadeIn('slow');
		$(this).fadeOut('fast');
		$(this).delay(100);
		$(this).animate({marginLeft: "300px"});
    });

	$("#categoria_uno_btn").click(function(){
    	$("#hijo_uno").slideDown("slow");
  	});

  	$("#categoria_dos_btn").click(function(){
    	$("#hijo_dos").slideDown("slow");
  	});

  	$("#categoria_tres_btn").click(function(){
    	$("#hijo_tres").slideDown("slow");
  	}); 

	$('#contacto')
		.sprite ({fps:2, no_of_frames:7})

})