var cont = 1;
var scorePlayer0=0;
var scorePlayer1=0;


function sortearNumero(){
	var passoAtual=0;

	cont ++;
	
	var numeroSorteado = (Math.floor(Math.random() * 6))+ 1;

	document.getElementById("IpNumeroSorteado").value = numeroSorteado;

	

	if (cont % 2 == 0) {
		var pin = 0;
		scorePlayer0 += numeroSorteado;
		scorePlayer0 = eval(scorePlayer0);
		document.getElementById("IpPassoAtual").value = scorePlayer0;
		mover(scorePlayer0,numeroSorteado,pin);
	}else{
		var pin = 1;
		scorePlayer1 += numeroSorteado;
		scorePlayer1 = eval(scorePlayer1);
		document.getElementById("IpPassoAtual").value = scorePlayer1;
		mover(scorePlayer1,numeroSorteado,pin);
	}



	//document.getElementById("IpPassoAtual").value = passoAtual;

	



}

function mover(passoAtual,numeroSorteado,pin){


	if (passoAtual >= 36) {
		var coordenada = $("#Pos36").offset();
		alert("Voçê Ganhou");

	}else{
		var coordenada = $("#Pos"+passoAtual+"").offset();
	}
	

	$(".player"+pin+"").animate({
		top: coordenada.top,
		left:coordenada.left,
	}, 2000);

}

