<?php

// recupero indirizzo file da leggere
$source_url = __DIR__ . '/data.json';

// leggo contenuto del file
$data_json = file_get_contents($source_url);

// dico al file che voglio scrivere in json
header('Content-Type: application/json');
// trasformo in json
echo $data_json;
