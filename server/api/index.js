const router = require('express').Router()
//example
//router.use('/users', require('./users'))

//error 404 route handling
router.use((req, res, next) => {
  const err = new Error('Not Found.')
  err.status = 404
  next(err)
})
module.exports = router
