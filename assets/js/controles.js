function reproducir() {
     document.getElementById("audio1").play();
 }

function pausar() {
	document.getElementById("audio1").pause();
 }

function detener() {
	document.getElementById("audio1").load();
}

function rebobinar() {
	document.getElementById("audio1").currentTime-=3;
}

function adelantar() {
	document.getElementById("audio1").currentTime+=3;
}

function silenciar() {
	document.getElementById("audio1").volume=0;
}

function volumenBajo() {
	document.getElementById("audio1").volume=0.2;
}

function volumenAlto() {
	document.getElementById("audio1").volume=1.0;
}