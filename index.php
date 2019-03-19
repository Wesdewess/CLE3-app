<?php
require_once "vendor/autoload.php";
use \Sightengine\SightengineClient;


if ($_SERVER['REQUEST_METHOD'] === 'POST' && count($_POST) && (strpos($_POST['img'], 'data:image/png;base64') === 0)) {

    $img = $_POST['img'];
    $img = str_replace('data:image/png;base64,', '', $img);
    $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);
    $file = 'uploads/img'.date("YmdHis").'.png';

    if (file_put_contents($file, $data)) {
        echo "<p>The canvas was saved as $file.</p>";
        sightengineResponse($file);
    } else {
        echo "<p>The canvas could not be saved.</p>";
    }

}
function sightengineResponse($a){
    $client = new SightengineClient('1777949695', 'cWYRzhuS2FQPjEvpPSJz');
    $output = $client->check(['face-attributes'])->set_file($a);
    if (isset($output->faces[0]->attributes)) {
        if ($output->faces[0]->attributes->minor < 0.5) {
            echo "dit is een volwassene ";
        } else {
            echo "dit is een kind ";
        }
        echo ($output->faces[0]->attributes->minor * 100) . "% kind, " . ($output->faces[0]->attributes->male * 100) . "% man, " . ($output->faces[0]->attributes->female * 100) . "% vrouw ";
        //var_dump($output->faces[0]->attributes);
    } else {
        echo "er wordt geen mens herkend in deze foto ";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="includes/style.css">
    <script src="includes/audio/sounds.js" type="text/javascript"></script>
</head>

<body>
    <div id="mapview">
    <canvas id="map"></canvas>
    </div>

    <div id="webcam">
     <video autoplay="true" id="videoElement"></video>
     <canvas id="captured" hidden="hidden"></canvas>
     <form method="post" action="" onsubmit="prepareImg();">
        <input id="inp_img" name="img" type="hidden" value="">
        <button id="save" type="submit" value="Upload"></button>
     </form>

    <button class="button" id="button">button</button>
    </div>

<script>
    const button = document.getElementById('button');
    button.addEventListener('click', sounds.hoi);

    let video = document.querySelector("#videoElement");

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true})
            .then(function(stream) {
                video.srcObject = stream;
            })
            .catch(function(err0r) {
                alert("Something went wrong!");
            });
    }

    let canvas = document.getElementById("captured")
    let save = document.getElementById("save")
    save.innerHTML = "Check"

    save.onclick = function() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
    }

    function prepareImg() {
        let canvas = document.getElementById('captured');
        document.getElementById('inp_img').value = canvas.toDataURL();
    }


    //draw map on canvas
    let canvas1 = document.getElementById('map')
    let w = 960;
    let h = 1080;
    canvas1.width  = w;
    canvas1.height = h;
    if (canvas1.getContext) {
        let map = canvas1.getContext('2d');

        map.fillRect(480, 1000, 30, 30);
        map.rotate(20 * Math.PI / 180);
        map.fillRect(480, 880, 200, 30);
    }
</script>
</body>
</html>