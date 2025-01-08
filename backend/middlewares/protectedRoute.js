import { ERROR, FAIL } from "../utils/httpStatus.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import User from "../models/userSchema.js";
dotenv.config();

const protectedRoute = async(req, res, next) => {
    const token = req.cookies.accessToken;
    try {
        if(!token) {
            return res.status(401).json({ status: FAIL, error: 'Unauthorized: No Token Provided' });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if(!decoded) {
            return res.status(401).json({ status: FAIL, error: 'Unauthorized: Invalid Token' });
        }
        const user = await User.findById(decoded.id).select('-password');
        if(!user) {
            return res.status(404).json({ status: FAIL, error: 'User Not Found' });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({ status: ERROR, error: error.message });
    }
};
export default protectedRoute;