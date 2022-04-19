/*
  Redis still not working
*/

const express = require("express");
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

// const app = express();

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

app.get("/", (req, res) => {
  res.send("<h2>Init My Project</h2>");
});

// app.use("/api/v1/posts", postRouter);
// app.use("/api/v1/users", userRouter);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
