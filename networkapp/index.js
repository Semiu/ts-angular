"use strict";
exports.__esModule = true;
//Making a network request to fetch JSON data
//Import axios
var axios_1 = require("axios");
var url = 'hhtps://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
