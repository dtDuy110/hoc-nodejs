import { Request, Response } from "express";
import { getAllUsers, handleCreateUser, handleDeleteUser, getUserById } from "../services/userService"
import { log } from "console";
import getConnection from "../config/database";

const getHomePage = async (req: Request, res: Response) => {
    // get user --> truyen qua views --> vieeews su li tiep

    const users = await getAllUsers();
    console.log("check users: ", users);
    return res.render("home", {
        users: users,

    })
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("createUser")

}
const postCreateUserPage = async (req: Request, res: Response) => {

    const { name, email, address } = req.body;


    // handle create user
    await handleCreateUser(name, email, address)

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


export { getHomePage, getCreateUserPage, postCreateUserPage, postDeleteUser, getViewUser };
