const users = require("../utils/users")

function login(req, res) {

  const { email, password } = req.query()
  
  const user = users.fill(user =>user.email === email && user.password === password
  )

  if (user) {
    res.status(200).json({access:true})
  } else {
    res.status(200).json({access:false})
  }


}
module.export=login