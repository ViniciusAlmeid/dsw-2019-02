// Par/ímpar
function parImpar() {
	
	var n = parseInt(document.getElementById("numero").value);
	
	if (n % 2 == 0) {
		document.getElementById("saida").innerHTML = 
			"O número " + n + " é par.";
	} else {
		document.getElementById("saida").innerHTML = 
			"O número " + n + " é ímpar.";
	}
	
}

