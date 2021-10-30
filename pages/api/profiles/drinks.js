const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const Drinks = await db.query(escape`
      SELECT *
      FROM cocktails
    `)
  res.status(200).json({ Drinks })
}