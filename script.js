let inputSum = 1;
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
			console.log(this.responseText);
			alert("check console untuk melihat data json");
		}
	};
	let url = window.location + "simpan.php";
	xhttp.open("POST", url, true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("data=" + JSON.stringify(data));
}
