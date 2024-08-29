const { v4 } = require("uuid");
const { writeTasks, readTasks } = require("../utils");

const findAll = async () => await readTasks();

const findByCompleted = async (completed) => {
  const tasks = await readTasks();
  return tasks.filter((task) => task.completed === completed);
};

const findById = async (id) => {
  const tasks = await readTasks();
  const taskById = tasks.find((task) => task.id == id);
  if(taskById) {
    return taskById
  }
  throw new Error(`Task with id ${id} not found`);
};

const create = async (todo) => {
  /* create new task with unique id, push it into array of tasks,
    write new array in file and return created task*/
};

const update = async (id, task) => {
  /* find task, update info in it,
    write new array of tasks into file
    return updated task*/
};

const remove = async (id) => {
  /* find task, delete it from array of tasks,
  write new array of tasks into file*/
};

module.exports = {
  findAll,
  findByCompleted,
  findById,
  create,
  update,
  remove,
};
