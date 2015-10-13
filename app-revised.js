var SeaCreature = function(name, photo) {
	this.name = name;
	this.photo = photo;
  this.votes = 0;
	seaCreatures.push(this);
}

var seaCreatures = [];

var borgTube = new SeaCreature('borgTube', 'img/Borg-Tube.jpg');
var deepSeaJellyfish = new SeaCreature('deepSeaJellyfish', 'img/deep sea jellyfish.jpg');
var dumboOctopus = new SeaCreature('dumboOctopus', 'img/dumbo-octopus.jpg');
var frillShark = new SeaCreature('frillShark', 'img/frill shark.jpg');
var longFaceFish = new SeaCreature('longFaceFish', 'img/long face fish.jpg');
var orangeJaws = new SeaCreature('orangeJaws', 'img/orange jaws.jpg');
var pinkSalamander = new SeaCreature('pinkSalamander', 'img/pink salamander.jpg');
var satchmoFish = new SeaCreature('satchmoFish', 'img/satchmo fish.jpg');
var seaCucumber = new SeaCreature('seaCucumber', 'img/sea cucumber.jpg');
var toothFish = new SeaCreature('toothFish', 'img/tooth fish.jpg');
var whaFish = new SeaCreature('whaFish', 'img/wha-fish.jpg');
var whoKnowsWhat = new SeaCreature('whoKnowsWhat', 'img/who knows what.jpg');

function randPhoto() {
	var x = Math.floor(Math.random() * seaCreatures.length);
	return seaCreatures[x]
}

var pix1 = document.getElementById('pix1');
var photo1 = document.createElement('img');
photo1.setAttribute('src', randPhoto().photo);
pix1.appendChild(photo1);

var pix2 = document.getElementById('pix2');
var photo2 = document.createElement('img');
photo2.setAttribute('src', randPhoto().photo);
pix2.appendChild(photo2);

var button1 = document.getElementById('button1');
button1.addEventListener('click', tally);

var button2 = document.getElementById('button2');
button2.addEventListener('click', tally);

