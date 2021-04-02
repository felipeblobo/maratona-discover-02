module.exports = {
 
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
  
      calculateBudget: (job, hourPrice) => hourPrice * job['total-hours']
 }