import express from "express";
const app = express();
const port = 8080;
app.get("/", (req, res) => {
    res.send("hello world hihi")
})
app.get("/duy", (req, res) => {
    res.send("dang truonnnnnnnng duy")
})
app.listen(8080, () => {
    console.log(`My app running on  ${port}`)
})
//duy