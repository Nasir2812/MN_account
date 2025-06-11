const pool = require('../../db/db.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/auth/user.js')
const token = require('../../utils/token.js')


// for register
exports.register = async (req, res) => {
    console.log(req.body);
    try {
        const { firstName, lastName, email, password } = req.body;
        

        const hashed = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            firstName, lastName, email, password: hashed
        })
        const tokens = token(newUser)

        res.status(201).json({ message: 'User registered successfully', tokens })
    } catch (error) {
        res.status(500).json({ error: 'Registration failed', details: error.message });
    }
}

// for login
exports.login = async (req, res) => {
    console.log(req.body);
    try {
        const { email, password } = req.body

        //compare email
        const userEmail = await User.findOne({ where: { email } })
        if (!userEmail) {
            return res.status(401).json({
                error: 'Authentication failed',
                message: 'Invalid credentials'
            })
        }

        //compare password
        const userPass = await bcrypt.compare(password, userEmail.password)
        if (!userPass) {
            return res.status(401).json({
                error: 'Authentication failed',
                message: 'Invalid credentials'
            })
        }

        const tokens = token(userEmail)

        res.status(200).json({
            message: 'Login Successfully',
            user: {
                id: userEmail.id,
                firstName: userEmail.firstName,
                lastName: userEmail.lastName,
            },
            tokens
        })

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            error: 'Login failed',
            details: error.message
        });
    }

} 
