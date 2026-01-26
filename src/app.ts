import express, { Express } from "express";
import 'dotenv/config'

import webRoutes from "./routes/web";
const app = express();
const port = process.env.PORT;

//config view engine
app.set('view enngine', 'ejs');
app.set('views', './src/views')
// config route
webRoutes(app);

app.listen(8080, () => {
    console.log(`My app running on  ${port}`)
})
//duy