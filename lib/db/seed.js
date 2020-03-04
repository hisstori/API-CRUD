const data = require('./books.json')


data.remove({}).then(() => {
    data.create(data)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log("Error!", err)
    });
});