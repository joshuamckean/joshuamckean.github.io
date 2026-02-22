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

// About Me page
app.get('/about-me', (req, res) => {
  res.sendFile(__dirname + '/pages/about-me.html')
})

// Projects page
app.get('/projects', (req, res) => {
  res.sendFile(__dirname + '/pages/projects.html')
})

// Contact page
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/pages/contact.html')
})

// Private dev page - Component playground
app.get('/components', (req, res) => {
  res.sendFile(__dirname + '/dev_files/component_playground.html')
})

