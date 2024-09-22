const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5500

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))


// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

// Listen on port 5000
app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))