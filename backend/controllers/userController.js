import bcrypt from "bcrypt";
import { User } from "../models/userModel.js";
import JWT from "jsonwebtoken";
import { sendEmail } from "../assets/nodemailer.js";

export const signUp = async (req, res, next) => {
  try {
    const { name, email, password, isAuthenticated } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
      isAuthenticated,
    });
    res.status(201).json({ msg: "User Registerd SuccessFully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
};

export const login = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "Invalid Credentials" });
    }
    const isMatched = await bcrypt.compareSync(password, user.password);
    if (!isMatched) {
      return res.status(403).json({ msg: "Invalid Credentials" });
    }
    req.session.userId = user.id;
    const { id, name, isAuthenticated , superAdmin} = user;
    email = user.email;
    return res
      .status(200)
      .json({ login: true, id, name, email, isAuthenticated , superAdmin});
  } catch (error) {
    return res.status(500).json({ login: false, error: error.message });
  }
};

export const logout = async (req, res, next) => {
  try {
    req.session.destroy((error) => {
      if (error) return res.status(400).json({ msg: "Logout Unsuccessfull" });
      res.clearCookie("connect.sid");
      res.status(200).json({ msg: "Logout Successfull" });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res, next) => {
  try {
  const {id,superAdmin} = req.body;
  if (!id) {
    throw new Error("Id required");
  }

  if (superAdmin === undefined || typeof superAdmin !== 'boolean') {
    throw new Error("SuperAdmin value required ");
  }
    await User.findByIdAndUpdate(id,{ superAdmin });
    res.status(200).json({ msg: "Role Updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const authenticateUser = async (req, res, next) => {
  try {
    const { id } = req.body;
    const user = await User.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    if (!user.isAuthenticated) {
      user.isAuthenticated = true;
      await user.save();
      return res.status(200).json({ msg: "Successfully Authorized" });
    }else if (user.isAuthenticated){
      user.isAuthenticated = false;
      await user.save();
      await User.deleteOne({ _id: user.id });
      return res.status(200).json({ msg: "Successfully UnAuthorized" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const forgotPassword = async (req,res,next) => {
  const { email } = req.body;
  const from = process.env.EMAIL_FROM;
  try {
      if (!email) {
          throw new Error("No Email Provided");
        }
    const user = await User.findOne({email});
    if(!user){
        throw new Error("User Not Found")
    }
    let resetToken = JWT.sign(
        {id:user.id},
        process.env.JWT_ACCESS_SECRET,
        {expiresIn:"15min"});
      await sendEmail({email,emailType:'RESETPASSWORD',resetToken});
     res.status(200).json({msg:'Email Sent'})
  } catch (error) {
      res.status(400).json({msg:error.message})
  }
};

export const resetPassword = async (req,res, next) => {
  const {resetToken,newPassword,confirmPassword} = req.body;
  try {
      if(newPassword !== confirmPassword){
          throw new Error ("Passwords Not Matching")
      }
      const decode = await JWT.decode(
          resetToken,
          process.env.JWT_ACCESS_SECRET,
      );
      const user = await User.findById(decode.id);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword,salt);
      await User.findByIdAndUpdate(user.id,{password:hashedPassword});
      res.status(200).json({msg:"Password Reset Successfully"});
  } catch (error) {
      res.status(400).json({msg:error.message})
  }
};

export const authUser = async (req, res) => {
  if (!req.session.userId) {
    console.log(req.session.userId);
    return res.status(403).send({ msg: "Please Login Again" });
  }
  const user = await User.findOne({
   _id : req.session.userId
  });
  if (!user) {
    res.status(404).json({ msg: "Invalid Credentials" });
  }
  res.status(200).json(user);
};
