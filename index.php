<?php
$personAge = null; //default age, null means age has not been checked yet
require_once "vendor/autoload.php";
use \Sightengine\SightengineClient;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && count($_POST) && (strpos($_POST['img'], 'data:image/png;base64') === 0)) {
    $img = $_POST['img'];
    $img = str_replace('data:image/png;base64,', '', $img);
    $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);
    $file = 'uploads/img'.date("YmdHis").'.png';

    if (file_put_contents($file, $data)) {
        echo "<p class='logs'>The canvas was saved as $file.</p>";
        sightengineResponse($file);
    } else {
        echo "<p class='logs'>The canvas could not be saved.</p>";
    }

}
function sightengineResponse($a){
    global $personAge;
    $client = new SightengineClient('1777949695', 'cWYRzhuS2FQPjEvpPSJz');
    $output = $client->check(['face-attributes'])->set_file($a);
    if (isset($output->faces[0]->attributes)) {
        if ($output->faces[0]->attributes->minor < 0.5) {
            echo "<p class='logs'>dit is een volwassene</p>";
            $personAge = 0;
        } else {
            echo "<p class='logs'>dit is een kind</p>";
            $personAge = 1;
        }
        echo "<p class='logs'>".($output->faces[0]->attributes->minor * 100) . "% kind, " . ($output->faces[0]->attributes->male * 100) . "% man, " . ($output->faces[0]->attributes->female * 100) . "% vrouw "."</p>";
        //var_dump($output->faces[0]->attributes);
    } else {
        echo "er wordt geen mens herkend in deze foto ";
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>CLE3</title>
    <link rel="stylesheet" type="text/css" href="includes/style.css">
    <script src="includes/functions.js" type="text/javascript"></script>
    <script src="includes/choices.js" type="text/javascript"></script>
</head>

<body>
    <div id="age" hidden="hidden"><?php echo $personAge ?></div>
    <div id="mapview">
    </div>
    <div id="webcam">
     <video autoplay="autoplay" id="videoElement"></video>
     <canvas id="captured" hidden="hidden"></canvas>
     <form method="post" action="" onsubmit="prepareImg();">
        <input id="inp_img" name="img" type="hidden" value="">
        <button id="save" type="submit" value="Upload">Check</button>
     </form>
    </div>

<script>
    let video = document.querySelector("#videoElement");
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true})
            .then(function(stream) {
                video.srcObject = stream;
            })
            .catch(function(err0r) {
                alert("Something went wrong!" + err0r);
            });
    }

    let canvas = document.getElementById("captured");
    let save = document.getElementById("save");
    save.onclick = function() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
    };

    //create clickable elements in mapview div
    let map = document.getElementById("mapview");
    let current = 0;

    let age = document.getElementById("age");
    console.log("age is " + age.innerText);
    if(age.innerText !== ""){
        age = age.innerText;
        enterPath()
    }else{
        console.log("er is nog niet gecheckt")
    }
</script>
</body>
</html>