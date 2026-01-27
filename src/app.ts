import express, { Express } from "express";
import 'dotenv/config'

import webRoutes from "./routes/web";
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

app.listen(8080, () => {
    console.log(`My app running on  ${port}`)
})
//duy