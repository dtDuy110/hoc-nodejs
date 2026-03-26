import { prisma } from "../config/client";
import getConnection from "../config/database";


const handleCreateUser = async (
    name: string,
    email: string,
    address: string
) => {
    // insert to database

    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            address: address
        }
    })
    return newUser;
}
const getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}
const handleDeleteUser = async (id: number) => {
    const deleteUser = await prisma.user.delete({
        where: {
            id: id
        } 
    })
    return deleteUser;
}
const getUserById = async (id: number) => {
    const user = prisma.user.findUnique({
        where: {
            id: id
        }
    })
    return user;
}
const updateUser = async (id: number, name: string, email: string, address: string) => {
    const updatedUser = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            name: name,
            email: email,
            address: address
        }
    })
    return updatedUser
}
export { handleCreateUser, getAllUsers, handleDeleteUser, getUserById, updateUser };