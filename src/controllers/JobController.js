const Profile = require('../model/Profile');
const Job = require('../model/Job');
const JobUtils = require('../utils/JobUtils');

module.exports = {
  create(req, res) {
    return res.render('job');
  },

  save(req, res) {
    const jobs = Job.get();
    const lastId = jobs.length == 0 ? 1 : jobs.length + 1

    Job.create({
      id: lastId,
      name: req.body.name,
      'daily-hours': req.body['daily-hours'],
      'total-hours': req.body['total-hours'],
      created_at: Date.now(),
    })

    return res.redirect('/');
  },

  show(req, res) {
    const jobId = req.params.id;

    const job = Job.get().find((job) => Number(job.id) === Number(jobId));

    if (!job) {
      return res.send("This Job doesn't exist.");
    }

    job.budget = JobUtils.calculateBudget(job, Profile.get()['hour-price']);

    return res.render('job-edit', { job });
  },

  update(req, res) {
    const jobId = req.params.id;
    const jobs = Job.get();

    const job = jobs.find((job) => Number(job.id) === Number(jobId));

    if (!job) {
      return res.send('Este Job não existe!');
    }

    const updatedJob = {
      ...job,
      name: req.body.name,
      'total-hours': req.body['total-hours'],
      'daily-hours': req.body['daily-hours'],
    };

   const newJobs = jobs.map((job) => {
      if (Number(job.id) === Number(jobId)) {
        job = updatedJob;
      }
      return job;
    });

    Job.update(newJobs);

    res.redirect('/');
  },

  delete(req, res) {
    const jobId = req.params.id;
  
    Job.delete(jobId);

    return res.redirect('/');
  }
};
