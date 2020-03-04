// const axios = require('axios');
const fetch = require('node-fetch');
// const fs = require('fs');

const url = 'https://api.itbook.store/1.0/books'

// axios.get(url)
//     .then(function (res) {
//         // handle success
//         console.log(res);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executes
//     });


// fetch(url).then(res => res.json())
// .then(res => {
//     let books = JSON.stringify(res)
//     fs.writeFile('./db/data.json', books, err => {
//         if (err) {
//             console.log('Nope, error!', err);
//         } else {
//             console.log('Success!!');
//         }
//     });
// });

fetch(url)
  .then((res) => {
    //  return res.text();
})
.then((text) => {
  console.log(text);
  // Do something with the returned data.
})
.catch((err) => {
    console.log(err);
});