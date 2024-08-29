const TaskModel = require("../models/taskModel");
const { getPostData } = require("../utils");

// @desc Gets All tasks with filter
// @route   GET /api/tasks?filterByCompleted=true|false
const getTasks = async (query, res) => {
  try {
    let tasks;
    if (["true", "false"].includes(query.findByCompleted)) {
      tasks = [...(await TaskModel.findByCompleted(query.findByCompleted === "true"))];
    } else {
      tasks = [...(await TaskModel.findAll())];
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(tasks));
  } catch (e) {
    console.log(e);
  }
};

// @desc Get task by id
// @route   GET /api/tasks/:id
const getTaskById = async (id, res) => {
  try {
    console.log('start');
    const task = await TaskModel.findById(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(task));
  } catch (e) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: e.message,
      })
    );
  }
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
