const { getCategories } = require('../dal')

module.exports = app => {
  app.get('/categories', (req, res) => {
    console.log('GET /categories')

    getCategories({
      include_docs: true,
      startkey: 'category_',
      endkey: 'category_\ufff0'
    })
      .then(categories => res.send(categories))
      .catch(err => console.log(err))
  })
}
