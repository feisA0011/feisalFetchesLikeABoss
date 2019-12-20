(function (root, factory) {
    //AMD
    if (typeof define === 'function' &&
        define.amd) {

        define(['jquery'], factory);
        //CommonJS
    } else if (typeof exports === "object") {
        module.exports = factory(require('jquery'));
        //browser context
    } else {
        root.myFetch = factory(root.jquery)

    }



}(this, function ($) {
    // my own part of the module


    function init(options) {
        this.APIAddress = options.address;
        this.APIkey = options.key;

        return this;
    }

    async function get(resource) {
        try {
            if (typeof fetch === "function") {
                let response = await fetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIkey
                    }
                })
                return await response.json()
            } else if (typeof XMLHttpRequest === 'function') {
                let xhttp = new XMLHttpRequest();
                xhttp.open('POST', this.APIAddress + resource, true);
                xhttp.send()
                return await new Promise(function (resolve, reject) {

                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            resolve(JSON.parse(xhttp.responseText));
                        }
                    };
                })
            } else {
                const nodeFetch = require('node-fetch');
                let response = await nodeFetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIkey
                    }
                })
                return await response.json()
            }

        } catch (error) {
            throw error;
        }

    }

    async function post(resource, data) {
        try {
            if (typeof fetch === "function") {

                let response = await fetch(this.APIAddress + resource, {
                    headers: {
                        'Autorization': this.APIkey,
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(data)
                });
                return await response.json()
            } else if (typeof XMLHttpRequest === 'function') {
                let xhttp = new XMLHttpRequest();
                xhttp.open('POST', this.APIAddress + resource, true);
                xhttp.setRequestHeader('Content-Type', 'application/json')
                xhttp.setRequestHeader('Authorization', this.APIkey);
                xhttp.send()
                return await new Promise(function (resolve, reject) {

                    xhttp.onreadystatechange = function () {

                        if (this.readyState == 4 && this.status == 201) {
                            resolve(JSON.parse(xhttp.responseText));
                        }
                    };
                })
            } else {
                const nodeFetch = require('node-fetch');

                let response = await nodeFetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIkey
                    }
                })
                return await response.json()
            }

        } catch (error) {
            throw error;
        }
    }

    async function del(resource, data) {
        try {
            if (typeof fetch === "function") {

                let response = await fetch(this.APIAddress + resource, {
                    headers: {
                        'Autorization': this.APIkey,
                    },
                    method: 'DELETE'
                });
                return await new Promise(function (resolve, reject) {
                    resolve(response.status);
                })
            } else if (typeof XMLHttpRequest === 'function') {
                let xhttp = new XMLHttpRequest();
                xhttp.open('DELETE', this.APIAddress + resource, true);
                xhttp.send()
                return await new Promise(function (resolve, reject) {

                    xhttp.onreadystatechange = function () {

                        resolve(xhttp.status)
                    };
                });
            } else {
                const nodeFetch = require('node-fetch')
                let response = await nodeFetch(this.APIAddress + resource, {
                    headers: {
                        "Authorization": this.APIkey
                    }
                })
                return await response.json()
            }

        } catch (error) {
            throw error;
        }
    }
    async function put(resource, data) {
        try {
            if (typeof fetch === "function") {

                let response = await fetch(this.APIAddress + resource, {
                    headers: {
                        'Autorization': this.APIkey,
                        'Content-Type': 'application/json'
                    },
                    method: 'PUT',
                    body: JSON.stringify(data)
                });
                return await response.json()
            } else if (typeof XMLHttpRequest === 'function') {
                let xhttp = new XMLHttpRequest();
                xhttp.open('PUT', this.APIAddress + resource, true);
                xhttp.setRequestHeader('Content-Type', 'application/json')
                xhttp.setRequestHeader('Authorization', this.APIkey);
                xhttp.send()
                return await new Promise(function (resolve, reject) {

                    xhttp.onreadystatechange = function () {

                        if (this.readyState == 4 && this.status == 200) {
                            resolve(JSON.parse(xhttp.responseText));
                        }
                    };
                })
            } else {
                const nodeFetch = require('node-fetch');

                let response = await nodeFetch(this.APIAddress + resource, {
                    headers: {
                        'Autorization': this.APIkey,
                        'Content-Type': 'application/json'
                    },
                    method: 'PUT',
                    body: JSON.stringify(data)
                });
                return await response.json()

            }

        } catch (error) {
            throw error;
        }
    }


    return {
        init,
        get,
        post,
        del,
        put


    }


}));