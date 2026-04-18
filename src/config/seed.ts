import { PrismaClient } from "@prisma/client";
import { prisma } from "./client";
import e from "express";

const initDatabase = async () => {
    const userCount = await prisma.user.count();
    if(userCount === 0) {
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
     else {
        console.log("Database already seeded");
    }
}
export default initDatabase;