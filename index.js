const express = require('express')
const usersRoutes = require('./routes/users.js')
const companiesRoutes = require('./routes/companies.js')
const db = require('./models/index.js')

const app = express()
const PORT = 5000

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: false, limit: '20mb' }))
app.use('/users', usersRoutes)
app.use('/companies', companiesRoutes)
db.sequelize.sync().then(() => {
// db.sequelize.sync({ force: true }).then(() => {
    console.log("Dropped and re-synced db.");
});
app.get('/', (req, res) => {
    res.send('Hello word');
});
app.listen(PORT, () => console.log(`Assignement server is running at http://localhost:${PORT}`))
