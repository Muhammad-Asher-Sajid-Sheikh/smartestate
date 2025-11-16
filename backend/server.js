import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import propertyRoutes from "./routes/propertyRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";

const app = express();

// ENABLE CORS FOR ALL ORIGINS
app.use(cors());

app.use(bodyParser.json());

app.use("/api/properties", propertyRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/transactions", transactionRoutes);

app.listen(5000, () => {
  console.log("DSA Backend running on port 5000");
});
