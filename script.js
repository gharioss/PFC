document.addEventListener('DOMContentLoaded', () => {
	let bot = ''
	let random;
	let botChoice = document.getElementById('botChoice')
	botChoice.style.backgroundImage = "url('Images/point.png')";
	let result = document.getElementById('result')

	Array.from(document.getElementsByClassName('choice')).forEach(i => {
		i.addEventListener('click', () => {
			random = Math.floor(Math.random() * 3)
			if (random == 0) {
				bot = "pierre"
				botChoice.style.backgroundImage = "url('Images/pierre.png')";
			} else if (random == 1) {
				bot = "feuille"
				botChoice.style.backgroundImage = "url('Images/feuille.png')";
			} else {
				bot = "ciseau"
				botChoice.style.backgroundImage = "url('Images/ciseaux.png')";
			}
			console.log(bot)
			if (i.id == "pierre" && bot == "pierre" || i.id == "feuille" && bot == 'feuille' || i.id == 'ciseau' && bot == 'ciseau') {
				result.textContent = 'Draw'
				result.style.color = "#74BBE4"
			} else if (i.id == "pierre" && bot == "ciseau" || i.id == "feuille" && bot == 'pierre' || i.id == 'ciseau' && bot == 'feuille') {
				result.textContent = 'Won'
				result.style.color = "#AACE3A"
			} else {
				result.textContent = 'Lost'
				result.style.color = "#C60030"
			}
		})
	})
})