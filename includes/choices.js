
let p = "http://localhost/CLE3-app/includes/audio/"; //default path to audio

let stories =
[ //story 1: the big bad wolf
    {
    id:0,
    name:"Intro",
    story:["Wolf is terug naar het mookjesbos om wraak te nemen op het 3e biggetje \n" +
    "Het 3e biggetje viert feest omdat ze verhuisd zijn naar een plek waar de wolf niet kan komen,iedereen is hiervoor uitgenodigd, maar de wolf \n" +
    "heeft dit ook te horen gekregen.\n","Wat een leuk en gezellig bos"],
    audio:[p+"a1.wav", p+"a2.wav"],
    choices: [{
        text: "Het linker pad is heel stil.",
        id: 1
    },{
        text: "Er wordt wolf geroepen vanaf het rechter pad",
        id: 2
    }]
},{
    id:1,
    name:"de wolf ruikt je",
    story:["Het is stil, de geitjes zijn verstopt. De wolf is daar geweest en heeft jouw geur nu opgepikt. Probeer het kwijt te raken.\n", ""],
    audio:[p+"a3.wav", p+"a4.wav"],
    choices: [{
        text: "links",
        id: 5
    },{
        text: "rechts",
        id: 6
    }]
},{
    id: 2,
    name: "",
    story:["The boy who cried wolf.\n" +
    "De jongen verveelde zich en riep wolf, er is echter geen wolf  in de buurt te bekennen. De jongen vertelt dat in de buurt een huis van een \n" +
    "oude vrouw is. Der kleindochter heeft een taart gebakken voor het feest. Maar de wolf houdt heel erg van taart.Het meisje is niet bang\n" +
    "alleen in het donkere bos, en de wolf weet dit, maar dit is voor het eerst alleen buiten in het nieuwe bos. \n" +
    "ga naar het meisje om de taart naar het feest te brengen.\n",""],
    audio:[],
    choices:[{
        text: "links",
        id: 3
    },{
        text: "rechts",
        id: 4
    }]
},{
    id:3,
    name:"Einde van het bos",
    story:["Huis, met oma van roodkapje. Roodkapje is onderweg naar het feest van het 3e biggetje"],
    audio:[p+"a5.wav", p+"a6.wav"],
    choices: [{
        text: "links",
        id: 7
    },{
        text: "rechts",
        id: 8
    }]
},{
    id:4,
    name:"",
    story:["Huis, met oma van roodkapje. Maar wat heeft ze grote ogen."],
    audio:[p+"a5.wav", p+"a6.wav"],
    choices: [{
        text: "links",
        id: 9
    }]
},{
    id:5,
    name:"",
    story:["De wolf volgt je, je komt  bij een meer. Er is een stem, iemand wilt je helpen. \n" +
    "\t\tEen eigenaardige vrouw zegt de geur te laten verdwijnen. Neem het rechter \n" +
    "                        pad\n"],
    audio:[p+"a5.wav", p+"a6.wav"],
    choices: [{
        text: "links",
        id: 10
    },{
        text: "rechts",
        id: 11
    }]
},{
    id:6,
    name:"",
    story:["De wolf volgt je, je komt  bij een meer. Er is een stem, iemand wil je helpen. Een roodharige vrouw wil je helpen.\n"],
    audio:[p+"a5.wav", p+"a6.wav"],
    choices: []
},{
    id:7,
    name:"",
    story:["Je bent onderweg roodkapje tegengekomen en loopt met der mee \t\tnaar het feest, Je bent veilig aangekomen en beter nog, er is taart!\n"],
    audio:[p+"a5.wav", p+"a6.wav"],
    choices: []
},{
    id:8,
    name:"",
    story:["Je bent aangekomen op het feest, je bent helaas roodkapje \t\t\tmisgelopen.\n"],
    audio:[p+"a5.wav", p+"a6.wav"],
    choices: []
},{
    id:9,
    name:"",
    story:["De Jager is hier en stopt de wolf, je kan veilig naar het feest. Helaas \t\tzonder taart.\n"],
    audio:[p+"a5.wav", p+"a6.wav"],
    choices: []
},{
    id:10,
    name:"",
    story:["Je hebt de list van de zeeheks ontweken en ben de wolf kwijtgeraakt. Je bent veilig op het feest aangekomen."],
    audio:[p+"a5.wav", p+"a6.wav"],
    choices: []
},{
    id:11,
    name:"",
    story:["De zeeheks heeft je voor de gek gehouden en je hebt de wolf naar het feest gebracht."],
    audio:[p+"a5.wav", p+"a6.wav"],
    choices: []
}]

//wessel is leuk :)