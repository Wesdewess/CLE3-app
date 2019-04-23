let p = "http://localhost/CLE3-app/includes/audio/"; //default path to audio
let stories =
[ 
    {
    id:0,
    name:"Intro",
    story:["","Er was eens een land, ver van hier. Een sprookjesland om precies te zijn.\n" +
    "Jaren lang heeft daar een grote boze wolf verschillende sprookjesfiguren lastig gevallen.\n" +
    "Toen de wolf eindelijk verslagen was zijn deze figuren naar dit bos gevlucht.\n" +
    "Maar.. de wolf is terug om wraak te nemen op het 3e biggetje, het biggetje dat hem verslagen heeft\n" +
    "Het 3e biggetje viert feest omdat ze verhuisd zijn naar een plek waar de wolf niet kan komen, iedereen is hier voor uitgenodig, maar de wolf \n" +
    "heeft dit ook te horen gekregen.\n"],
    audio:[p+"", p+"0.mpeg"],
    choices: [{
        text: "Het linker pad is erg stil.",
        id: 1
    },{
        text: "Je hoort rechts in de verte iemand wolf schreeuwen!",
        id: 2
    }]
},{
    id:1,
    name:"",
    story:["", "Er is hier helemaal niks. Slechts het geluid van de wind door de bomen en de dieren uit het bos. Toch voelt het hier niet alleen.\n" +
    "Als je goed om je heen kijk zie je wat ogen.. hoorns... geitjes? Er zitten 7 geitjes verstopt.\n" +
    "Voor wat zouden ze verstopt zijn? Er beweegt wat achter de bomen, Er is een laag brommend geluid te horen. De wolf heeft je geur opgepikt\n" +
    "en zit nu achter je aan!\n"],
    audio:[p+"", p+"1.mpeg"],
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
    story:["","Er is hier geen wolf, slechts een klein jongetje.\n" +
    "De jongen verveelde zich en riep wolf, er is echter geen wolf in de buurt te bekennen. \"In de buurt woont een oude vrouw\", zegt de jongen\n" +
    "\"Der kleindochter heeft een taart gebakken voor het feest, misschien kan zij je de weg wijzen\".\n"],
    audio:[p+"", p+"2.mpeg"],
    choices:[{
        text: "links",
        id: 3
    },{
        text: "rechts",
        id: 4
    }]
},{
    id:3,
    name:"",
    story:["","Je komt aan bij een huis, Je loopt naar binnen en ziet oma en\n" +
    "roodkapje. \"Hey jij!\" Roept roodkapje naar jou. \"loop jij mee?\"\n" +
    "\t\"Nee ik eh ben niet bang voor de grote wolf\" zei Roodkapje angstig. Maar ik zie dat jij\thet wel ben. Roodkapje neemt der zelf gebakken taart mee en loop met jou het bos\tin.\n"],
    audio:[p+"", p+"3.mpeg"],
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
    story:["","Je komt aan bij een huis, Je loopt naar binnen en ziet oma daar in bed\t\t        liggen. \"Maar oma, wat heeft U grote ogen?\", oma?\n" +
    "        Je hoort oma brommen en snapt dat je in een val van de wolf ben\t\t        gelopen. Snel verlaat je oma's huis. De wolf heeft jouw geur\n" +
    "\t\t        opgepikt en zit achter je aan.\n"],
    audio:[p+"", p+"4.mpeg"],
    choices: [{
        text: "links",
        id: 9
    },{
        text: "rechts",
        id: 10
    }]
},{
    id:5,
    name:"",
    story:["","Het is koud, eng en er is niemand in de buurt te bekennen.. Op de wolf na.\t Je kan nu niet door naar het feest want dan breng je de wolf daar heen! \t\t  \t Langzaam loop je door, het gebrom van de wolf blijft in je hoofd hangen. Dan duikt    \t de jager op! De wolf vlucht voordat de jager wat kan doen en samen lopen jullie\t \t door. De sprookjesfiguren leven nog lang en gelukkig\n"],
    audio:[p+"", p+"5.mpeg"],
    choices: []
},{
    id:6,
    name:"",
    story:["","De wolf volgt je. Je ziet de jager lopen! \"Wat doe  jij hier alleen in het \tbos?\" Vraagt de jager. \"De WOLF?!\"\n" +
    "De  jager vlucht en het gebrom van de wolf wordt steeds harder.. Het gebrom begin gebrul te worden..\n" +
    "\tDe wolf staat voor je! \"IK wil alleen vragen of ik mee mag naar het feest\" klinkt er uit \tde bek van de wolf. Heeft de wolf.. Spijt?!  Je loopt met de wolf naar het feest, de \twolf maakt het goed met de biggetjes. IEDEREEN leeft lang en gelukkig.\n"],
    audio:[p+"", p+"6.mpeg"],
    choices: []
},{
    id:7,
    name:"",
    story:["","Als jullie lopen door het bos beginnen jullie een laag\t\t\t\t brommend geluid te horen, \"hoor je dat?!\" vraagt roodkapje bang.\t\t\t\t\"DE WOLF?!\" Roodkapje rent weg. Der taart valt op de grond. De wolf \t\t\tkomt tevoorschijn en begint van de taart te eten. Dit is jouw moment\t\t\t om te vluchten. Je gaat door en kom alleen aan op het feest.\n" +
    "\t\t\tDe biggetjes laat je binnen en jullie feesten nog lang en gelukkig.\n"],
    audio:[p+"", p+"7.mpeg"],
    choices: []
},{
    id:8,
    name:"",
    story:["","Samen lopen jullie door het bos, schaduwen gaan voorbij.\t\t\t\"Wat zijn dat?!\" Roept Roodkapje bang. \n" +
    "\t\t\t\"De WOLF?!\".. uhm.. wolven?.. Wolvjes?.. geitjes! De geiten die in het\t\t\t bos verstopt zaten roken de taart en met zijn allen lopen jullie door\t\t\t naar het feest. Ze eten nog lang en gelukkig.\n"],
    audio:[p+"", p+"8.mpeg"],
    choices: []
},{
    id:9,
    name:"",
    story:["","Je komt aan bij het feest, maar je hebt de wolf\t\t\t\t \tmeegenomen!  Iedereen vlucht naar binnen, de wolf blaast en blaast\t\t\tmaar het stenen huisje valt maar niet. teleurgesteld verlaat de wolf het\t\t\tbos en ze feesten nog lang en gelukkig."],
    audio:[p+"", p+"9.mpeg"],
    choices: []
},{
    id:10,
    name:"",
    story:["","In de verte zie je een figuur bewegen, Je vraagt om hulp.\t\t\tHet is de jager! De jager jaagt de wolf weg en samen gaan jullie naar \t\t\thet feest. Iedereen leeft lang en gelukkig."],
    audio:[p+"", p+"10.mpeg"],
    choices: []
}]

//wessel is leuk :)