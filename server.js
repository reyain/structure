import express from 'express'
import dotenv from 'dotenv'
import userRoutes from "./Routes/userRoutes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (res,req) => {
    res.send("this endpoint is working");
} );

app.use("/api", userRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});