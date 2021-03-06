function customResponses(req, res, next) {
  res.notFound = function notFound() {
    const err = new Error('Page Not Found');
    err.status = 404;
    throw err;
  };

  res.badRequest = function badRequest() {
    const err = new Error('Please check the information is correct');
    err.status = 400;

    throw err;
  };

  res.unauthorized = function unauthorized() {
    const err = new Error('Please login or register!');
    err.status = 401;

    throw err;
  };

  next();
}

module.exports = customResponses;
