import { PrismaClient } from "@prisma/client";
import { prisma } from "./client";
import e from "express";

const initDatabase = async () => {
    const userCount = await prisma.user.count();
    const RoleCount = await prisma.role.count();

    if (userCount === 0) {
        await prisma.user.createMany({
            data: [
                {
                    username: "anhduydeptrai",
                    password: "123456",
                    accountType: "admin",
                },
                {
                    username: "anhduydeptra222i",
                    password: "123456",
                    accountType: "system",
                }
            ]
        })
    }
    else if (RoleCount === 0) {
        await prisma.role.createMany({
            data: [
                {
                    name: "ADMIN",
                    description: "ADMIN THI FULL QUYEN"
                },
                {
                    name: "USER",
                    description: "user thong thuong"
                }
            ]
        })
    }
    else {
        console.log("Database already seeded");
    }
}
export default initDatabase;