const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const HTTPError = require('node-http-error')
const { pluck } = require('ramda')

console.log(`The db is ${process.env.COUCH_URL}`)

const db = new PouchDB(`${process.env.COUCH_URL}`)

const allDocs = options => {
  console.log('dalHelper allDocs() options', options)

  return db.allDocs(options).then(result => pluck('doc', result.rows))
}

const dalHelper = {
  allDocs
}

module.exports = dalHelper
