//Constructor de personajes pertenecientes al juego base. Se venden todos juntos.
class baseGame {
  constructor(id, name, img, color) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.color = color;
  }
}

//Constructor de personajes licenciados, se venden solo con dinero real.
class paidOnly {
  constructor(id, name, img, price, selected) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.selected = selected;
  }
}

//Constructor de personajes originales no pertenecesientes al juego base. Se venden con dinero o currency del juego que requiere horas.
class hybridPayment {
  constructor(id, name, img, price, hours, selected) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.hours = hours;
    this.selected = selected;
  }
}

baseGameCharacters = []; // Array de personajes del juego base.
paidOnlyCharacters = []; // Array de personajes exclusivamente vendidos por dinero.
grindCharacters = []; //Array de personajes que pueden comprarse con dinero u horas de juego.

const bill = new baseGame(
  "bill",
  "William Overbeck",
  "images/base_game/bill.png",
  "color"
);

const claudette = new baseGame(
  "claudette",
  "Claudette Morel",
  "images/base_game/claudette.png",
  "color"
);

const dwight = new baseGame(
  "dwight",
  "Dwight Fairfield",
  "images/base_game/dwight.png",
  "color"
);

const david = new baseGame(
  "david",
  "David King",
  "images/base_game/david.png",
  "color"
);

const jake = new baseGame(
  "jake",
  "Jake Park",
  "images/base_game/jake.png",
  "color"
);

const meg = new baseGame(
  "meg",
  "Meg Thomas",
  "images/base_game/meg.png",
  "color"
);

const nea = new baseGame(
  "nea",
  "Nea Karlsson",
  "images/base_game/nea.png",
  "color"
);

const hillbilly = new baseGame(
  "hillbilly",
  "The Hillbilly",
  "images/base_game/hillbilly.png",
  "color"
);

const huntress = new baseGame(
  "huntress",
  "The Huntress",
  "images/base_game/huntress.png",
  "color"
);

const nurse = new baseGame(
  "nurse",
  "The Nurse",
  "images/base_game/nurse.png",
  "color"
);

const trapper = new baseGame(
  "trapper",
  "The Trapper",
  "images/base_game/trapper.png",
  "color"
);

const wraith = new baseGame(
  "wraith",
  "The Wraith",
  "images/base_game/wraith.png",
  "color"
);

baseGameCharacters.push(
  bill,
  claudette,
  david,
  dwight,
  jake,
  meg,
  nea,
  hillbilly,
  huntress,
  nurse,
  trapper,
  wraith
);

//Declaración de los personajes paid only para enviar al constructor

const amanda = new paidOnly(
  "amanda",
  "The Pig",
  "images/premium_dlc/amanda.png",
  115,
  0
);

const tapp = new paidOnly(
  "tapp",
  "David Tapp",
  "images/premium_dlc/tapp.png",
  115,
  0
);

const laurie = new paidOnly(
  "laurie",
  "Laurie Strode",
  "images/premium_dlc/laurie.png",
  115,
  0
);

const michael = new paidOnly(
  "michael",
  "The Shape",
  "images/premium_dlc/michael.png",
  115,
  0
);

const quentin = new paidOnly(
  "quentin",
  "Quentin Smith",
  "images/premium_dlc/quentin.png",
  115,
  0
);

const freddy = new paidOnly(
  "freddy",
  "The Nightmare",
  "images/premium_dlc/freddy.png",
  115,
  0
);

const ash = new paidOnly(
  "ash",
  "Ash Williams",
  "images/premium_dlc/ash.png",
  169,
  0
);

const cheryl = new paidOnly(
  "cheryl",
  "Cheryl Mason",
  "images/premium_dlc/cheryl.png",
  115,
  0
);

const pyramid = new paidOnly(
  "pyramidhead",
  "The executioner",
  "images/premium_dlc/pyramidhead.png",
  115,
  0
);

const jill = new paidOnly(
  "jill",
  "Jill Valentine",
  "images/premium_dlc/jill.png",
  134,
  0
);

const leon = new paidOnly(
  "leon",
  "Leon Kennedy",
  "images/premium_dlc/leon.png",
  134,
  0
);

const nemesis = new paidOnly(
  "nemesis",
  "The Nemesis",
  "images/premium_dlc/nemesis.png",
  134,
  0
);

paidOnlyCharacters.push(
  laurie,
  michael,
  quentin,
  freddy,
  tapp,
  amanda,
  ash,
  cheryl,
  pyramid,
  jill,
  leon,
  nemesis
);

const feng = new hybridPayment(
  "feng",
  "Feng Ming",
  "images/original_dlc/feng.png",
  115,
  23,
  0
);

const doctor = new hybridPayment(
  "doctor",
  "The Doctor",
  "images/original_dlc/doctor.png",
  115,
  23,
  0
);

const ace = new hybridPayment(
  "ace",
  "Ace Visconti",
  "images/original_dlc/ace.png",
  115,
  23,
  0
);

const hag = new hybridPayment(
  "hag",
  "The Hag",
  "images/original_dlc/hag.png",
  115,
  23,
  0
);

const kate = new hybridPayment(
  "kate",
  "Kate Denson",
  "images/original_dlc/kate.png",
  115,
  23,
  0
);

const clown = new hybridPayment(
  "clown",
  "The Clown",
  "images/original_dlc/clown.png",
  115,
  23,
  0
);

const adam = new hybridPayment(
  "adam",
  "Adam Francis",
  "images/original_dlc/adam.png",
  115,
  23,
  0
);

const spirit = new hybridPayment(
  "spirit",
  "The Spirit",
  "images/original_dlc/spirit.png",
  115,
  23,
  0
);

const jeff = new hybridPayment(
  "jeff",
  "Jeff Johansen",
  "images/original_dlc/jeff.png",
  115,
  23,
  0
);

const legion = new hybridPayment(
  "legion",
  "The Legion",
  "images/original_dlc/legion.png",
  115,
  23,
  0
);

const jane = new hybridPayment(
  "jane",
  "Jane Romero",
  "images/original_dlc/jane.png",
  115,
  23,
  0
);

const plague = new hybridPayment(
  "plague",
  "The Plague",
  "images/original_dlc/plague.png",
  115,
  23,
  0
);

const yui = new hybridPayment(
  "yui",
  "Yui Kimura",
  "images/original_dlc/yui.png",
  115,
  23,
  0
);

const oni = new hybridPayment(
  "oni",
  "The Oni",
  "images/original_dlc/oni.png",
  115,
  23,
  0
);

const zarina = new hybridPayment(
  "zarina",
  "Zarina Kassir",
  "images/original_dlc/zarina.png",
  115,
  23,
  0
);

const slinger = new hybridPayment(
  "gunslinger",
  "The Deathslinger",
  "images/original_dlc/deathslinger.png",
  115,
  23,
  0
);

const felix = new hybridPayment(
  "felix",
  "Felix Richter",
  "images/original_dlc/felix.png",
  115,
  23,
  0
);

const blight = new hybridPayment(
  "blight",
  "The Blight",
  "images/original_dlc/blight.png",
  115,
  23,
  0
);

const elodie = new hybridPayment(
  "elodie",
  "Élodie Rakoto",
  "images/original_dlc/elodie.png",
  115,
  23,
  0
);

const twins = new hybridPayment(
  "twins",
  "The Twins",
  "images/original_dlc/twins.png",
  115,
  23,
  0
);

const yun = new hybridPayment(
  "yunjin",
  "Yun-jin Lee",
  "images/original_dlc/yunjin.png",
  115,
  23,
  0
);

const trickster = new hybridPayment(
  "trickster",
  "The Trickster",
  "images/original_dlc/trickster.png",
  115,
  23,
  0
);

grindCharacters.push(
  ace,
  hag,
  feng,
  doctor,
  kate,
  clown,
  adam,
  spirit,
  jeff,
  legion,
  jane,
  plague,
  yui,
  oni,
  zarina,
  slinger,
  felix,
  blight,
  elodie,
  twins,
  yun,
  trickster
);
