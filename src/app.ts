import express, { Express } from "express";
import 'dotenv/config'

import webRoutes from "./routes/web";
import getConnection from "./config/database";
import initDatabase from "./config/seed";
const app = express();
const port = process.env.PORT;

//config view engine
app.set('view engine', 'ejs');
app.set('views', './src/views')

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config static files 
app.use(express.static('public'));

// config route
webRoutes(app);
//seeding data
initDatabase();
app.listen(8080, () => {
    console.log(`My app running on  ${port}`)
})
//duy