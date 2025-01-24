// -----------------------------------------------Imports-------------------------------------------------------
import express from "express";
import {configDotenv} from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectMongo } from "./src/configs/db/mongo/mongoConfig.js";
import { CustomError } from "./src/utils/errors/customError.js";
import morgan from "morgan";

// -------------------------------------------------------------------------------------------------------------

configDotenv()

const app = express();
const PORT = process.env.PORT || 9876;
connectMongo();

// ------------------------------------------------------------------------------------------------------------
// ----------------------------------------------CORS HANDLING-------------------------------------------------
app.use(
  cors(
    process.env.NODE_ENV === "production"
      ? {
          origin: [
            "https://homfix.co.uk",
            "https://admin.homfix.co.uk",
            "http://localhost:3000",
            "http://localhost:3001",
            "http://localhost:5173",
            "http://localhost:5174",
          ],
          credentials: true,
        }
      : {
          origin: [
            "https://homfix.co.uk",
            "https://admin.homfix.co.uk",
            "http://localhost:3000",
            "http://localhost:3001",
            "http://localhost:5173",
            "http://localhost:5174",

          ],
          methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
          allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
          credentials: true,
          maxAge: 600,
          exposedHeaders: ["*", "Authorization"],
        }
  )
);
// ------------------------------------------------------------------------------------------------------------
// ----------------------------------------------Middlewares----------------------------------------------------
// express.json() -- middleware to parse the json coming from the http request
app.use(express.json());

// cookieParser() -- middleware to parse the cookie coming from the http request
app.use(cookieParser());
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------Routes----------------------------------------------------


import authRoutes from "./src/routes/authRoutes/authRoutes.js";
import addressRoutes from "./src/routes/address.js";
import orderRoutes from "./src/routes/order.js";
import webhookRoutes from "./src/routes/webhook.js";
import mailRoutes from "./src/routes/mail.js";
import bannerRoutes from "./src/routes/banner.js";
import {  OAuth } from "./src/routes/authRoutes/oAuth.js";
import { socialOAuth } from "./src/controllers/auth/googleOAuth.js";
import session from "express-session";



app.use(morgan("dev"));
// Express session
app.use(
  session({
    secret: "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",
    resave: false, // Add this line to resolve the deprecation warning
    saveUninitialized: false, // Add this line to resolve the deprecation warning
    cookie:{secure:false},
  })
);
app.use(socialOAuth.initialize());
app.use(socialOAuth.session());


app.all(["/", "/api", "/api/v1"], (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to Homefix",
  });
});



app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/address", addressRoutes);
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/webhook", webhookRoutes);
app.use("/api/v1/mail", mailRoutes);
app.use("/api/v1/banner", bannerRoutes);
app.use("/api/v1/oAuth", OAuth);

// -------------------------------------------------------------------------------------------------------------

// ------------------------------------------Global Error Handling----------------------------------------------

app.all("*", (req, res, next) => {
  return next(
    new CustomError(`Can't find the ${req.originalUrl} on the server`, 404)
  );
});

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  return res.status(statusCode).json({
    success: false,
    message: error.message,
  });
});

// ------------------------------------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server is running at port - ${PORT}`);
});
// ------------------------------------------------------------------------------------------------------------
