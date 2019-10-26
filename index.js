const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded())
app.use(express.static('html'))

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/hello', (req, res) => res.send('Hello András!'))
app.use(express.static('memes'))
app.get('/ab*cd', (req, res) => res.send('this is some whack shit ma dude'))
app.post('/loginY', (req, res) => {
    if (req.body.username == "Martin" && req.body.password =="Psykose") {
        console.log(req.body.username + " er logget ind.");
        res.send("Du er logget ind.")
    } else {
        console.log(req.body.username + " er ikke logget ind.");
        res.send("Fail")
    }
})
app.get('*', (req, res) => res.send('you are lost'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))