const games = require('../../data/games');

const storyController = {
    renderStoryPage(req, res, next) {
            
            const story = req.params.story;
            const gameFound = games.find((game) => game.id == story);
            if(gameFound){
                console.log(gameFound)
                res.render("story", {game: gameFound})
                return
            }
            // en appelant la fonction next on transmet la requête au MW suivant
            // qui s'occupe de la prise en charge des erreurs 404
            next();
        }
    };

  
  module.exports = storyController;