import express from "express"

const port = process.env.PORT || 3000;
const app = express();

app.get("/test", (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log("server running on 3000");
});