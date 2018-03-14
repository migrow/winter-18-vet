require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const resources = require('./routes/resources')
const categories = require('./routes/categories')
const dalHelper = require('./lib/dal-helper')

app.use(bodyParser.json())
app.use(cors({ credentials: true }))

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Veterans API.')
})
app.get('/categories', (req, res) => {
  const options = {
    include_docs: true,
    startkey: 'category_',
    endkey: 'category_\ufff0'
  }
  dalHelper
    .allDocs(options)
    .then(categories => res.send(categories))
    .catch(err => console.log('This sucks', err))
})

categories(app)
resources(app)

app.listen(PORT, () => console.log('API UP!! on ', PORT))
