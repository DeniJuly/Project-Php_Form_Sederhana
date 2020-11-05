<?php 

include 'koneksi.php';
$query = "SELECT * FROM tabel";
$data = mysqli_query($koneksi, $query);

$result = array();
while($item = mysqli_fetch_array($data)){
    $isi = [
        'id' => $item['id'],
        'url' => $item['url'],
        'kode' => $item['kode'],
    ];
    array_push($result, $isi);
}

echo json_encode($result);