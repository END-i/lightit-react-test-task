const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const path = require('path')

const database = require('./database')
const { generateToken, getUserIdFromToken, validTokens } = require('./utils')

const port = process.env.SERVER_PORT
const app = express()
app.use(bodyParser.json())

app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body
  const id = database.users.length + 1
  const newUser = { id, name, email, password }
  database.users.push(newUser)
  setTimeout(() => {
    res.status(201).json(newUser)
  }, 5000)
})

app.post('/api/login', (req, res) => {
  const { email, password } = req.body
  const user = database.users.find(
    (u) => u.email === email && u.password === password
  )
  setTimeout(() => {
    if (user) {
      const token = generateToken()
      validTokens.push(token)
      res.json({ token })
    } else {
      res.status(401).json({ error: 'Invalid credentials' })
    }
  }, 5000)
})

app.get('/api/products', (req, res) => {
  setTimeout(() => {
    res.json(database.products)
  }, 5000)
})

// http://localhost:3001/static/image1.jpg
app.use('/static', express.static(path.join(__dirname, 'images')))

app.get('/api/products/:id', async (req, res) => {
  const productId = parseInt(req.params.id)
  const product = database.products.find((p) => p.id === productId)
  setTimeout(() => {
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ error: 'Product not found' })
    }
  }, 5000)
})

app.get('/api/products/:id/comments', async (req, res) => {
  const productId = parseInt(req.params.id)
  const productComments = database.comments.filter(
    (c) => c.productId === productId
  )
  setTimeout(() => {
    res.json(productComments)
  }, 5000)
})

app.post('/api/products/:id/comments', async (req, res) => {
  const productId = parseInt(req.params.id)
  const text = req.body.text
  const userId = getUserIdFromToken(req.headers.authorization)
  setTimeout(() => {
    if (userId) {
      const newComment = {
        id: database.comments.length + 1,
        productId,
        text,
        userId,
      }
      database.comments.push(newComment)
      res.status(201).json(newComment)
    } else {
      res.status(401).json({ error: 'Unauthorized' })
    }
  }, 5000)
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on ${port}`)
})
