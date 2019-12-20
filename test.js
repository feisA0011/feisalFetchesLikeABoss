let myFetch = require("./umd");
myFetch.init({
    address: "https://icanhazdadjoke.com/",
    key: '1234'
})
myFetch.get("").then(data => console.log(data));

// when you don't put in a parameter, it is null, so the link you're trying to access with get() is
// https://icanhazdadjoke.com/null
// by putting "" inside, you're specifying an empty string so it becomes
// https://icanhazdadjoke.com/
