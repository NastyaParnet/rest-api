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

const create = async (task) => {
  const tasks = await readTasks();
  const newTask = {
    id: tasks[tasks.length - 1].id + 1,
    completed: false,
    ...task,
  };
  tasks.push(newTask);
  await writeTasks(tasks);
  return newTask;
};

const update = async (id, task) => {
  const tasks = await readTasks();
  const index = tasks.findIndex(task => task.id == id);
  if(index > -1) {
    const updatedTask = {...tasks[index], ...task};
    tasks.splice(index, 1, updatedTask);
    await writeTasks(tasks);
    return updatedTask;
  }
  throw new Error(`Task with id ${id} not found`);
};

const remove = async (id) => {
  const tasks = await readTasks();
  const index = tasks.findIndex(task => task.id == id);
  if(index > -1) {
    tasks.splice(index, 1);
    await writeTasks(tasks);
    return `Task with id ${id} was deleted`
  }
  throw new Error(`Task with id ${id} not found`);
};

module.exports = {
  findAll,
  findByCompleted,
  findById,
  create,
  update,
  remove,
};
