import express, { Express } from 'express';
import { getHomePage, getCreateUserPage, postCreateUserPage, postDeleteUser, getViewUser } from '../controllers/userController';
const router = express.Router();


const webRoutes = (app: Express) => {
    // get
    router.get("/", getHomePage);
    router.get("/create-user", getCreateUserPage);
    // post
    router.post("/handle-create-user", postCreateUserPage);
    router.post("/handle-delete-user/:id", postDeleteUser);
    router.get("/handle-view-user/:id", getViewUser);
    app.use("/", router);
}


export default webRoutes;
