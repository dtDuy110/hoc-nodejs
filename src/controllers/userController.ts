import { Request, Response } from "express";
import { handleCreateUser } from "../services/userService"

const getHomePage = (req: Request, res: Response) => {
    return res.render("home")
}


const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("createUser")

}
const postCreateUserPage = (req: Request, res: Response) => {

    const { name, email, address } = req.body;


    // handle create user
    handleCreateUser(name, email, address)

    return res.redirect("/")
}
export { getHomePage, getCreateUserPage, postCreateUserPage };
