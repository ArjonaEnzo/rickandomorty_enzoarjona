let myFavorites = [];

function postFav(req, res) {
  const character = req.body; // recibo el oj en el body

  myFavorites.push(character); //guardo en mi estado

  return res.json(myFavorites);
}

function deleteFav(req, res) {
  const charId = req.params.id;

  myFavorites = myFavorites.filter((char) => char.id !== charId);
  return res.json(myFavorites);
}
module.export = { postFav, deleteFav };
