//import the model
const Todo = require("../models/Todo");

// Define Route Handler
exports.updateTodo = async (req, res) => {
  try {
    // extract todo items basis on id
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );

    res.status(200).json({
      success: true,
      todo: todo,
      message: `Updated successfully`,
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
