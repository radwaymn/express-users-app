module.exports = (req, res, next) => {
  const id = +req.params.id;
  console.log(`User id: ${id}`);
  next();
};
