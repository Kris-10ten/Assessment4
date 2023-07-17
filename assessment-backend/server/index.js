const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getInspiration, addGoal, getGoals, updateGoal, deleteGoal } = require('./controller');

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/inspiration", getInspiration);
app.post("/api/goals", addGoal);
app.get("/api/goals", getGoals);
app.put("/api/goals/:id", updateGoal);
app.delete("/api/goals/:id", deleteGoal);


app.listen(4000, () => console.log("Server running on 4000"));
