const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const jwtSecret = process.env.JWT_SECRET;

// Generate user token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

// Register user sign in
const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ email });

  if (user) {
    res.status(422).json({ errors: ["Por favor, utilize outro e-mail"] });
  }

  //Generate Password hash
  const passwordHash = await GeneratePassword(password);

  // Create User
  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
  });

  // If user was created successfully, return the token
  if (!newUser) {
    res.status(422).json({
      errors: ["Houve um erro, por favor tente novamente mais tarde!"],
    });
  }

  res.status(201).json({ _id: newUser._id, token: generateToken(newUser._id) });
};

async function GeneratePassword(password) {
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);
  return passwordHash;
}

//Sign In User
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  //Check if User exists
  if (!user) {
    res.status(404).json({ errors: ["Usuário não encontrado."] });
    return;
  }

  if (!(await bcrypt.compare(password, user.password))) {
    res.status(422).json({ errors: ["Senha inválida."] });
    return;
  }

  res.status(201).json({
    _id: user._id,
    profileImage: user.profileImage,
    token: generateToken(user._id),
  });
};

// Get Current logged in user
const getCurrentUser = async (req, res) => {
  const user = req.user;

  res.status(200).json(user);
};

//Update an user
const update = async (req, res) => {
  const { name, password, bio } = req.body;

  let profileImage = null;

  if (req.file) {
    profileImage = req.file.filename;
  }

  const reqUser = req.user;

  const user = await User.findById(
    new mongoose.Types.ObjectId(reqUser._id)
  ).select("-password");

  if (name) {
    user.name = name;
  }

  if (password) {
    user.password = await GeneratePassword(password);
  }

  if (profileImage) {
    user.profileImage = profileImage;
  }

  if (bio) {
    user.bio = bio;
  }

  await user.save();

  res.status(200).json(user);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(new mongoose.Types.ObjectId(id)).select(
      "-password"
    );

    if (!user) {
      res.status(404).json({ errors: ["Usuário não encontrado."] });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(422).json({ errors: ["Usuário não encontrado."] });
    return;
  }
};

module.exports = {
  register,
  login,
  getCurrentUser,
  update,
  getUserById,
};
