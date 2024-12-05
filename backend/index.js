import dotenv from 'dotenv';
dotenv.config();

import express, { application } from "express"
import cors from "cors";
import ImageKit from "imagekit";

// Debugging: Log the environment variables (but avoid exposing sensitive keys in production)
// console.log("Debugging Environment Variables:");
// console.log("IMAGE_KIT_ENDPOINT:", process.env.IMAGE_KIT_ENDPOINT || "Not Set");
// console.log("IMAGE_KIT_PUBLIC_KEY:", process.env.IMAGE_KIT_PUBLIC_KEY || "Not Set");
// console.log("IMAGE_KIT_PRIVATE_KEY:", process.env.IMAGE_KIT_PRIVATE_KEY ? "Set" : "Not Set");

const port = process.env.PORT || 3000;
const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
}))

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

app.get("/api/upload", (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})

app.listen(port, () => {
    console.log("server running on 3000");
});