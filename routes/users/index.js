const express = require('express')
const connection = require('../../database')
const router = express.Router()

router.post('/', (req, res) => {
    const { name, email, passw } = req.body

    connection.query(`INSERT INTO users(nome, email, senha) VALUES ('${name}', '${email}', '${passw}')`)

    res.redirect('/')
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    
    connection.query(`DELETE FROM users WHERE id=${id}`)

    res.redirect('/')
})

router.get('/update/:id', (req, res) => {
    const {id} = req.params
    const {name, email, } = req.query

    res.render("update", { id, name, email })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { name, email, passw } = req.body

    connection.query(`UPDATE users SET nome='${name}', email='${email}', senha='${passw}' WHERE id=${id}`)

    res.send("Everything Ok!")
})

module.exports = router
