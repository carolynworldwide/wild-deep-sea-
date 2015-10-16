var SeaCreature = function(name, photo, color) {
	this.name = name;
	this.photo = photo;
  this.color = color;
  this.value = 0;
	seaCreatures.push(this);
}

var seaCreatures = [];

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


