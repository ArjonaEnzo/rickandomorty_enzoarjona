const URL = "https://rickandmortyapi.com/api/character/"

const axios = require("axios")

function getCharById (req, res){
  
  const { id } = req.params;

  axios(`${URL}${id}`).then(({ data }) => {
    
    if (data.error) {
      return res.status(404).send(data.error)
    }
    
    const{id,status,name,species,origin,image,gender}= data

    const character = {
      id: Number(id),
      status,
      name,
      species,
      origin,
      image,
      gender,
    }

    return res.status(200).json(character);
  })
    .catch(axiosError => {
    return res.status(500).send(axiosError.message)
  })
    
}

module.export = getCharById;