var cont = 1;
var passoAtual=0;


function sortearNumero(){

	cont ++;
	
	var numeroSorteado = (Math.floor(Math.random() * 6))+ 1;

	document.getElementById("IpNumeroSorteado").value = numeroSorteado;

	 passoAtual += numeroSorteado;

	 passoAtual = eval(passoAtual);

	document.getElementById("IpPassoAtual").value = passoAtual;

	mover(passoAtual,numeroSorteado);


}

function mover(passoAtual,numeroSorteado){

	if (passoAtual >= 36) {
		var coordenada = $("#Pos36").offset();
		alert("Voçê Ganhou");

	}else{
		var coordenada = $("#Pos"+passoAtual+"").offset();
	}
	

	$(".player").animate({
		top: coordenada.top,
		left:coordenada.left,
	}, 2000);

}

