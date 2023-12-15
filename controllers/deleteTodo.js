//import the model
const Todo = require("../models/Todo");

// Define Route Handler
exports.deleteTodo = async (req, res) => {
  try {
    // extract todo items basis on id
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: `Delete successfully`,
    });
  } catch (error) {
    console.log(error);
    console.error(error);
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message,
    });
  }
};
