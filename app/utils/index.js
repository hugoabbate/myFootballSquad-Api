const winston = require('winston');

const convertedResponse = body => {
  let result = body && body.data ? body : { data: body };

  if (body && body.metadata) result.metadata = body.metadata;
  if (body && body.aggregations) result.aggregations = body.aggregations;

  return result;
};


const responser = (res, body, okStatusCode) => {
  if (body instanceof Error) {
    res.status(body.HTTPCODE || 500).json({
      type: body.name,
      description: body.message,
      stack: body.stack
    });
  } else {
    res.status(okStatusCode || 200).send(convertedResponse(body));
  }
};

const redirect = (res, url) => {
  res.redirect(301, url);
};


module.exports = {
  wrapAsync: fn => (req, res, next) => {
    fn(req, res, next).catch(next);
  },
  logger: prefix => ({
    info: async txt => winston.info(`${prefix}: ${txt}`),
    debug: async txt => winston.debug(`${prefix}: ${txt}`),
    warn: async txt => winston.warn(`${prefix}: ${txt}`),
    error: async txt => winston.error(`${prefix}: ${txt}`)
  }),
  responserFor: res => ({
    send: (body, okStatusCode) => responser(res, body, okStatusCode),
    created: body => responser(res, body, 201),
    redirect: url => redirect(res, url)
  })
};
