require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const server = process.env.DATABASE_URL || "mongodb://localhost:27017/post";

async function main() {
    await mongoose.connect(server, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("successfully connected to database"))
        .catch((e) => console.log("failed to connect to databse........", e));
};
main();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("Server is up and running on port:", PORT));