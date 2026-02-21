const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.use('/styles', express.static('styles'));

app.listen(port, () => {
  console.log(`Listening at localhost:${port}`)
})

// Routes

// Index page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})


// Private dev page - Component playground
app.get('/components', (req, res) => {
  res.sendFile(__dirname + '/dev_files/component_playground.html')
})

