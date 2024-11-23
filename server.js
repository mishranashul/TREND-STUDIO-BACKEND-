const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./router/auth-router");
const conatctRoute = require("./router/contact-router")
const connecDb = require("./utils/db");
const errorMiddleWare = require("./middewares/error-middleware");
app.use(express.json());

app.use(cors());

// we Mount the router
app.use("/api/auth", authRouter);
app.use("/api/form", conatctRoute);

app.use(errorMiddleWare);

const PORT = 8000;

connecDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`)
    });
});