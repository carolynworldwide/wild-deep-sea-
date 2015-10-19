var SeaCreature = function(name, photo, color, label) {
    this.name = name;
    this.photo = photo;
    this.color = color;
    this.label = label;
    this.value = 0;
    seaCreatures.push(this);
}

var seaCreatures = [];

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
    }
}

var context = document.getElementById('weirdSea').getContext('2d');
var weirdSeaChart = new Chart(context).Doughnut(seaCreatures, {animationEasing : "easeOutBounce"});

function makeChart() {
if (weirdSeaChart)
weirdSeaChart.destroy();
context = document.getElementById('weirdSea').getContext('2d');
weirdSeaChart = new Chart(context).Doughnut(seaCreatures, {animationEasing : "easeOutBounce"});
}

function loadSeaCreatures() {
    var getSavedCreatures = localStorage.getItem('keySavedCreatures');
    seaCreatures = JSON.parse(getSavedCreatures);
    console.log(seaCreatures.length);
}

if (localStorage.getItem('keySavedCreatures')) {
    loadSeaCreatures();
    var tracker = new Tracker();
    tracker.getPhotos();
    makeChart();
} else {
    seaCreatures = [];
    var borgTube = new SeaCreature('borgTube', 'img/Borg-Tube.jpg', 'red', 'Borg Tube');
    var deepSeaJellyfish = new SeaCreature('deepSeaJellyfish', 'img/deep sea jellyfish.jpg', 'orange', 'Deep Sea Jellyfish');
    var dumboOctopus = new SeaCreature('dumboOctopus', 'img/dumbo-octopus.jpg', 'blue', 'Dumbo Octopus');
    var frillShark = new SeaCreature('frillShark', 'img/frill shark.jpg', 'purple', 'Frill Shark');
    var longFaceFish = new SeaCreature('longFaceFish', 'img/long face fish.jpg', 'green', 'Long Face Fish');
    var orangeJaws = new SeaCreature('orangeJaws', 'img/orange jaws.jpg', 'gray', 'Orange Jaws');
    var pinkSalamander = new SeaCreature('pinkSalamander', 'img/pink salamander.jpg', 'BlanchedAlmond', 'Pink Salamander');
    var satchmoFish = new SeaCreature('satchmoFish', 'img/satchmo fish.jpg', 'black', 'Satchmo Fish');
    var seaCucumber = new SeaCreature('seaCucumber', 'img/sea cucumber.jpg', 'gold', 'Sea Cucumber');
    var toothFish = new SeaCreature('toothFish', 'img/tooth fish.jpg', 'silver', 'Tooth Fish');
    var whaFish = new SeaCreature('whaFish', 'img/wha-fish.jpg', 'brown', 'Wha Fish');
    var whoKnowsWhat = new SeaCreature('whoKnowsWhat', 'img/who knows what.jpg', 'lime', 'Who Knows What Fish');
    var tracker = new Tracker();
    tracker.getPhotos();
}

function saveSeaCreatures() {
    var jsonSavedCreatures = JSON.stringify(seaCreatures);
    localStorage.setItem('keySavedCreatures', jsonSavedCreatures);
}

var pix1, pix2, photo1, photo2;

pix1.addEventListener('click', function() {
    tracker.getVotes(photo1);
    saveSeaCreatures();
    tracker.getPhotos();
    makeChart();
});

pix2.addEventListener('click', function() {
    tracker.getVotes(photo2);
    saveSeaCreatures();
    tracker.getPhotos();
    makeChart();
});
