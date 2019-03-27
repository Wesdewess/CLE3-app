
let p = "http://localhost/CLE3-app/includes/audio/";
let forest = {
    path: {id: "path",
        0:{id: "123", adult: p+"hoi.mp3", child: p+"hoi.mp3",
            0: {id: "henk", adult: "", child: "joop",
                0: {id: "reeeeeeeeeeee", adult: "", child: ""},
                1: {id: "hoi", adult: "", child: ""}
            },
            1: {id: "sjaak", adult: "", child: "piet",}
        },
        1:{id: "rechts", adult: "", child: "reeeeeee",
            0: {id: "joe",adult: "", child: "pizza",
            }
        }
    }
}

let stories =
[ //story 1: the big bad wolf
    {
    id:0,
    name:"De boze wolf",
    story:["Je komt in een duister super eng bos","Wat een leuk en gezellig bos"],
    audio:[p+"a1.wav", p+"a2.wav"],
    choices: [{
        text: "links is een mooi roze huisje",
        id: 1
    },{
        text: "rechts is een eng beest",
        id: 2
    }]
},{
    id:1,
    name:"Het roze huisje",
    story:["Je komt in roze huisje"],
    audio:[p+"a3.wav", p+"a4.wav"],
    choices: [{
        text: "snel terug naar waar je  andaan kwam",
        id: 0
    },{
        text: "ga verder het bos in",
        id: 2
    }]
},{
    id:2,
    name:"Einde van het bos",
    story:["Dit is het einde"],
    audio:[p+"a5.wav", p+"a6.wav"],
    choices: [{
        text: "ga terug naar het begin",
        id: 0
    }]
}]