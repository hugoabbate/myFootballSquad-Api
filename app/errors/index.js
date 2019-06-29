class NoDataError extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, NoDataError);
    this.name = 'NoDataError';
    this.HTTPCODE = 400;
  }
}

class DataNotFound extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, DataNotFound);
    this.name = 'DataNotFound';
    this.HTTPCODE = 404;
  }
}

class Forbidden extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, Forbidden);
    this.name = 'Forbidden';
    this.HTTPCODE = 403;
  }
}

module.exports = {
  Forbidden, NoDataError, DataNotFound
};
