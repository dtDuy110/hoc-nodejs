import express, { Express } from 'express';
import { getHomePage, getCreateUserPage, postCreateUserPage } from '../controllers/userController';
const router = express.Router();


const webRoutes = (app: Express) => {
    // get
    router.get("/", getHomePage);
    router.get("/create-user", getCreateUserPage);
    // post
    router.post("/post-create-user", postCreateUserPage);


    app.use("/", router);
}


export default webRoutes;