let greetingBtn = document.querySelectorAll('.greeting__btn');

const range = document.getElementById('range');
const rainPercent = document.getElementById('range_value');
const rainyHome = document.getElementById('rainyhome');
const rainyForest = document.getElementById('rainyforest');
const sunnyHome = document.getElementById('sunnyhome');
const sunnyForest = document.getElementById('sunnyforest');

let benefitHomeOut = document.getElementById('benefit-home');
let benefitForestOut = document.getElementById('benefit-forest');
let result = document.getElementById('result');
let resultImg = document.getElementById('result-img');



function Calculate() {
	if (rainPercent.value && rainyForest.value && rainyHome.value && sunnyForest.value && sunnyHome.value) {
		
		let benefitHome = parseInt(rainPercent.value)/100 * parseInt(rainyHome.value) + (1 - (parseInt(rainPercent.value)/100)) * parseInt(sunnyHome.value);
		let benefitForest = parseInt(rainPercent.value)/100 * parseInt(rainyForest.value) + (1 - (parseInt(rainPercent.value)/100)) * parseInt(sunnyForest.value);
		
		benefitForestOut.textContent = `Benefit forest: ${benefitForest.toFixed(2)}`;
		benefitHomeOut.textContent = `Benefit home: ${benefitHome.toFixed(2)}`;

		if (parseInt(rainPercent.value) > 60 && benefitForest >= benefitHome) {
			resultImg.setAttribute("src", "img/rainyForest.jpg");
			result.textContent = "The possibility of rain is very high and you love going to a forest while it's raining so I wish you a good walk for you!";
		}
		else if (parseInt(rainPercent.value) > 60 && benefitForest <= benefitHome) {
			resultImg.setAttribute("src", "img/rainyHome.jpg");
			result.textContent = "The possibility of rain is very high and I see you love a cosy plaid and a cup of tea while it's raining so good luck staying at home!";
		}
		else if (parseInt(rainPercent.value) < 60 && benefitForest <= benefitHome) {
			resultImg.setAttribute("src", "img/sunnyHome.jpg");
			result.textContent = "The possibility of rain is low or mid and I see you love a cosy plaid and a cup of tea while it's sunny so good luck staying at home!";
		}
		else if (parseInt(rainPercent.value) < 60 && benefitForest >= benefitHome) {
			resultImg.setAttribute("src", "img/sunnyForest.jpg");
			result.textContent = "The possibility of rain is low or mid and I see you love going to a forest while it's sunny so I wish you a good walk for you!";
		}
		else {alert("Please select stop it")}

		document.getElementById("result-section").classList.remove("disabled");
		document.getElementById("greetings").classList.add("blur");
		document.getElementById("main").classList.add("blur");

	}
	else {alert("Please, select the possibility of rain and fill all the input fields ;)")}
}


function ShowInput() {
	document.getElementById('main__heading').classList.remove('hidden');

	setTimeout(() => document.getElementById('main__start').classList.remove('hidden'), "3000");
	setTimeout(() => {
		document.querySelector('.table__wrapper').classList.remove('hidden');
		document.querySelector('.input__content').classList.remove('hidden');
		document.getElementById('calculate').classList.remove("hidden");
		document.querySelector('.input__content').classList.add('animated');
		document.querySelector('.table__wrapper').classList.add('animated');
	}, "3800");
}

function CloseResult() {
	document.getElementById("result-section").classList.toggle("disabled");
	document.getElementById("greetings").classList.remove("blur");
	document.getElementById("main").classList.remove("blur");
}

function updateTextInput() {
	rainPercent.value = `${range.value}%`;
}


greetingBtn.forEach((btn) => {btn.addEventListener("click", ShowInput)})
range.addEventListener("change", updateTextInput);
document.getElementById('result-btn').addEventListener("click", CloseResult);
document.getElementById('calculate').addEventListener("click", Calculate)