
const loadPlayers = async () => {
    const input = document.getElementById('input-id');
    const inputValue = input.value;
    input.value = '';
    document.getElementById('spinner').style.display = 'block';

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${inputValue}`;
    const res = await fetch(url);
    const data = await res.json();
    const player = data.player[0];
    // console.log(player);
    loadPlayersTeam(data.player[0])
    displayPlayerTeam(player);
    return player;
}

const loadPlayersTeam = async (player) => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${player.strTeam2}`;
    // console.log(url);
    // console.log(player.strTeam2);
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data)
    const team = data.teams;
    // console.log(team)
    // console.log(team.strLeague);
    return team;
}

const displayPlayerTeam = (player) => {
    const displayDiv = document.getElementById('display-div');
    // displayDiv.style.display = 'block';
    document.getElementById('spinner').style.display = 'none';
    displayDiv.style.display = 'flex'
    
    document.getElementById('image').src = `${player.strThumb}`;

    document.getElementById('card-title').innerText = `${player.strPlayer}`;
    document.getElementById('card-text').innerText = `${player.strDescriptionEN}`;
}

const aboutTeam = async () => {
    const player = loadPlayers();
    const team =await loadPlayersTeam(player);
    console.log(team);
    // document.getElementById('modal-body').innerText = `${team.strTeam}`
}