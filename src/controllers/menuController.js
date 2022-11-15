
const menuController = {
    renderMenuPage(req, res, next) {
        
            const chapter = req.params.chapter;
            const gamesFound = games.filter((game) => game.chapter == chapter);
            console.log(gamesFound)
            if(gamesFound){
                res.render("menu", {games: gamesFound})
                return
            }
            // en appelant la fonction next on transmet la requête au MW suivant
            // qui s'occupe de la prise en charge des erreurs 404
            next();
        }
    };

  
  module.exports = menuController;