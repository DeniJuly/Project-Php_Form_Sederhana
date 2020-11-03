<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php Form Sederhana</title>
    <!-- Style -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div id="form">
            <div class="input-container">
                <div class="input-group">
                    <label for="url">Url</label>
                    <input type="text" name="url" id="url-1" placeholder="type url here" class="input" />
                </div>
                <div class="input-group">
                    <label for="kode">Kode</label>
                    <textarea name="kode" id="kode-1" cols="30" rows="10" class="input"></textarea>
                </div>
            </div>
        </div>
        <div class="btn-group">
            <button class="btn btn-add" onclick="addInput()">Tambah</button>
            <button class="btn btn-simpan" onclick="simpan()">Simpan</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>