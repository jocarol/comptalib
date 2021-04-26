const express = require('express')
const Companies = require('../models/Companies.js')
const Users = require('../models/Users.js')

const router = express.Router()

Users.belongsToMany(Companies, { as: 'companies', through: 'UsersCompanies' })

// GET ALL USERS
router.get('/', (req, res) => {
  return Users.findAll({ include: 'companies' })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
})

// GET USER BY ID
router.get('/:id', (req, res) => {
  const id = req.params.id || undefined
  if (!id) res.status(400).send('ERROR: You must provide an ID')
  user = Users.findByPk(id, { include: 'companies' })
    .then(user => {
      return (!user) ?
        res.status(400).send('ERROR: User not found') :
        res.status(200).send(user)
    })
    .catch(err => send(500).send(err))
})

// CREATE USER
router.post('/', (req, res) => {
  const user = {
    firstname: req.body.firstname || undefined,
    lastname: req.body.lastname || undefined,
  }
  return (!user.firstname || !user.lastname) ?
  res.status(400).send('ERROR : You need to provide all required fields') :
  Users.create(user)
  .then(user => res.status(200).send(user))
  .catch(err => res.status(500).send(err))
})

// // ADD COMPANY TO USER
// router.put('/:id/addCompany/:companyId', (req, res) => {
//   console.log(req.params)
//   const {id, companyId} = req.params || undefined

//   if (!id && !companyId) res.status(400)
//     .send('ERROR: You need to provide all required fields')
//   Users.findByPk(id, { include: 'companies' })
//     .then(user => {
//       user.addCompanies(companyId)
//       return (!user) ?
//         res.status(400).send('ERROR: User not found') :
//         res.status(200).send(user)
//     })
//     .catch(err => send(500).send(err))
// })

// UPDATE USER
router.put('/:id/', (req, res) => {
  const id = req.params.id || undefined
  if (!id) res.status(400).send('ERROR: You must provide an ID')
  user = Users.update({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  },
    {
      returning: true,
      where: { id: id },
      plain: true,
    }
  )
    .then(res.status(200).send(`SUCCESS: Entry updated`))
    .catch(err => res.status(500).send(`Error : ${err}}`))
})

// DELETE USER
router.delete('/:id', (req, res) => {
  const id = req.params.id || undefined
  if (!id) res.status(400).send('ERROR: You must provide an ID')
  user = Users.destroy(
    {
      where: { id: id },
    }
  )
    .then(res.status(200).send(`SUCCESS: Entry deleted`))
    .catch(err => res.status(500).send(`Error : ${err}}`))
})

// DELETE COMPANY FROM USER
router.delete('/:id/removeFromCompany/:companyId', (req, res) => {
})

module.exports = router;