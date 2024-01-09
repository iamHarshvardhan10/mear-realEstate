
import { errorHandler } from "../utils/error.js"
import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token
    if (!token) return next(errorHandler(401, 'Unauthorized'))
    jwt.verify(token, process.env.JWT_SECRET || 'harsh4510@#$fullstackdeveloper', (err, user) => {
        if (err) {
            if (err.name === 'JsonWebTokenError') {
                return next(errorHandler(401, 'Invalid token'));
            } else if (err.name === 'TokenExpiredError') {
                return next(errorHandler(401, 'Token expired'));
            } else {
                return next(errorHandler(403, 'Forbidden'));
            }
        }
    
        req.user = user;
        next();
    })

}

