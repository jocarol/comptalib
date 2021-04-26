const express = require('express')
const Companies = require('../models/Companies.js')
const Users = require('../models/Companies.js')
// const UsersCompanies = require('../models/UsersCompanies.js')

const router = express.Router()

// Users.belongsToMany(Companies, { as: 'companies', through: 'UsersCompanies' })
Companies.belongsToMany(Users, { as: 'users', through: 'UsersCompanies' })

// GET ALL COMPANIES
router.get('/', (req, res) => {
    return Companies.findAll({ include: 'users'})
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
})

// GET COMPANY BY ID
router.get('/:id', (req, res) => {
    const id = req.params.id || undefined
    if (!id) res.status(400).send('ERROR: You must provide an ID')
    user = Companies.findByPk(id, { include: 'users' })
        .then(company => {
            return (!company) ?
                res.status(400).send('ERROR: User not found') :
                res.status(200).send(company)
        })
        .catch(err => send(500).send(err))
})

// CREATE COMPANY
router.post('/', (req, res) => {
    const company = {name: req.body.name || undefined}
    return (!company.name) ?
        res.status(400).send('ERROR : You need to provide all required fields') :
        Companies.create(company)
            .then(company => res.status(200).send(company))
            .catch(err => res.status(500).send(err))
})

// ADD COMPANy TO COMPANY
router.put('/:id/addUser/:userId', (req, res) => {
})

// UPDATE COMPANy
router.put('/:id/', (req, res) => {
})

// DELETE COMPANY
router.delete('/:id', (req, res) => {
})

// DELETE USER FROM COMPANY
router.delete('/:id/removeFromCompany/:companyId', (req, res) => {
})

module.exports = router;