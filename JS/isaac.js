console.log("Hola");
const img1 = {
	ruta: "../IMG/experimento.jpeg",
	tituloDeImagen: "EXPERIMENTO",
	descripcion: "Preaparacion de Xanteno, colorante Eosina en Laboratorio",
};
const callGenerator = generador(img1);

function generador(objeto) {
	const img = $("#img").setAttribute("src", `${objeto.ruta}`);
	const p = $("#p");
	const h1 = $("#h1");
	h1.textContent = `${objeto.tituloDeImagen}`;
	p.textContent = `${objeto.descripcion}`;
}

function $(selector) {
	return document.querySelector(selector);
}
