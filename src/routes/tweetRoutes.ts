import express from "express";
import { PrismaClient } from "@prisma/client";
const router = express.Router();
const prisma = new PrismaClient();

//create tweets
router.post("/", async (req, res) => {
    const { content, image, userId } = req.body;
    console.log(content, image, userId);
    try {
        const result = await prisma.tweet.create({
            data: {
                content,
                image,
                userId, //TODO manage based on the auth user
            },
        });

        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ error: "couldnt post tweeet" });
    }
});

//list tweets
router.get("/", async (req, res) => {
    const allTweets = await prisma.tweet.findMany({include:{user:{select:{email:true,username:true}}}});
    res.status(200).json(allTweets);
});

//get one tweets
router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const tweet = await prisma.tweet.findUnique({ where: { id: Number(id) } });
    if (!tweet) {
        res.status(404).json({ message: "No tweet found " });
    }
    res.json(tweet);
});

//update tweets
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { content, image, userId } = req.body;

    try {
        const result = await prisma.tweet.update({
            where: { id: Number(id) },
            data: {
                content,
                image,
                userId,
            },
        });
        res.json(result);
    } catch (err) {
        res.status(400).json({ error: `Failed to update user${id}` });
    }
});

//delete tweets
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    await prisma.tweet.delete({
        where: {
            id: Number(id),
        },
    });

    res.status(409).json({ message: `Tweet Deleted Successfully` });
});

export default router;
