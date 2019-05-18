'use strict';

require("./assets/styles/index.scss");

const { Elm } = require('./Main');

var app = Elm.Main.init({ flags: API_URL });
app.ports.scrollTo.subscribe((id) => {
    document.getElementById(id).scrollIntoView();
});