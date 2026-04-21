import { Request, Response } from "express";
import { getAllUsers, handleCreateUser, handleDeleteUser, getUserById, updateUser, getAllRoles } from "../services/userService"
import { log } from "console";
import getConnection from "../config/database";

const getHomePage = async (req: Request, res: Response) => {
    // get user --> truyen qua views --> vieeews su li tiep

    const users = await getAllUsers();
    // console.log("check users: ", users);
    return res.render("home", {
        users: users,

    })
}

const getCreateUserPage = async (req: Request, res: Response) => {
    const roles = await getAllRoles();
    console.log(roles);
    return res.render("admin/user/create.ejs", {
        roles
    });

}
const postCreateUserPage = async (req: Request, res: Response) => {

    const { name, email, address } = req.body;

    // handle create user
    const a = await handleCreateUser(name, email, address)

    return res.redirect("/")
}
const postDeleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    await handleDeleteUser(Number(id));
    return res.redirect("/");
}

const getViewUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    // get user by id
    const user = await getUserById(Number(id));
    // render viewUser.ejs
    return res.render("viewUser", {
        id: id,
        user: user
    });
}
const postUpdateUser = async (req: Request, res: Response) => {

    const { id, name, email, address } = req.body;
    // update user by id
    const a = await updateUser(Number(id), name, email, address);
    // render viewUser.ejs
    return res.redirect("/");
}
export { getHomePage, getCreateUserPage, postCreateUserPage, postDeleteUser, getViewUser, postUpdateUser };
