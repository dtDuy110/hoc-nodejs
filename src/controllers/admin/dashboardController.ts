import { Request, Response } from "express";
import { getAllUsers } from "../../services/userService";



const getDashboardPage = async (req: Request, res: Response) => {

    return res.render("admin/dashboard/show.ejs");
}

const getAdminUserPage = async (req: Request, res: Response) => {
    const users = await getAllUsers();

    return res.render("admin/user/show.ejs", {
        users: users
    });

}
const getAdminOrderPage = async (req: Request, res: Response) => {

    return res.render("admin/user/show.ejs");
}
const getAdminProductPage = async (req: Request, res: Response) => {

    return res.render("admin/user/show.ejs");
}
export { getDashboardPage, getAdminUserPage, getAdminOrderPage, getAdminProductPage };