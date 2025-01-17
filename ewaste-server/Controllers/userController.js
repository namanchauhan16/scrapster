import bc from "bcryptjs";
import User from "../Models/User.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

// Register a new user
const register = asyncHandler(async (req, res) => {
  const { name, email, password, phone, role} = req.body;

  try {
    console.log("Received data:", req.body);
  
    const userExist = await User.findOne({ email });
    if (userExist) {
      console.log("User already exists");
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bc.hash(password, 10);
    const user = await User.create({
      uid: Math.floor(100000 + Math.random() * 900000),
      name,
      email,
      password: hashedPassword,
      phone : "+91 - " + phone,
      role,
    });
    res.status(201).json({ result: user });
  } catch (err) {
    console.error("Error details:", err);
    res.status(500).json({ message: "Something went wrong.." });
  }
});


// Login a user
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    const isPasswordCorrect = await bc.compare(password, user.password);

    if (!user && !isPasswordCorrect) {
      console.log("Invalid credentials");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    let accessToken = jwt.sign({ uid: user.uid, email: user.email, role: user.role, name: user.name, phone:user.phone }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ accessToken });
  } catch (err) {
    console.error("Error details:", err);
    res.status(500).json({ message: "Something went wrong.." });
  }
});


const deleteUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOneAndDelete({ email });

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error details:", err);
    res.status(500).json({ message: "Something went wrong.." });
  }
});

export { register, login, deleteUser };


