const Task = require("../models/taskModel");
const { getPostData } = require("../utils");

// @desc Gets All tasks with filter
// @route   GET /api/tasks?filterByCompleted=true|false
const getTasks = async (query, res) => {
  // implement logic to obtain all tasks or tasks with filtering and send tasks as pesponse
};

// @desc Get task by id
// @route   GET /api/tasks/:id
const getTaskById = async (req, res) => {
  // implement logic to obtain task by id and send this task as pesponse
};

// @desc Create new task
// @route   POST /api/tasks
const addTask = async (req, res) => {
  // implement logic to create task and send created task as response
};

// @desc Update task by id
// @route   PATCH /api/tasks/:id
const updateTask = async (req, res) => {
  // implement logic to update task and send updated task as response
};

// @desc delete task by id
// @route   DELETE /api/tasks/:id
const deleteTaskById = async (req, res) => {
  // implement logic to delete task
};

module.exports = {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTaskById,
};
