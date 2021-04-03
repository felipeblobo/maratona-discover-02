let data = [
    {
      id: 1,
      name: 'Pizzaria Italiana',
      "daily-hours": 2,
      "total-hours": 80,
      created_at: Date.now()
    },
    {
      id: 2,
      name: 'Black Code',
      "daily-hours": 2,
      "total-hours": 1,
      created_at: Date.now()
    }
  ];

  module.exports = {
    get() {
      return data;
    },

    update(newJobs) {
      data = newJobs;
    },

    delete(id) {
      
      data= data.filter((job) => Number(job.id) !== Number(id));
  
    }


  }
