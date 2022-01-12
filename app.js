let teams = [
  "Real Madrid",
  "Sevilla",
  "Betis",
  "Atlético Madrid",
  "Real Sociedad",
  "Barcelona",
  "Rayo Vallecano",
  "Villarreal",
  "Athletic",
  "Valencia C.F.",
  "RCD Espanyol",
  "Osasuna",
  "Granada",
  "Celta de Vigo",
  "R.C.D. Mallorca",
  "Elche C.F.",
  "Getafe",
  "Alavés",
  "Cádiz",
  "Levante"
];
teams = _.shuffle(teams);

const marker = document.querySelector(".marker");
for(let i = 0; i < 10; i + 2) {
  createMarker(i);
}

function createMarker(i) {
  let grid = document.createElement("div");
  grid.className = "grid";
  marker.appendChild(grid);

  let team1 = document.createElement("div");
  team1.className = "team";
  grid.appendChild(team1);
  let general1 = document.createElement("p");
  general1.className = "team-1 general-team";
  general1.innerText = teams[i];
  team1.appendChild(general1);
  let square1 = document.createElement("div");
  square1.className = "square";
  team1.appendChild(square1);
  let result1 = document.createElement("p");
  result1.className = "result";
  result1.innerText = goalGen();
  square1.appendChild(result1);

  let team2 = document.createElement("div");
  team2.className = "team";
  grid.appendChild(team2);
  let general2 = document.createElement("p");
  general2.className = "team-2 general-team";
  general2.innerText = teams[i+1];
  team2.appendChild(general2);
  let square2 = document.createElement("div");
  square2.className = "square";
  team2.appendChild(square2);
  let result2 = document.createElement("p");
  result2.className = "result";
  result2.innerText = goalGen();
  square2.appendChild(result2);
}

function goalGen() {

    let rndomGoal;
    let statsCheck;
    let supportParam;

    do {

      supportParam = Math.floor(Math.random()*150);
      statsCheck = Math.floor(Math.random()*1000) + 1;

      if (supportParam >= 0 && supportParam <= 3 && supportParam != 300 && supportParam != 600 && statsCheck <= 900) {
        rndomGoal = supportParam;
      } else if (supportParam > 3 && supportParam <= 10 && statsCheck > 990 && statsCheck <= 999) {
        rndomGoal = supportParam;
      } else if (supportParam > 10 && supportParam <= 20 && statsCheck > 999) {
        rndomGoal = supportParam;
      } else if (supportParam == 300) {
        rndomGoal = `Este equipo es de curling, no sabe jugar a futbol`;
      } else if (supportParam == 600) {
        rndomGoal = `El árbitro se ha comido a los jugadores de este equipo`;
      }

    } while (typeof(rndomGoal) != typeof(supportParam));

    return rndomGoal;
  }
// no me carga, me da el out of memory también
// cagamos


