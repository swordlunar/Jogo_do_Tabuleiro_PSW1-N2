var passoAtual=0;
function sortearNumero(){
	
	var numeroSorteado = (Math.floor(Math.random() * 6))+ 1;

	document.getElementById("IpNumeroSorteado").value = numeroSorteado;

	 passoAtual += numeroSorteado;

	 passoAtual = eval(passoAtual);

	document.getElementById("IpPassoAtual").value = passoAtual;

	mover(passoAtual,numeroSorteado);


}

function mover(passoAtual,numeroSorteado){
	var coordenada;
	
	coordenada = $("#Pos"+passoAtual+"").offset();

	$(".player").animate({
		top: coordenada.top,
		left:coordenada.left,
	}, 800);

}

