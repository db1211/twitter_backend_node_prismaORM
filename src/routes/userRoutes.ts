import express from "express";
import { PrismaClient } from "@prisma/client";


const router = express.Router();
const prisma = new PrismaClient();

//create user
router.post("/", async (req, res) => {
    const { email, name, username } = req.body;
    console.log(email, name, username);
    try {
        const result = await prisma.user.create({
            data: {
                email,
                name,
                username,
                bio: "Hello Im new to Twitter",
            },
        });

        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ error: "Username and Email should be unique" });
    }
});

//list user

router.get("/", async (req, res) => {
    const allUser = await prisma.user.findMany({ select: { id: true, image: true, name: true } });
    res.status(200).json(allUser);
});

//get one user

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const user = await prisma.user.findUnique({ where: { id: Number(id) }, include: { tweet: true } });

    res.json(user);
});

//update user
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { bio, name, image } = req.body;

    try {
        const result = await prisma.user.update({
            where: { id: Number(id) },
            data: {
                bio,
                image,
                name,
            },
        });
        res.json(result);
    } catch (err) {
        res.status(400).json({ error: `Failed to update user${id}` });
    }
});

//delete user

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    await prisma.user.delete({
        where: {
            id: Number(id)
        }
    })

    res.status(409).json({ message: `User Deleted Successfully` });
});

export default router;
