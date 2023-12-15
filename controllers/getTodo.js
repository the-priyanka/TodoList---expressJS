const Todo = require("../models/Todo");

// Define Route Handler
exports.getTodo = async (req, res) => {
  try {
    // fetch all todo items from database
    const todos = await Todo.find({});

    // response
    res.status(200).json({
      success: true,
      data: todos,
      message: "entire Todo data fetched",
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

// Define Route Handler
exports.getTodoById = async (req, res) => {
  try {
    // extract todo items basis on id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    // data for given id not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data Found with given Id",
      });
    }

    // data for given id Found
    res.status(200).json({
      success: true,
      todo: todo,
      message: `Todo ${id} data successfully fetched`,
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
