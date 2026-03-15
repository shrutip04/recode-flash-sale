const requests = {};

const WINDOW_TIME = 1000;
const MAX_REQUESTS = 5;

function rateLimiter(req, res, next) {

  const ip = req.ip;
  const currentTime = Date.now();

  if (!requests[ip]) {
    requests[ip] = [];
  }

  requests[ip] = requests[ip].filter(
    timestamp => currentTime - timestamp < WINDOW_TIME
  );

  if (requests[ip].length >= MAX_REQUESTS) {
    return res.status(429).json({
      success: false,
      message: "Too many requests. Please slow down."
    });
  }

  requests[ip].push(currentTime);

  next();
}

module.exports = rateLimiter;