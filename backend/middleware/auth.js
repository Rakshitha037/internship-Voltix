// const jwt = require('jsonwebtoken');

// const authenticateToken = (req, res, next) => {
//   const token = req.header('Authorization');

//   if (!token) return res.status(401).json({ message: 'Unauthorized' });

//   jwt.verify(token, 'your-secret-key', (err, user) => {
//     if (err) return res.status(403).json({ message: 'Forbidden' });
//     req.user = user;
//     next();
//   });
// };

//module.exports = { authenticateToken };
// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticateToken = async (req, res, next) => {
  try {
  //   const token = req.header('Authorization');

  // if (!token) {
  //   return res.status(401).json({ message: 'Unauthorized - Missing token' });
  // }

  // let decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
  //   if (err) {
  //     return res.status(403).json({ message: 'Forbidden - Invalid token' });
  //   }
  //   req.userId = decode.userId;
  //   next();
  // });

  let token = req.headers["x-user-key"];
  if (!token) token = req.headers["X-User-Key"]
  if (!token)
      return res.status(400).send({ status: false, message: "Token required! Please login to generate token" });

  let decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  if (!decodedToken)
      return res.status(400).send({ status: false, message: "Inter valid token" });
  
  req.userId = decodedToken.userId

  next();
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
  
  
};

module.exports = {authenticateToken};

