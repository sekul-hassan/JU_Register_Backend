const jwt = require('jsonwebtoken');
const SECRET_KEY = 'sekul';

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log(token);
    next();
    if (!token) {
        return res.status(403).json({ message: 'Token is required' });
    }

    try {
        req.user = jwt.verify(token, SECRET_KEY);
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = authMiddleware;
