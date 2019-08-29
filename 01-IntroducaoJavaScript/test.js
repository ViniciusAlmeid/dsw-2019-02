/*
 * Exemplo alert
 */
function saudacoes() {
  alert("Olá!");
}

/*
 * Exemplo switch
 */
function teste() {
	var a = document.querySelector("#diaSemana").value;

	switch (a) {
		case "1":
			document.getElementById("saida").innerHTML = "Domingo";
			break;
		case "2":
			document.getElementById("saida").innerHTML = "Segunda";
			break;
		case "3":
			document.getElementById("saida").innerHTML = "Terça";
			break;
	}
}


/*
 * Exercício 01
 */
function dobro() {
    var n = parseInt(document.getElementById("numero").value);
    document.getElementById("saida").innerHTML = "Dobro: " + (2 * n);
}

function triplo() {
    var n = parseInt(document.getElementById("numero").value);
    document.getElementById("saida").innerHTML = "Triplo: " + (3 * n);
}



/*
 * Exercício 02
 */
function par() {
    var n = parseInt(document.getElementById("numero").value);

    if (n % 2 == 0)
        document.getElementById("saida").innerHTML = "O número é par.";
    else
        document.getElementById("saida").innerHTML = "O número é ímpar.";
}


/*
 * Exercício 03
 */
function primo() {

    var n = parseInt(document.getElementById("numero").value);

    var primo = true;

	if (n > 2) {
		for (var i = 2; i < n; ++i) {
		    if (n % i == 0) {
		        primo = false;
		        break;
		    }
		}
	}

    if (primo)
        document.getElementById("saida").innerHTML = "O número é primo";
    else
        document.getElementById("saida").innerHTML = "O número não é primo";

}
