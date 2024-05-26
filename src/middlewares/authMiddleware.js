const {jwtSecret}= require('../config/serverconfig');

const jwt = require('jsonwebtoken');

const validateUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'No token provided or incorrect format' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = { id: decoded.id, role:decoded.role }; 
        next();
    } catch (err) {
        console.error('Token verification failed:', err);
        return res.status(401).json({ error: 'Unauthorized, invalid token' });
    }
};


module.exports=validateUser