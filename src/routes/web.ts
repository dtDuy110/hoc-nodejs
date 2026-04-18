import express, { Express } from 'express';
import { getHomePage, getCreateUserPage, postCreateUserPage, postDeleteUser, getViewUser, postUpdateUser } from '../controllers/userController';
import { getDashboardPage } from '../controllers/admin/dashboardControllere';
const router = express.Router();


const webRoutes = (app: Express) => {
    // get
    router.get("/", getHomePage);
    router.get("/create-user", getCreateUserPage);
    router.get("/handle-view-user/:id", getViewUser);
    // post
    router.post("/handle-create-user", postCreateUserPage);
    router.post("/handle-delete-user/:id", postDeleteUser);
    router.post("/handle-update-user", postUpdateUser);


    //admin route

    router.get("/admin",getDashboardPage);

    app.use("/", router);
}


export default webRoutes;
