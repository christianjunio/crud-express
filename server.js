const express = require('express');
const connection = require('./database')
const app = express();
const PORT = 8888;

app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

const users = require('./routes/users')

app.use('/users', users)

app.get('/', (req, res) => {

    connection.query(`SELECT * FROM users`, (err, results) => {
        if (err) throw err

        res.render("index", { results })
    })

})

app.listen(PORT, () => {
    console.log(`Server started on port: http://localhost:${PORT}`)
});