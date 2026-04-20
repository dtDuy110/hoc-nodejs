import express, { Express } from 'express';
import { getHomePage, getCreateUserPage, postCreateUserPage, postDeleteUser, getViewUser, postUpdateUser } from '../controllers/userController';
import { getAdminOrderPage, getAdminProductPage, getAdminUserPage, getDashboardPage } from '../controllers/admin/dashboardController';
const router = express.Router();


const webRoutes = (app: Express) => {
    // get
    router.get("/", getHomePage);
    router.get("/handle-view-user/:id", getViewUser);
    // post
    router.post("/handle-create-user", postCreateUserPage);
    router.post("/handle-delete-user/:id", postDeleteUser);
    router.post("/handle-update-user", postUpdateUser);


    //admin route

    router.get("/admin", getDashboardPage);
    router.get("/admin/user", getAdminUserPage)
    router.get("/admin/create-user", getCreateUserPage);

    router.get("/admin/order", getAdminOrderPage)
    router.get("/admin/product", getAdminProductPage)

    app.use("/", router);
}


export default webRoutes;
