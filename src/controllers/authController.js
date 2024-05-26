const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Seller } = require('../models');
const {jwtSecret}= require('../config/serverconfig');

const register = async (req, res) => {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        if (role === 'seller') {
            const seller = await Seller.create({ name, email, password: hashedPassword });
            res.status(201).json(seller);
        } else {
            const user = await User.create({ name, email, password: hashedPassword });
            res.status(201).json(user);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    const { email, password, role } = req.body;

    try {
        let user;
        if (role === 'seller') {
            user = await Seller.findOne({ where: { email } });
        } else {
            user = await User.findOne({ where: { email } });
        }

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user.id, role }, jwtSecret, { expiresIn: '1d' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { register, login };
