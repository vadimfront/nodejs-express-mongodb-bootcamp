exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-raitingsAverage, price';
  req.query.fields = 'name,price,raitingsAverage,summary,difficulty';
  next();
};
