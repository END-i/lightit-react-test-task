const database = require('./database')

function generateToken() {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let token = ''

  for (let i = 0; i < 32; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length))
  }

  return token
}

function getUserIdFromToken(token) {
  const user = database.users.find((u) => u.id === token)
  return user ? user.id : null
}

function authenticate(req, res, next) {
  // TODO: need to remove
  const token = req.headers.authorization

  if (database.validTokens.includes(token)) {
    next()
  } else {
    res.status(401).json({ error: 'Unauthorized' })
  }
}

module.export = { generateToken, getUserIdFromToken, authenticate }
