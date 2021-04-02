let data = {
      name: 'Felipe',
      avatar: 
      'https://avatars.githubusercontent.com/u/69439442?s=400&u=60eef3d20a9252062651358f05a66ed6e73e2876&v=4',
      'monthly-budget': 4000,
      'days-per-week': 5,
      'hours-per-day': 3,
      'vacation-per-year': 4,
      'hour-price': 80,
    }

module.exports = {
    get(){
        return data;
    },

    update(newData) {
        data = newData;
    }
}