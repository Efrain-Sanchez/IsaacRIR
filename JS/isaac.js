const objectArray = [
	(img1 = {
		ruta: "../IMG/experimento.jpeg",
		tituloDeImagen: "EXPERIMENTO",
		descripcion: "Preaparacion de Xanteno, colorante Eosina en Laboratorio",
		id: 1,
	}),
	(img2 = {
		ruta: "../IMG/interior.jpeg",
		tituloDeImagen: "Interior de museo",
		descripcion: "Lorem ipsum dolor ed itsen itum",
		id: 2,
	}),
	(img3 = {
		ruta: "../IMG/girasol.jpeg",
		tituloDeImagen: "Girasoles en el campo",
		descripcion: "Lorem ipsum dolor ed itsen itum",
		id: 3,
	}),
	(img4 = {
		ruta: "../IMG/globo.jpeg",
		tituloDeImagen: "Universal Studios",
		descripcion: "Lorem ipsum dolor ed itsen itum",
		id: 4,
	}),
	(img5 = {
		ruta: "../IMG/pug.jpeg",
		tituloDeImagen: "PUG",
		descripcion: "Lorum Ipsum dolor et itum",
		id: 5,
	}),
	(img6 = {
		ruta: "../IMG/libro.jpeg",
		tituloDeImagen: "Book and beach",
		descripcion: "lorem ipsum dolor et itum",
		id: 1,
	}),
];

// const callGenerator = generador(objectArray[1]);
const modal = $("#modal");
const firstImg = $("#show");

// firstImg.addEventListener("", setDisplay(modal));

function generador(objeto) {
	const img = $("#img").setAttribute("src", `${objeto.ruta}`);
	const p = $("#p");
	const h1 = $("#h1");
	h1.textContent = `${objeto.tituloDeImagen}`;
	p.textContent = `${objeto.descripcion}`;
}

function setDisplay(objetoModal) {
	objetoModal.style.display = "grid";
}
function setOutDisplay(objetoModal) {
	objetoModal.style.display = "none";
}

function $(selector) {
	return document.querySelector(selector);
}
