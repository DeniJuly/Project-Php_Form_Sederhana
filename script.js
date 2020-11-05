let inputSum = 0;

function getData() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			showData(JSON.parse(this.responseText));
		}
	};
	let url = window.location + "get.php";
	xhttp.open("GET", url, true);
	xhttp.send();
}

function showData(data) {
	const from = document.getElementById("form");
	from.innerHTML = "";
	for (let i = 0; i < data.length; i++) {
		inputSum = inputSum + 1;
		const input = `
        <div class="input-container">
            <div class="input-group">
                <label for="url">Url</label>
                <input type="text" name="url" id="url-${inputSum}" placeholder="type url here" class="input" value="${data[i].url}">
            </div>
            <div class="input-group">
                <label for="kode">Kode</label>
                <textarea name="kode" id="kode-${inputSum}" cols="30" rows="10" class="input">${data[i].kode}</textarea>
            </div>
        </div>`;
		form.insertAdjacentHTML("beforeend", input);
	}
	inputSum = inputSum + 1;
	const input = `
	<div class="input-container">
		<div class="input-group">
			<label for="url">Url</label>
			<input type="text" name="url" id="url-${inputSum}" placeholder="type url here" class="input">
		</div>
		<div class="input-group">
			<label for="kode">Kode</label>
			<textarea name="kode" id="kode-${inputSum}" cols="30" rows="10" class="input"></textarea>
		</div>
	</div>`;
	form.insertAdjacentHTML("beforeend", input);
}

function addInput() {
	inputSum = inputSum + 1;
	const from = document.getElementById("form");
	const input = `
        <div class="input-container">
            <div class="input-group">
                <label for="url">Url</label>
                <input type="text" name="url" id="url-${inputSum}" placeholder="type url here" class="input">
            </div>
            <div class="input-group">
                <label for="kode">Kode</label>
                <textarea name="kode" id="kode-${inputSum}" cols="30" rows="10" class="input"></textarea>
            </div>
        </div>`;
	form.insertAdjacentHTML("beforeend", input);
}

function simpan() {
	let data = [];
	for (let i = 0; i < inputSum; i++) {
		let urlValue = document.getElementById("url-" + (i + 1)).value;
		let kodeValue = document.getElementById("kode-" + (i + 1)).value;
		if (urlValue != "" && kodeValue != "") {
			let inputVal = {
				url: urlValue,
				kode: kodeValue,
			};
			data.push(inputVal);
		}
	}

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			getData();
		}
	};
	let url = window.location + "simpan.php";
	xhttp.open("POST", url, true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("data=" + JSON.stringify(data));
}
this.getData();

setInterval(() => {
	this.getData();
}, 10000);
