var SeaCreature = function(fishLabel, photo) {
	this.fishName = fishLabel;
	this.photo = photo;
  this.votes = 0;
	seaWeirdness.push(this);
};

var seaWeirdness = [];

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
	var x = Math.floor(Math.random() * seaWeirdness.length);
	return seaWeirdness[x]
}

var pix1 = document.getElementById('pix1');
var photo1 = document.createElement('img');
var saveTheCreature1 = randPhoto();

photo1.setAttribute('src', saveTheCreature1.photo);
pix1.appendChild(photo1);

var pix2 = document.getElementById('pix2');
var photo2 = document.createElement('img');

var saveTheCreature2 = randPhoto();

photo2.setAttribute('src', saveTheCreature2.photo);
while (photo1.src === photo2.src) {
  console.log('same photo, try again!');
  photo2.src = randPhoto().photo;
}

pix2.appendChild(photo2);

function tally(science) {
  console.log('in the tally function!' + science);
  //do some tallying of votes
  var whateverwewant = science.currentTarget.parentElement.id;
  console.log(whateverwewant + ' is the click location...');
  console.log('this is photo1 ' + photo1);
  console.log('this is photo2 ' + photo2);
  console.log('this is the object that was saved for the random photo 1 ' + saveTheCreature1);
  console.log('this is the object that was saved for the random photo 2 ' + saveTheCreature2);
  saveTheCreature1.votes +=1;
  saveTheCreature2.votes +=1;

}

photo1.addEventListener('click', tally);
photo2.addEventListener('click', tally);

