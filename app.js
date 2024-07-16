const enterText = document.getElementById("enterText");
const enterBtn = document.getElementById("enterBtn");
const card = document.getElementById("card");
const hp = document.getElementById("hp");
const attackStat = document.getElementById("attackStat");
const defenseStat = document.getElementById("defenseStat");
const speedStat = document.getElementById("speedStat");
const pokeName = document.getElementById("pokeName");

let pokemonName = "pikachu";

async function fetchData(){

    try{
        let pokemonName = enterText.value.toLowerCase();

        let URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

        const response = await fetch(URL);
    
        if(!response.ok){
            throw new Error("Cannot Fetch Data");
        }

        const data = await response.json();

        console.log(data);

        pokeName.textContent = pokemonName.toUpperCase();

        const pokemonimg = document.getElementById("pokemonSprite");

        pokemonimg.src = data.sprites.front_default;

        hp.textContent = `HP: ${data.stats[0].base_stat}`
        attackStat.textContent = `${data.stats[1].base_stat}`;
        defenseStat.textContent = `${data.stats[2].base_stat}`;
        speedStat.textContent = `${data.stats[5].base_stat}`;

        card.style.display = "block";

        const pokeType = data.types[0].type.name;

        pokeTypeCheck(pokeType);

    }
    catch(error){
        console.log(error);
    }

}

function pokeTypeCheck(pokeType){
    if(pokeType == "normal"){
        card.style.backgroundColor = "gray";
    }
    else if(pokeType == "fire"){
        card.style.backgroundColor = "red";
    }
    else if(pokeType == "water"){
        card.style.backgroundColor = "hsl(205, 100%, 50%)";
    }
    else if(pokeType == "grass"){
        card.style.backgroundColor = "lightgreen";
    }
    else if(pokeType == "electric"){
        card.style.backgroundColor = "yellow";
    }
    else if(pokeType == "ground"){
        card.style.backgroundColor = "gray";
    }
    else if(pokeType == "rock"){
        card.style.backgroundColor = "gray";
    }
    else if(pokeType == "psychic"){
        card.style.backgroundColor = "hsl(306, 94%, 72%, 1)";
    }
    else if(pokeType == "bug"){
        card.style.backgroundColor = "lightgreen";
    }
    else if(pokeType == "ghost"){
        card.style.backgroundColor = "hsl(306, 94%, 72%, 1)";
    }
    else if(pokeType == "steel"){
        card.style.backgroundColor = "gray";
    }
    else if(pokeType == "dark"){
        card.style.backgroundColor = "hsl(306, 94%, 72%, 1)";
    }
    else if(pokeType == "fairy"){
        card.style.backgroundColor = "hsl(306, 94%, 72%, 1)";
    }
    else if(pokeType == "poison"){
        card.style.backgroundColor = "hsl(306, 94%, 72%, 1)";
    }
    else{
        card.style.backgroundColor = "hsl(205, 100%, 50%)";
    }
}