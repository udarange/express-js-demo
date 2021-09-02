const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Default User')
})

router.post('/', (req, res) => { // same url
  res.send('Create User')
})

router.get('/new', (req, res) => {
  res.send('New User')
})

// dynamic route should be bottom
// router.get('/:id', (req, res) => {
//   res.send(`Get individual user ${req.params.id}`)
// })

// Advanced Routing
router
.route('/:id')
.get((req, res) => {
  res.send(`Get individual user ${req.params.id}`)
})
.put((req, res) => {
  res.send(`Get individual user ${req.params.id}`)
})
.delete((req, res) => {
  res.send(`Get individual user ${req.params.id}`)
})


// router.get('/', (req, res) => {
//
// })

module.exports = router
