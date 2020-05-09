const axios = require('axios');

axios.get('https://github.com/alexanderkopke/philobuddy/blob/master/quotes.json')
    .then(function (response) {
        console.log('hello')
    })
    .catch(function (error) {
        console.log(error);
    })
    //https://github.com/alexanderkopke/philobuddy/blob/master/quotes.json
