<?php


$image_url = 'https://www.dogingtonpost.com/wp-content/uploads/2014/04/walkingthedog2.jpg';
$api_credentials = array(
    'key' => 'acc_88d815b6f396a9d',
    'secret' => '44a387e30ddec57f1e5d982026b07e89'
);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.imagga.com/v2/tags?image_url='.urlencode($image_url));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);
curl_setopt($ch, CURLOPT_USERPWD, $api_credentials['key'].':'.$api_credentials['secret']);

$response = curl_exec($ch);
curl_close($ch);

$json_response = json_decode($response);

use \Sightengine\SightengineClient;
$client = new SightengineClient('1777949695', 'cWYRzhuS2FQPjEvpPSJz');
$output = $client->check(['{model}'])->set_url('https://d3m9459r9kwism.cloudfront.net/img/examples/example7.jpg');
$minor_response = json_decode($output);
vardump($minor_response);
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Photos</title>
</head>
<body>

    <img src="<?= $image_url; ?>"/>

</body>
</html>

<?php
//var_dump($json_response);