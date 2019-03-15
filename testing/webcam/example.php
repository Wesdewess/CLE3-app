<?php


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $img = $_POST['img'];
    $img = str_replace('data:image/png;base64,', '', $img);
    $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);
    $file = 'uploads/img'.date("YmdHis").'.png';

    if (file_put_contents($file, $data)) {
        echo "<p>The canvas was saved as $file.</p>";
    } else {
        echo "<p>The canvas could not be saved.</p>";
    }

}




?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>

<body>
<div id="container">
    <video autoplay="true" id="videoElement"></video>
    <canvas id="captured"></canvas>
    <button id="screenshot"></button>
    <form method="post" action="" onsubmit="prepareImg();">
        <input id="inp_img" name="img" type="hidden" value="">
        <button id="save" type="submit" value="Upload"></button>
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
                alert("Something went wrong!");
            });
    }

    let capture = document.getElementById("screenshot")
    capture.innerHTML = "Capture Screenshot"
    let canvas = document.getElementById("captured")
    let save = document.getElementById("save")
    save.innerHTML = "save to file"

    save.onclick = function() {
        $.ajax({
            type: "POST",
            url: "script.php",
            data: {
                imgBase64: dataURL
            }
        }).done(function (o) {
            console.log('saved');
        });
    }
    capture.onclick = function() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
     }

    function prepareImg() {
        let canvas = document.getElementById('canvas');
        document.getElementById('inp_img').value = canvas.toDataURL();
    }


     /*
    let link = document.createElement('a');
    link.innerHTML = 'download snapshot';
    link.addEventListener('click', function(ev) {
        link.href = canvas.toDataURL();
        link.download = "capture.png";
    }, false);
    document.body.appendChild(link);
    */
</script>
</body>
</html>