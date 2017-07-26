/*
*Author: ITIC. Ruben Cruz Aguilar
*Date: 26-07-2017
*Mail: ruben.crux0706@gmail.com
*/

$(document).ready(function(){
	var count =0;
	var tmpClass;
	var aux;
	var id;
	var maxlenght;
	var valactu;
	$("div.formsCounts div").each(function(){
		tmpClass= $(this).attr("class");
		if(tmpClass != undefined){
			tmpClass =tmpClass.split(" ");
			for(var i = 0; i<tmpClass.length;i++){
				if(tmpClass[i] == "form-group"){
					if($(this).children("input").size() != 0){
						if($(this).children("input").attr("maxlength") != undefined){
							id =$(this).children("input").attr("id");
							maxlenght = $(this).children("input").attr("maxlength");
							valactu =$(this).children("input").val().length;
							obj = new inputCount(id,maxlenght,valactu);
						}
					}else if($(this).children("textarea").size() != 0){
						if($(this).children("textarea").attr("maxlength") != undefined){
							id =$(this).children("textarea").attr("id");
							maxlenght = $(this).children("textarea").attr("maxlength");
							valactu =$(this).children("textarea").val().length;
							obj = new inputCount(id,maxlenght,valactu);
							
						}
					}
				}
			}	
		}
	});
});

function inputCount(id,maxlenght,valactu){	
	this.id=id;
	this.valactu=valactu;
	this.contador = maxlenght;
	this.valor = 0;
	this.parrafo = "";
	this.divCount = "#c"+id;
	
	$('<p class="indicador">Tienes '+(parseInt(this.contador)-parseInt(this.valactu))+' caracteres restantes</p>').appendTo(this.divCount);
	
		$('#'+this.id).on("keydown keyup",function(){
			contador = $("#"+this.id).attr("maxlength");  
        	valor = $('#'+this.id).val().length;  
        	contador = contador - valor;  
        	if(contador < 5 && contador >= 0) {
          		 parrafo = '<p class="advertencia">';  
        	}else if(contador < 0) {  
        		parrafo = '<p class="advertenciaMax">';
        	}else{
           		parrafo = '<p class="indicador">';  
        	}  
        	$("#c"+this.id).html(parrafo + 'Tienes ' + contador + ' caracteres restantes</p>');  
        });
}
