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


    capture.onclick = function() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);}

</script>
</body>
</html>