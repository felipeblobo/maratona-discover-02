const express = require('express');
const routes = express.Router();

const profile = {
  name: 'Felipe',
  avatar:
    'https://avatars.githubusercontent.com/u/69439442?s=400&u=60eef3d20a9252062651358f05a66ed6e73e2876&v=4',
  'monthly-budget': 3500,
  'days-per-week': 5,
  'hours-per-day': 4,
  'vacation-per-year': 4,
};

const jobs = [
  {
    id: 1,
    name: 'Pizzaria Italiana',
    'daily-hours': '5',
    'total-hours': '50',
    created_at: Date.now(),
  },
  {
    id: 2,
    name: 'Black Code',
    'daily-hours': '1',
    'total-hours': '13',
    created_at: Date.now(),
  },
];

routes.get('/', (req, res) => {
  const updatedJobs = jobs.map((job) => {
    
    const remainingDays = Math.round(job['total-hours'] / job['daily-hours'])
    const createdDate = new Date(job.created_at)
    const finalDay = createdDate.getDate() + Number(remainingDays)

    return job
  })

  
  
  return res.render('index', { jobs });
});

routes.get('/job', (req, res) => {
  res.render('job');
});

routes.post('/job', (req, res) => {
  const jobId = jobs.length == 0 ? 1 : jobs.length + 1;

  jobs.push({
    id: jobId,
    name: req.body.name,
    'daily-hours': req.body['daily-hours'],
    'total-hours': req.body['total-hours'],
    created_at: Date.now(),
  });
  console.log(jobs);
  return res.redirect('/');
});

routes.get('/job/edit', (req, res) => {
  res.render('job-edit');
});

routes.get('/profile', (req, res) => {
  res.render('profile', { profile });
});

module.exports = routes;
