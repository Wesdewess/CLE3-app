

function prepareImg() {
    let canvas = document.getElementById('captured');
    document.getElementById('inp_img').value = canvas.toDataURL();
}

function enterPath(){
    //update old divs
    let oldPaths = document.getElementsByClassName("path");
    for(let i = 0; i<oldPaths.length; i++){
        oldPaths[i].className = "oldPath"
    }

    //create new div
    let path = document.createElement("div");
    path.setAttribute("class", "path");
    let s = stories[current];
    path.innerHTML = s.story[age];

    //create buttons
    for(let i = 0; i < s.choices.length; i++){
        let c = s.choices[i];
        let btn = document.createElement("button");
        btn.setAttribute("class", "choice")
        btn.addEventListener('click', function() {
            //play dialogue
            let audio = new Audio();
            audio.src = s.audio[age];
            audio.play();

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
    map.appendChild(path)
}

//unused function
function tree(m,a){
    let branch = document.createElement("div");
    branch.setAttribute("class", "branch");
    branch.setAttribute("id", a.id);
    let content = document.createElement("div");
    content.setAttribute("a", a.adult);
    content.setAttribute("c", a.child);
    content.innerHTML = a.id;
    content.addEventListener('click', chosen);
    branch.appendChild(content);
    m.appendChild(branch);

    for(let i = 0; i < Object.keys(a).length; i++) {
        if (Object.keys(a).length > 0 && a[i] !== undefined) {
            //there is another subchoice
            tree(branch, a[i])
        } else {
            //there is no more subchoice
        }

    }
}