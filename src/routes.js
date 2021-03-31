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
  'hour-price': 80
};

const jobs = [
  {
    id: 1,
    name: 'Pizzaria Italiana',
    'daily-hours': '2',
    'total-hours': '80',
    created_at: Date.now(),
  },
  {
    id: 2,
    name: 'Black Code',
    'daily-hours': '24',
    'total-hours': '1',
    created_at: Date.now(),
  },
];


function remainingDays(job) {
  const remainingDays = Math.round(job['total-hours'] / job['daily-hours'])
  const createdDate = new Date(job.created_at)
  const finalDay = createdDate.getDate() + Number(remainingDays)
  const finalDate = createdDate.setDate(finalDay)

  const timeDiferrence = finalDate - Date.now()

  const dayInMs = 1000 * 60 * 60 * 24
  const dayDiff = Math.round(timeDiferrence / dayInMs)

  return dayDiff
}

routes.get('/', (req, res) => {
  const updatedJobs = jobs.map((job) => {

    const remaining = remainingDays(job)
    const status = remaining <= 0 ? 'done' : 'progress'
    
    return {
      ...job,
      remaining,
      status,
      budget: profile['hour-price'] * job['total-hours']
      }
  })  
  
  return res.render('index', { jobs: updatedJobs });
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
