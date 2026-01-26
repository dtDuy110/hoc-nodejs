import express from "express";
import 'dotenv/config'
const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.send("hello world hihưwwi")
})
app.get("/duy", (req, res) => {
    res.send("dang truonnnnnnnng duy")
})
app.listen(8080, () => {
    console.log(`My app running on  ${port}`)
})
//duy