//listens for requests
const app = require('./server')
const PORT = process.env.PORT || 3400


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
