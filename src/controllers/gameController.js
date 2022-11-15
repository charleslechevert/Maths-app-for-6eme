const gameController = {
    renderGamePage(req, res) {
    const gameID = req.params.game;
      res.render(`${gameID}`, {gameID : gameID});
    }
  };
  
  module.exports = gameController;
