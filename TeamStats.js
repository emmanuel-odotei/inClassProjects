const team = {
    _players: [
      {firstName: 'Eden', lastName: 'Hazard', age: 54},
      {firstName: 'Pablo', lastName: 'Sanchez', age: 43},
      {firstName: 'Peter', lastName: 'Adams', age: 50}
    ],
   _games: [
    {opponent: 'Broncos', teamPoints: 42, opponentPoints: 27},
    {opponent: 'Celtics', teamPoints: 35, opponentPoints: 40},
    {opponent: 'Blues', teamPoints: 15, opponentPoints: 11}
  ],
   
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
  },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
       this.players.push(player);
    },
    addGame(opp, tmPts, oppPts) {
      const game = {
        opponent: opp,
        teamPoints: tmPts,
        opponentPoints: oppPts,
      };
       this.games.push(game);
    }
  };
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team.players);
  
  team.addGame('Titans', 100, 98);
  team.addGame('Fires', 120, 100);
  team.addGame('Reds', 50, 85);
  
  console.log(team.games);
  