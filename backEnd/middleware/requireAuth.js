const jwt = require('jsonwebtoken');
const { User } = require('../models');

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  const token = authorization.split(' ')[1];

  try {
    const { id } = jwt.verify(token, process.env.SECRET);
    const user = await User.findOne({ where: { id }, attributes: ['id'] });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: 'Request is not authorized' });
  }
};

module.exports = requireAuth;
