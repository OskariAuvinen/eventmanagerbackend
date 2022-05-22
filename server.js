const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const eventsRouter = require('./routes/events');
const authRouter = require('./routes/auth.routes');
const userRouter = require('./routes/user.routes');
const app = express();
// var corsOptions = {
//     origin: "http://localhost:3000"
// };


app.use(cors('Access-Control-Allow-Origin', '*'));
// app.use(cors(corsOptions));
app.use('/events', eventsRouter);
app.use('/api/auth', authRouter);
app.use('/api/auth', userRouter);
// app.use('/')
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });
}

const db = require("./models");
const Role = db.role;
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

app.get("/", (req, res) => {
    res.json({ message: "Eventmanagerdemo - backend server" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});