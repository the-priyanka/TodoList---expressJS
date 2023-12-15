//import the model
const Todo = require("../models/Todo");

// Define Route Handler
exports.createTodo = async (req, res) => {
  try {
    // extract title and description form req body
    const { title, description } = req.body;

    // create a new Todo obj and insert in DB
    const response = await Todo.create({ title, description });

    // send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
    });
  } catch (error) {
    console.log(error);
    console.error(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};
