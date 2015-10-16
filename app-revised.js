<<<<<<< HEAD
var SeaCreature = function(name, photo, color) {
	this.name = name;
	this.photo = photo;
  this.color = color;
  this.value = 0;
	seaCreatures.push(this);
}
=======
var SeaCreature = function(fishLabel, photo) {
	this.fishName = fishLabel;
	this.photo = photo;
  this.votes = 0;
	seaWeirdness.push(this);
};
>>>>>>> 88cd946ec1f8a2998c21996c4a65eebd1063fd57

var seaWeirdness = [];

<<<<<<< HEAD
var borgTube = new SeaCreature('borgTube', 'img/Borg-Tube.jpg', 'red');
var deepSeaJellyfish = new SeaCreature('deepSeaJellyfish', 'img/deep sea jellyfish.jpg', 'orange');
var dumboOctopus = new SeaCreature('dumboOctopus', 'img/dumbo-octopus.jpg', 'blue');
var frillShark = new SeaCreature('frillShark', 'img/frill shark.jpg', 'purple');
var longFaceFish = new SeaCreature('longFaceFish', 'img/long face fish.jpg', 'green');
var orangeJaws = new SeaCreature('orangeJaws', 'img/orange jaws.jpg', 'gray');
var pinkSalamander = new SeaCreature('pinkSalamander', 'img/pink salamander.jpg', 'BlanchedAlmond');
var satchmoFish = new SeaCreature('satchmoFish', 'img/satchmo fish.jpg', 'black');
var seaCucumber = new SeaCreature('seaCucumber', 'img/sea cucumber.jpg', 'gold');
var toothFish = new SeaCreature('toothFish', 'img/tooth fish.jpg', 'silver');
var whaFish = new SeaCreature('whaFish', 'img/wha-fish.jpg', 'brown');
var whoKnowsWhat = new SeaCreature('whoKnowsWhat', 'img/who knows what.jpg', 'lime');

var Tracker = function () {

	this.randPhoto = function() {
		var x = Math.floor(Math.random() * seaCreatures.length);
		return seaCreatures[x];
	}

	this.getPhotos = function() {
		pix1 = document.getElementById('img1');
		photo1 = this.randPhoto();
		pix1.src = photo1.photo;

		pix2 = document.getElementById('img2');
		photo2 = this.randPhoto();
		if (photo2.photo === photo1.photo) {
			photo2 = this.randPhoto();
		}
		pix2.src = photo2.photo;  
	}

	this.getVotes = function(photo) {
		photo.value = photo.value + 1;
		console.log(photo.name + ' vote increased to ' + photo.value);
		var context = document.getElementById('weirdSea').getContext('2d');
		var weirdSeaChart = new Chart(context).Doughnut(seaCreatures, {
		animationEasing : "easeOutBounce" 
	});
		this.getPhotos();
	}
}

var pix1, pix2, photo1, photo2;

var tracker = new Tracker();
tracker.getPhotos();

pix1.addEventListener('click', function() {
	tracker.getVotes(photo1); 
});

pix2.addEventListener('click', function() {
	tracker.getVotes(photo2);
});

=======
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
>>>>>>> 88cd946ec1f8a2998c21996c4a65eebd1063fd57

