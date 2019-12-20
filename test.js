let myFetch = require("./umd");
myFetch.init({
    address: "https://icanhazdadjoke.com/",
    key: '1234'
})
myFetch.get().then(data => console.log(data));