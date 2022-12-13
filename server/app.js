const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const bodyparser = require("body-parser");
const Post = require("./model/post");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'uploads'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

app.get("/uploads/:id", (req, res) => {
    try {
        const picture = path.join(__dirname, "./uploads", req.params.id);
        fs.readFileSync(picture);
        res.sendFile(picture);
    } catch (err) {
        res.status(404).json({
            status: "Error",
            message: err.message,
        });
    }
});

app.get("/", (req, res) => {
    res.json({
        status: "Running",
        message: "Use /post with get and post for api calls"
    })
})

app.get("/post", async (req, res) => {
    await Post.find().exec((err, response) => {
        response = response.reverse();
        if (err) return res.status(500).json({
            status: "Error",
            message: err.message
        })
        res.json({data: response});
    })
})

app.post("/post", upload.single("PostImage"), async (req, res) => {
    // console.log(req.body)
    try {
        const data = new Post({
            name: req.body.name,
            location: req.body.location,
            likes: req.body.likes,
            description: req.body.description,
            PostImage: req.file.filename,
        });
        const response = await data.save();
        res.json({
            status: "Sucess",
            data: response
        })
    } catch (err) {
        res.status(500).json({
            status: "Error",
            message: err.message
        })
    }
})

module.exports = app;