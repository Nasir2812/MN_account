const helmet = require('helmet');
const cors = require('cors');
const ratelimit = require('express-rate-limit')
const xss = require('xss-clean')
const hpp = require('hpp')

const secureMiddleware = (app) => {
    // Set secure HTTP headers
    app.use(helmet({
        contentSecurityPolicy: false,
        crossOriginResourcePolicy: false
    }));

    //prevent cross-origin issues (basic)
    app.use(cors({
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        credentials: true
    }));

    // Body parser JSON safety
    // app.use(xss()); // Prevent XSS

    // Prevent HTTP parameter pollution
    app.use(hpp());

    // Rate limiting
    app.use(ratelimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
        message: 'Too many requests from this IP, please try again later.'
    }));

    // Request logger (basic)
    app.use((req, res, next) => {
        console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
        next();
    });
}
module.exports = secureMiddleware