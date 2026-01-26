import express, { Express } from 'express';
const router = express.Router();


const webRoutes = (app: Express) => {
    router.get("/", (req, res) => {
        res.render("home.ejs")
    })
    router.get("/duy", (req, res) => {
        res.send("dang truonnnnnnnng duy")
    })
    router.get("/abc", (req, res) => {
        res.send(` <h1 style="     color:red">xin chao  abc !!!</h1>`)
    })

    app.use("/", router);
}


export default webRoutes;