require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

let homestays = [
  {
    id: 1,
    name: "Mountain Homestay",
    location: "Uttarakhand",
    price: 2500
  },
  {
    id: 2,
    name: "Village Retreat",
    location: "Himachal Pradesh",
    price: 1800
  }
];

// Home
app.get("/", (req, res) => {
  res.json({ message: "Backend Running Successfully!" });
});

// 1. GET ALL
app.get("/api/homestays", (req, res) => {
  res.status(200).json(homestays);
});

// 2. GET SINGLE
app.get("/api/homestays/:id", (req, res) => {
  const homestay = homestays.find(
    h => h.id == req.params.id
  );

  if (!homestay) {
    return res.status(404).json({
      message: "Homestay not found"
    });
  }

  res.status(200).json(homestay);
});

// 3. POST
app.post("/api/homestays", (req, res) => {

  const newHomestay = {
    id: homestays.length + 1,
    name: req.body.name,
    location: req.body.location,
    price: req.body.price
  };

  homestays.push(newHomestay);

  res.status(201).json(newHomestay);
});

// 4. PUT
app.put("/api/homestays/:id", (req, res) => {

  const homestay = homestays.find(
    h => h.id == req.params.id
  );

  if (!homestay) {
    return res.status(404).json({
      message: "Homestay not found"
    });
  }

  homestay.name = req.body.name;
  homestay.location = req.body.location;
  homestay.price = req.body.price;

  res.status(200).json(homestay);
});

// 5. DELETE
app.delete("/api/homestays/:id", (req, res) => {

  homestays = homestays.filter(
    h => h.id != req.params.id
  );

  res.status(204).send();
});

// 6. SEARCH
app.get("/api/search", (req, res) => {

  const q = req.query.q?.toLowerCase() || "";

  const result = homestays.filter(
    h =>
      h.name.toLowerCase().includes(q) ||
      h.location.toLowerCase().includes(q)
  );

  res.status(200).json(result);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});