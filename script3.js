const DOMAIN = 'https://pokeapi.co/api/v2/';
let num;

async function getMovie() {
 
  removePic()
  
    const random = Math.floor(Math.random() * 893)
  num = random;
  try {
    const BASE_URL = `${DOMAIN}pokemon/${random}`;
   const url = BASE_URL
    console.log(url)
    let response = await axios.get(url)
    console.log(response.data)
    let abilityOneURL = response.data.abilities[0].ability.url
    let abilityTwoURL = response.data.abilities[1].ability.url

    let response1 = await axios.get(`${abilityOneURL}`)
    let response2 = await axios.get(`${abilityTwoURL}`)
    display(response,response1,response2)

  } catch (err) {
  console.error(err)  
  }
}



let randomBtn = document.getElementById("randomBtn");
randomBtn.addEventListener("click", getMovie);

  let leftBtn = document.getElementById("leftBtn");
leftBtn.addEventListener("click", getMovie1);
  
let rightBtn = document.getElementById("rightBtn");
rightBtn.addEventListener("click", getMovie2);

function display(response,response1, response2) {
  let displayArea = document.querySelector('#display')
  let displayContainer = document.createElement('div')
  displayContainer.className = 'displayContainer'
  displayArea.append(displayContainer)

  let pokemonName = document.createElement('h2')
  pokemonName.textContent = response.data.name
  displayContainer.append(pokemonName)
  let pokemonFace = document.createElement('img')
pokemonFace.className='pokeFaceSpec'
  pokemonFace.src = response.data.sprites.other.dream_world.front_default
  
  displayContainer.append(pokemonFace)

  let pkBio = document.createElement('p')
  pkBio.textContent = `Weight: ${(response.data.weight)/10}kg   Height: ${(response.data.height)/10}m   type: ${response.data.types[0].type.name}`
  displayContainer.append(pkBio)
  console.log(response.data.types[0].type.name)
  setBackground(response.data.types[0].type.name)

  let pokemonAbility1 = document.createElement('h4')
  pokemonAbility1.textContent = response.data.abilities[0].ability.name
  displayContainer.append(pokemonAbility1)
  let pkAbility1Des = document.createElement('p')
  let pkAbility1DesEx = document.createElement('p')
  pkAbility1Des.textContent = response1.data.effect_entries[1].effect
  pkAbility1DesEx.textContent = response1.data.effect_entries[1].short_effect
  displayContainer.append(pkAbility1Des,pkAbility1DesEx)


  let pokemonAbility2 = document.createElement('h4')
  pokemonAbility2.textContent = response.data.abilities[1].ability.name
  displayContainer.append(pokemonAbility2)
  let pkAbility2Des = document.createElement('p')
  let pkAbility2DesEx = document.createElement('p')
  pkAbility2Des.textContent = response2.data.effect_entries[1].effect
  pkAbility2DesEx.textContent = response2.data.effect_entries[1].short_effect
  displayContainer.append(pkAbility2Des,pkAbility2DesEx)




}

async function getMovie1() {
  removePic()
  num = num - 1
  let left = num;
  try {
  const BASE_URL = `${DOMAIN}pokemon/${left}`;
 const url = BASE_URL
  console.log(url)
  let response = await axios.get(url)
  console.log(response.data)
  let abilityOneURL = response.data.abilities[0].ability.url
  let abilityTwoURL = response.data.abilities[1].ability.url

  let response1 = await axios.get(`${abilityOneURL}`)
  let response2 = await axios.get(`${abilityTwoURL}`)
  display(response,response1,response2)

} catch (err) {
console.error(err)  
  }
  
}
async function getMovie2() {
  removePic()
  num = num + 1
  let right = num;
  try {
  const BASE_URL = `${DOMAIN}pokemon/${right}`;
 const url = BASE_URL
  console.log(url)
  let response = await axios.get(url)
  console.log(response.data)
  let abilityOneURL = response.data.abilities[0].ability.url
  let abilityTwoURL = response.data.abilities[1].ability.url

  let response1 = await axios.get(`${abilityOneURL}`)
  let response2 = await axios.get(`${abilityTwoURL}`)
  display(response,response1,response2)

} catch (err) {
console.error(err)  
}
}

function removePic() {
  const removeImg = document.querySelector('#display')
  while (removeImg.lastChild) {
    removeImg.removeChild(removeImg.lastChild)
  }
}

function setBackground(type) {
  console.log('im here in set backgorund')
  let backGround = document.querySelector('#display')
  
  switch(type) {
    case 'water':
      backGround.className = 'water'
      break;
    case 'dragon':
      backGround.className ='dragon'
      break;
      case 'grass':
        backGround.className = 'grass'
      break;
      case 'normal':
        backGround.className = 'normal';
      break;
      case 'electric':
        backGround.className = 'electric';
      break;
      case 'fighting':
        backGround.className = 'fighting';
      break;
      case 'ground':
        backGround.className = 'ground';
      break;
      case 'psychic':
        backGround.className = 'psychic';
      break;
      case 'rock':
        backGround.className = 'rock';
      break;
      case 'dark':
        backGround.className = 'dark';
      break;
      case 'steel':
        backGround.className = 'steel';
      break;
      case 'fire':
        backGround.className = 'fire';
      break;
      case 'ice':
        backGround.className = 'ice';
      break;
      case 'poison':
        backGround.className = 'poison';
      break;
      case 'flying':
        backGround.className = 'flying';
      break;
      case 'bug':
        backGround.className = 'bug';
      break;
      case 'ghost':
        backGround.className = 'ghost';
      break;
      case 'fairy':
        backGround.className = 'fairy';
      break;
    default:
      backGround.className = 'white'
  }

}




