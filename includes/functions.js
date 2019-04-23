function prepareImg() {
    //prepare the canvas image so that the server can pull it from POST data and save it to the server
    let canvas = document.getElementById('captured');
    document.getElementById('inp_img').value = canvas.toDataURL();
}

function enterPath(){
    //update previous story parts to change appearance
    let oldPaths = document.getElementsByClassName("path");
    for(let i = 0; i<oldPaths.length; i++){
        oldPaths[i].className = "oldPath"
    }

    //create new story part
    let path = document.createElement("div");
    path.classList.add("path");
    let s = stories[current];
    path.innerHTML = s.story[age];

    //create new buttons
    for(let i = 0; i < s.choices.length; i++){
        let c = s.choices[i];
        let btn = document.createElement("button");
        btn.classList.add("choice");
        btn.addEventListener('click', function() {

            //remove buttons from previous story part
            let oldChoices = document.getElementsByClassName("choice");
            while(oldChoices.length>0){
            oldChoices[0].remove()
            }
            current = c.id;
            enterPath()
        });
        btn.innerHTML = c.text;
        path.appendChild(btn)
    }
    //play audio dialogue
    let audio = new Audio();
    audio.src = s.audio[age];
    audio.play();
    map.appendChild(path)
}
