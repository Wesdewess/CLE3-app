<?php
require_once "../../vendor/autoload.php";

$image_url = 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MzUyMzgyNDc1/vladimir-putin-9448807-1-402.jpg';
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
$output = $client->check(['face-attributes'])->set_url($image_url);
if(isset($output->faces[0]->attributes)){
    if ($output->faces[0]->attributes->minor < 0.5) {
        echo "dit is een volwassene ";
    } else {
        echo "dit is een kind ";
    }
    echo ($output->faces[0]->attributes->minor * 100) . "% kind, " . ($output->faces[0]->attributes->male * 100) . "% man, " . ($output->faces[0]->attributes->female * 100) . "% vrouw ";
//var_dump($output->faces[0]->attributes->minor);
} else{
 echo "dit is geen mens ";
}

echo "Het lijkt het meest op: ".$json_response->result->tags[0]->tag->en." en ".$json_response->result->tags[1]->tag->en
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