<?php
$data = $_POST['data'];

$file = fopen('data.json', 'w');
if(!$file) die ( "Error");

fwrite($file, $data);
fclose($file);

$file = file_get_contents('data.json');
print_r($file);