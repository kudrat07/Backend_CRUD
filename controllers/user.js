const User = require("../models/userSchema");

// Create a user
exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const isUser = await User.findOne({ email });
    if (isUser) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }
    const user = await User.create({
      name,
      email,
      age,
    });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(200).json({
        success: true,
        message: "No users exist",
      });
    }
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// get a single user
exports.singleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// delete a user
exports.deleteUser = async(req,res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id)
        if(!user) {
            return res.status(400).json({
                success:false,
                message:"User does not exist"
            })
        }
        res.status(200).json({
            success: true,
            deletedUser:user
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            success: false,
            error:error.message
        })
        
    }
}

// update a user
exports.updateUser = async(req, res) => {
  try {
    const {name, email, age} = req.body;
    const {id} = req.params;
    const user = await User.findByIdAndUpdate(id,
       { name, email, age },
       {new: true}
  )
    if(!user){
      return res.status(400).json({
        success: false,
        message:"User not found"
      })
    }
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      updatedUser:user
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      error:error.message
    })
    
  }
}
