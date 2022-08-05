const users = require("../dataSource/users.json");

const getUsers = (req, res, next) => {
  res.status(200).json(users);
};

const getUserById = (req, res, next) => {
  const id = +req.params.id;
  const user = users.filter((item) => item.id === id);
  res.status(200).json(user);
};

const getUserTasks = (req, res, next) => {
  const id = +req.params.id;
  const user = users.filter((item) => item.id === id);
  res.status(200).json(user[0].tasks);
};

module.exports = {
  getUsers,
  getUserById,
  getUserTasks,
};
