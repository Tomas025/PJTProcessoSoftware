const express = require("express");
const routes = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set("view engine", 'ejs');
app.set("views",  "./views");
app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () => console.log("server is running"));