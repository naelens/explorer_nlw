function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player2}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
     <div class="card" style="animation-delay: ${delay}">
        <h2>${date}<span>${day}</span></h2>
            <ul>
              ${games}
            </ul>
      </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("southkorea", "10:00", "uruguay") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +

  createCard(
    "25/11",
    "sexta",
    createGame("qatar", "10:00", "senegal") +
    createGame("netherlands","13:00","ecuador") +
    createGame("england", "16:00", "unitedstates")
  ) +

  createCard(
    "28/11",
    "segunda",
    createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay") +
      createGame("ecuador", "12:00", "senegal")
  ) 
 


  




    
  
 
