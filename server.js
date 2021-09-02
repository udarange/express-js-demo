const express = require('express')
const app = express()

app.set('view-engine', 'ejs')
// app.use(express.static("public")) // Rendering Static Files

app.get('/', (req, res) => {
  console.log("-------------1-----------")
  // req.query.name
  res.send(req.query.name) // Parse Query Params

  // Sending Data
  // res.sendStatus(201).send('Hi')
  // res.sendStatus(201).json({ message: 'Hi' })
  // res.download("server.js")

  // Rendering HTML
  // res.render("index.ejs", { test: "Good Morning" })
})

const userRouter = require('./routers/users')

app.use('/users', userRouter)

app.listen(3000)
