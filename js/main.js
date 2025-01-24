let userInput;

document.addEventListener("DOMContentLoaded", function() {
  console.clear();})
  
const button = document.querySelector('#clickMe');
if (button) {
  button.addEventListener('click', () => {
    strToNum();
    getFetch();

    if (!userInput) {
      console.log('Unknown Planet');
      return;
    }
  });
}

function strToNum(){
userInput = document.querySelector('input').value.toLowerCase();

//Extra objects
switch(userInput){
  case 'tatooine':
      userInput = 1;
      break;
    case 'alderaan':
      userInput = 2;
      break;
    case 'yavin':
    case 'yavin 4':
      case 'yavin iv':
      userInput = 3;
      break;
    case 'hoth':
      userInput = 4;
      break;
    case 'dagobah':
      userInput = 5;
      break;
    case 'bespin':
      userInput = 6;
      break;
    case 'endor':
      userInput = 7;
      break;
    case 'naboo':
      userInput = 8;
      break;
    case 'coruscant':
      userInput = 9;
      break;
    case 'kamino':
      userInput = 10;
      break;
    default:
      console.log('Unknown Planet')
      document.querySelector('h4').textContent = 'Planet Not Found, Try Again.';
      userInput = null;
}}
const planetImages = {
  1: 'images/tatooine.jpg',
  2: 'images/alderaan.jpg',
  3: 'images/yavin.jpg',
  4: 'images/hoth.jpg',
  5: 'images/dagobah.jpg',
  6: 'images/bespin.jpg',
  7: 'images/endor.jpg',
  8: 'images/naboo.jpg',
  9: 'images/coruscant.jpg',
  10:'images/kamino.jpg',
};
const funFacts = {
  1:"The name Tatooine is believed to be inspired by the town of Tataouine in Tunisia, where the Star Wars films were partly shot. The planet's desert environment reflects the arid nature of the real-world location.",
  2:`Alderaan was famously destroyed by the Empire’s Death Star in Star Wars: Episode 4 – A New Hope. The planet was obliterated by a single shot from the Death Star's superlaser, serving as a devastating display of the Empire’s power. The destruction of Alderaan is one of the most tragic moments in the Star Wars saga, and it was the catalyst for Leia’s involvement with the Rebellion.`,
  3:"Yavin itself is actually a massive gas giant, much larger than most planets. Yavin has numerous moons, and the base on Yavin 4 was located on one of them. This provided the Rebels with natural cover in the depths of space.",
  4:"The icy landscape of Hoth was filmed in Iceland and Norway, specifically in the Jotunheimen Mountains. The stunning snow-covered mountains, glaciers, and frozen tundra provided the perfect setting for the harsh and remote planet.",
  5:"Dagobah is a planet with a strong connection to the Force, which is one of the main reasons why Yoda chose it. Despite being a desolate swamp world, Dagobah had a unique Force sensitivity that allowed Yoda to commune with the spirits of past Jedi.",
  6:"Bespin is rich in tibanna gas, which is a vital resource in the galaxy. The gas is refined in the atmosphere and is used in blaster weapons and hyperdrives. Cloud City’s primary industry is the mining of this gas, making the planet an important economic hub.",
  7:"The Endor Forest scenes in Return of the Jedi were filmed in Redwood National and State Parks in California. These real-world giant redwood trees were used to create the towering, majestic forest seen in the movie.",
  8:"The Gungans are the amphibious species native to Naboo. The most well-known Gungan is Jar Jar Binks, a central character in The Phantom Menace. The Gungans have advanced technology, including force fields and underwater cities, but they are seen as primitive by the planet's human inhabitants.",
  9:"Coruscant is home to the Jedi Temple, the sacred center of the Jedi Order. Located in the center of the city, the temple was a symbol of the Jedi's commitment to peace, wisdom, and knowledge. The temple housed the Jedi Archives, a vast collection of ancient knowledge and teachings about the Force.",
  10:"The existence of Kamino and the Clone Army was kept secret for years. The Republic's creation of a clone army was considered a highly confidential matter by the Sith, who orchestrated the whole plan to create a pretext for the Clone Wars. The Jedi were kept in the dark, and the truth was only revealed when Obi-Wan Kenobi investigated the matter.",
}

//Fetch from api
function getFetch(){
  if (!userInput) return;

  const url = `https://www.swapi.tech/api/planets/${userInput}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      localStorage.clear();
      localStorage.setItem('name', data.result.properties.name)
      localStorage.setItem('climate', data.result.properties.climate)
      localStorage.setItem('terrain',data.result.properties.terrain)
      localStorage.setItem('population',data.result.properties.population)
      localStorage.setItem('planetImage', planetImages[userInput]);
      localStorage.setItem('planetFunFact', funFacts[userInput])
      window.location.href = 'index2.html';
      console.log(data)
    })
    .catch(err => {
      console.log(`Error: ${err}`);
    });
      }
      
      let planetName = localStorage.getItem('name');
      let planetClimate = localStorage.getItem('climate');
      let planetTerrain = localStorage.getItem('terrain');
      let planetPopulation = localStorage.getItem('population');
      let planetImage = localStorage.getItem('planetImage');
      let planetFunFact = localStorage.getItem('planetFunFact');

      document.querySelector('#planetTitle').textContent = planetName;
      document.querySelector('#climate').textContent = planetClimate;
      document.querySelector('#terrain').textContent = planetTerrain;
      document.querySelector('#population').textContent = planetPopulation;
      document.querySelector('#planetImg').src = planetImage;
      document.querySelector('#funfact').textContent = planetFunFact;
      
document.querySelector('#backButton').addEventListener('click', backSearch)

function backSearch(){
  window.location.href = 'index.html'
}