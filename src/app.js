const express = require("express");
const app = express();

// const mongoose = require("mongoose");
// const session = require("express-session");
// const redis = require("redis");
// const {
//   MONGO_USER,
//   MONGO_PASSWORD,
//   MONGO_IP,
//   MONGO_PORT,
//   SESSION_SECRET,
//   REDIS_URL,
//   REDIS_PORT,
// } = require("./config/config");

// const redisStore = require("connect-redis")(session);

// const postRouter = require("./routes/postRoutes");
// const userRouter = require("./routes/userRoutes");

// const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

// const connectWithRetry = () => {
//   mongoose
//     .connect(mongoURL)
//     .then(() => console.log("Successfully connected to DB"))
//     .catch((e) => {
//       console.error(e);
//       setTimeout(connectWithRetry, 5000);
//     });
// };

// connectWithRetry();

// const connectToRedis = async () => {
//   const redisClient = redis.createClient({
//     host: REDIS_URL,
//     port: REDIS_PORT,
//   });

//   await redisClient.connect();
//   console.log(redisClient.isOpen);

//   return redisClient;
// };

// redisClient = connectToRedis();

// app.use(
//   session({
//     store: new redisStore({ client: redisClient }),
//     secret: SESSION_SECRET,
//     cookie: {
//       secure: false,
//       resave: false,
//       saveUninitialized: false,
//       httpOnly: true,
//       maxAge: 30000,
//     },
//   })
// );

app.use(express.json());

// app.use("/api/v1/posts", postRouter);
// app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("<h2>Init My Project</h2>");
});

app.get("/test", (req, res) => {
  res.status(200).send("Hello world");
});
module.exports = app;
