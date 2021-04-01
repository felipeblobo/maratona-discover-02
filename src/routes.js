const express = require('express');
const routes = express.Router();

const Profile = {
  data: {
    name: 'Felipe',
    avatar:
      'https://avatars.githubusercontent.com/u/69439442?s=400&u=60eef3d20a9252062651358f05a66ed6e73e2876&v=4',
    'monthly-budget': 3500,
    'days-per-week': 5,
    'hours-per-day': 4,
    'vacation-per-year': 4,
    'hour-price': 80,
  },

  controllers: {
    
    profile(req, res) {
      return res.render('profile', { profile: Profile.data });
    },

    update(req, res) {
      
    }
  }
};

const Job = {
  data: [
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
  ],
  controllers: {
    index(req, res) {
      const updatedJobs = Job.data.map((job) => {
        const remaining = Job.services.remainingDays(job);
        const status = remaining <= 0 ? 'done' : 'progress';

        return {
          ...job,
          remaining,
          status,
          budget: Profile.data['hour-price'] * job['total-hours'],
        };
      });

      return res.render('index', { jobs: updatedJobs });
    },

    create(req, res) {
      return res.render('job');
    },

    save(req, res) {
      const jobId = Job.data.length == 0 ? 1 : Job.data.length + 1;

      Job.data.push({
        id: jobId,
        name: req.body.name,
        'daily-hours': req.body['daily-hours'],
        'total-hours': req.body['total-hours'],
        created_at: Date.now(),
      });

      return res.redirect('/');
    },

    edit(req, res) {
      return res.render('job-edit');
    }
  },
  services: {
    remainingDays(job) {
      const remainingDays = Math.round(job['total-hours'] / job['daily-hours']);
      const createdDate = new Date(job.created_at);
      const finalDay = createdDate.getDate() + Number(remainingDays);
      const finalDate = createdDate.setDate(finalDay);

      const timeDiferrence = finalDate - Date.now();

      const dayInMs = 1000 * 60 * 60 * 24;
      const dayDiff = Math.round(timeDiferrence / dayInMs);

      return dayDiff;
    },
  },
};

routes.get('/', Job.controllers.index);

routes.get('/job', Job.controllers.create);

routes.post('/job', Job.controllers.save);

routes.get('/job/edit', Job.controllers.edit);

routes.get('/profile', Profile.controllers.profile);

module.exports = routes;
