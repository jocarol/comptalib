const express = require('express')

const app = express()
const PORT = 5000

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: false, limit: '20mb' }))

app.listen(PORT, () => console.log(`Assignement server is running at http://localhost:${PORT}`))
