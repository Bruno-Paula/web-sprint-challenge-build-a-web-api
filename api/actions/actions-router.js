const server = require('express')
const router = server.Router()

/**
 *  Display a all actions.
 *  GET actions
 */

router.get('/', (req, res) => {
  res.status(200).json(123)
})

/**
 *  Display a all actions.
 *  GET actions
 */

router.get('/', (req, res) => {
  res.status(200).json(123)
})

module.exports = router
