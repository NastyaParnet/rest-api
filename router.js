const url = require("url");
const {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTaskById,
} = require("./controllers/taskController");

const router = (req, res) => {
  //write logic to parse request url and choose method from taskController according to endpoint

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message: "Route Not Found: Please use the /api/v1/tasks endpoint",
    })
  );
};

module.exports = router;
