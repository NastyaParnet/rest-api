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
  try {
    const body = await getPostData(req);
    const task = await TaskModel.create(JSON.parse(body));
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        id: task.id,
        completed: task.completed,
        todo: "New task",
      })
    );
  } catch (e) {
    console.log(e);
  }
};

// @desc Update task by id
// @route   PATCH /api/tasks/:id
const updateTask = async (req, res) => {
  // implement logic to update task and send updated task as response
};

// @desc delete task by id
// @route   DELETE /api/tasks/:id
const deleteTaskById = async (id, res) => {
  try {
    const result = await TaskModel.remove(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({message: result}));
  } catch (e) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: e.message,
      })
    );
  }
};

module.exports = {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTaskById,
};
