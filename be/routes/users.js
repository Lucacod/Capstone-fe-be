const express = require('express')
const UserModel = require('../models/users')
const user = express.Router()
const bcrypt = require('bcrypt')

user.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find()

        res.status(200).send({
            statusCode: 200,
            users
        })
    } catch (e) {
        res.status(500).send({
            statusCode: 500,
            message: 'internal server error'
        })
    }
})


user.post('/users/create', async (req, res) => {

    const salt = await bcrypt.genSalt(10) // questa è la complessità dell'algoritrmo che vogliamo utilizzare
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const newUser = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,

    })

    try {
        const user = await newUser.save()
        res.status(200).send({
            statusCode: 200,
            message: 'utente salvato con successo',
            user
        })


    } catch (e) {
        res.status(500).send({
            statusCode: 500,
            message: 'Internal server error'
        })
    }
})



module.exports = user