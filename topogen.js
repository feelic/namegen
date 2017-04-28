var vow = ['a','e','i','o','u','y','an','ain','ai','au','ay','ae','é','è','ee','ea','en','eu','ein','in','ia','ou','ô'];
var con = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z','ch','kh','zh'];
var syl = [
"los", "an", "ge", "les", "chi", "ca", "go", "hou", "ston", "phi", "la", "del", "phia", "phoe", "nix", "san", "die", "go", "san", "an", "to", "nio", "dal", "las", "det", "roit", "san", "jo", 
"se", "in", "dia", "na", "po", "lis", "jack", "son", "san", "fran", "cis", "co", "col", "um", "bus", "aus", "tin", "mem", "phis", "bal", "ti", "mo", "re", "char", "lot", "te", "fort", "worth", 
"bos", "ton", "mil", "wau", "kee", "el", "paso", "wa", "shing", "ton", "nash", "da", "vid", "son", "se", "at", "tle", "den", "ver", "las", "ve", "gas", "port", "land", "ok", "la", "ho", "ma", 
"tuc", "son", "al", "bu", "quer", "que", "at", "lan", "ta", "long", "kan", "sas", "fres", "no", "or", "le", "ans", "cle", "ve", "land", "sa", "cra", "men", "to", "me", "sa", "vir", "gi", 
"nia", "o", "ma", "ha", "co", "lo", "ra", "do", "oak", "land", "mi", "a", "mi", "tul", "sa", "min", "ne", "a", "po", "lis", "ho", "no", "lu", "lu", "ar", "ling", "ton", "wi", "chi", "ta", 
"louis", "ra", "leigh", "san", "ta", "a", "na", "cin", "cin", "na", "ti", "a", "na", "heim", "tam", "pa", "to", "le", "do", "pitts", "burgh", "au", "ro", "ra", "ba", "kers", "field", "riv", "er", "si", "de", "stock", 
"ton", "cor", "pus", "chri","sti", "lex", "ing", "ton", "fay", "ette", "buf", "fa", "lo", "paul", "an", "cho", "rage", "ne", "wark", "pla", "no", "fort", "way", "ne", "pe", "ters", "burg", "glen", "da", 
"le", "lin", "coln", "nor", "folk", "jer", "sey", "greens", "bo", "ro", "chand", "ler", "bir", "ming", "ham", "hen", "der", "son", "scotts", "da", "le", "hemp", "stead", "ma", "di", "son", "hia", "leah", 
"ba", "ton", "rou", "ge", "che", "sa", "pea", "ke", "or", "lan", "do", "lub", "bock", "gar", "land", "ak", "ron", "ro", "che", "ster", "chu", "la", "vis", "ta", "re", "no", "la", "re", "do", "dur", "ham", "mo", "des", "to", 
"hun", "ting", "ton", "mont", "go", "me", "ry", "boi", "se", "ar", "ling", "ton", "san", "ber", "nar", "di", "no", "a", "la", "ba", "ma", "a", "la", "ska", "a", "ri", "zo", "na", "ar", "kan", "sas", "ca", "li", "for", "nia", 
"co", "lo", "ra", "do", "con", "nec", "ti", "cut", "de", "la", "wa", "re", "flo", "ri", "da", "ge", "or", "gia", "ha", "wai", "i", "id", "a", "ho", "il", "lin", "ois", "in", "dia", "na", "io", "wa", "kan", "sas", "ken", "tu", 
"cky", "lou", "is", "ia", "na", "mai", "ne", "ma", "ry", "land", "mas", "sa", "chu", "setts", "mi", "chi", "gan", "min", "ne", "so", "ta", "mis", "sis", "sip", "pi", "mis", "sou", "ri", "mon", "ta", "na", "ne", "bra", "ska", 
"ne", "va", "da", "hamp", "shire", "jer", "sey", "me", "xi", "co", "york", "ca", "ro", "li", "na", "da", "ko", "ta", "oh", "io", "ok", "la", "ho", "ma", "o", "re", "gon", "penn", 
"syl", "va", "nia", "rho", "de", "ca", "ro", "li", "na", "da", "ko", "ta", "ten", "nes", "see", "tex", "as", "u", "tah", "ver", "mont", "vir", "gi", "nia", "wa", "shing", "ton", "west", "vir", "gi", 
"nia", "wis", "con", "sin", "wy", "om", "ing"
];
var toposPrefix = ['Territory of','Land of', 'Kingdom of', 'Lake', 'Mount'];
var cardinality = ['North', 'Northern', 'Septentrional', 'Boreal','East', 'Eastern', 'Oriental', 'South', 'Southern', 'Meridionnal', 'Austral', 'West', 'Western', 'Occidental' ];
var landforms =
[
	["Bay","Fjord","Cape","Lagoon","Cove","Peninsula","Shore"],
	["Lake","Oasis","Pond"],
	["Delta","Estuary","Bayou","Divide", "Gorge", "Canyon", "Rapids", "Spring", "Swamp","Falls", "Springs"],
	["Atoll","Archipelago", "Islands", "Island", "Isle"],
	["Badlands","Canyon","Cave","Gulch","Mesa","Plain","Ridge","Valley", "Vale"],
	["Moutain","Hill", "Kettle", "Pass","Plateau", "Moors"]
]
var landformsAssoc =
{
	"Coast" : ["Bay","Fjord","Cape","Lagoon","Cove","Peninsula","Shore"],
	"Lake" : ["Lake","Oasis","Pond"],
	"River" : ["Delta","Estuary","Bayou","Divide", "Gorge", "Canyon", "Rapids", "Spring", "Swamp","Falls", "Springs"],
	"Island" : ["Atoll","Archipelago", "Islands", "Island", "Isle"],
	"Valley" : ["Badlands","Canyon","Cave","Gulch","Mesa","Plain","Ridge","Valley", "Vale"],
	"Mountain" : ["Moutain","Hill", "Kettle", "Pass","Plateau", "Moors"]
}

function getVowel(){
	return vow[Math.floor(Math.random()*vow.length)];
}

function getConsonant(){
	return con[Math.floor(Math.random()*con.length)];
}

function getLandform () {
	var type = Math.floor(Math.random()*landforms.length);
	return landforms[type][Math.floor(Math.random()*landforms[type].length)];
}
function getToposPrefix () {
	return toposPrefix[Math.floor(Math.random()*toposPrefix.length)];
}
function getCardinality () {
	return cardinality[Math.floor(Math.random()*cardinality.length)];
}
function getSyllable () {
	return syl[Math.floor(Math.random()*syl.length)];
}


