const jwt = require('jsonwebtoken')

const token = (user) => {
    const data = {
        userId: user.id,
        email: user.email
    }
    const JWT_KEY = process.env.JWT_SECRET || 'your_secret_key';

    return jwt.sign(data, JWT_KEY, { expiresIn: '1h' });
}
module.exports = token