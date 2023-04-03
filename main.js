
document.addEventListener("DOMContentLoaded", function () {


	const titres = document.getElementsByClassName('titre');
	console.log(titres);

	for (const titre of titres) {
		console.log(titre);
	}

	// const para = document.getElementById("contenu");
	// para.textContent = "";



	/* document.addEventListener('keydown', event => {
		if (event.code === 'Space') {
			switch (Math.floor(Math.random() * 3)) {
				case 0:

					para.textContent = "yolo";
					break;
				case 1:

					para.textContent = "hello, ";
					break;
				case 2:

					para.textContent = "world!";
					break;

				default:
					break;
			}

		}
	}) */

	/* para.addEventListener('click', function () {
		fetch("https://api.github.com/users/jules-rotilio").then(res => res.json()).then(
			data => {
				console.log(data);
				for (let row of data){
					console.log(row)
				} 
			}
		)
	}) */

	function sayHello() {
		console.log("hello!");
	}


	var button;
	const form = document.querySelector('form');
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const pseudo = document.getElementById("pseudo").value;
		console.log(pseudo);

		let url = `https://api.github.com/users/${pseudo}`;

		var nb_repos = document.getElementById("repos");
		var lien = document.getElementById("lien-github");
		var image = document.getElementById("image");
		var bio = document.getElementById("bio");

		image.src = "";
		bio.textContent = "";
		lien.href = "#";

		fetch(url).then(response => {
			if (response.status === 404) {
				throw new Error('Utilisateur non trouvé');
			}
			return response.json();
		}).then(
			
			data => {
				image.src = data["avatar_url"];
				bio.textContent = data["bio"];
				lien.href = data["html_url"]
				nb_repos.textContent = data["public_repos"]
			}
		)
	});

});