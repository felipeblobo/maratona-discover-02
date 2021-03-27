const express = require('express')
const routes = express.Router()

const profile = {
  name: 'Felipe',
  avatar: 'https://avatars.githubusercontent.com/u/69439442?s=400&u=60eef3d20a9252062651358f05a66ed6e73e2876&v=4',
  "monthly-budget": 3500,
  "days-per-week": 5,
  "hours-per-day": 4,
  "vacation-per-year": 4
}

routes.get('/', (req, res) => {
  res.render('index')
})

routes.get('/job', (req, res) => {
  res.render('job')
})

routes.get('/job/edit', (req, res) => {
  res.render('job-edit')
})

routes.get('/profile', (req, res) => {
  res.render('profile', {profile})
})

module.exports = routes
