<?php
include 'koneksi.php';

$data = json_decode($_POST['data']);
$delete = mysqli_query($koneksi, "DELETE FROM tabel");
if($delete){
    try {
        for ($i=0; $i < count($data); $i++) {
            $url = $data[$i]->url;
            $kode  = $data[$i]->kode;
            $add = mysqli_query($koneksi, "INSERT INTO tabel VALUES('', '$url', '$kode', 1)");
        }
        echo json_encode([
            'success'   => true,
            'data'  => $data
        ]);
    } catch (\Exception $e) {
        echo json_encode([
            'success'   => false,
            'error' => $e,
            'data'  => null
        ]);
    }
} else {
    echo json_encode([
        'success'   => false,
        'data'  => null
    ]);
}