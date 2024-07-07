import express from "express";
import userRoutes from "./routes/userRoutes";
import tweetRoutes from "./routes/tweetRoutes";

const app = express();
app.use(express.json()); //parse data to json

app.get("/", (req, res) => {
  //app.Method(path,handler)
  res.send("Hello wosrld");
});

app.use("/user", userRoutes);

app.use("/tweets", tweetRoutes);

app.listen(3000, () => {
  console.log(`server running at port 3000`);
});
