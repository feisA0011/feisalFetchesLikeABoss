# fetchLikeABoss
A project on how to fetch like a boss

## How to install
```javascript
npm i @feis-ahm10/fetchlikaaboss
```

## How to use

```javascript
let myFetch = require("@feis-ahm10/fetchlikaaboss");
myFetch.init({
    address: "https://icanhazdadjoke.com/",
    key: '1234'
})
myFetch.get('').then(data => console.log(data));
```

## Functions
- GET - Retrieve data from API
- PUT - Replace data from API
- POST - Create data from API
- PATCH - Modify data from API
- REMOVE - Removed data from API