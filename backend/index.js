
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
let isConnected = false;

const connectDB = async () => {
  if (isConnected && mongoose.connection.readyState === 1) {
    return;
  }

  if (!uri) {
    throw new Error("MONGO_URL environment variable is missing");
  }

  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 10000,
  });

  isConnected = true;
  console.log("MongoDB connected successfully");
};

// Home route
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

// Get all holdings
app.get("/allHoldings", async (req, res) => {
  try {
    await connectDB();

    const allHoldings = await HoldingsModel.find({});

    res.status(200).json(allHoldings);
  } catch (error) {
    console.error("Holdings Error:", error.message);

    res.status(500).json({
      error: "Failed to fetch holdings",
      message: error.message,
    });
  }
});

// Get all positions
app.get("/allPositions", async (req, res) => {
  try {
    await connectDB();

    const allPositions = await PositionsModel.find({});

    res.status(200).json(allPositions);
  } catch (error) {
    console.error("Positions Error:", error.message);

    res.status(500).json({
      error: "Failed to fetch positions",
      message: error.message,
    });
  }
});

// Get all orders
app.get("/allOrders", async (req, res) => {
  try {
    await connectDB();

    const allOrders = await OrdersModel.find({});

    res.status(200).json(allOrders);
  } catch (error) {
    console.error("Orders Error:", error.message);

    res.status(500).json({
      error: "Failed to fetch orders",
      message: error.message,
    });
  }
});

// Create a new order
app.post("/newOrder", async (req, res) => {
  try {
    await connectDB();

    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.status(201).send("Order saved!");
  } catch (error) {
    console.error("Order Error:", error.message);

    res.status(500).json({
      error: "Failed to save order",
      message: error.message,
    });
  }
});

// Run locally, but export for Vercel
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
  });
}

module.exports = app;