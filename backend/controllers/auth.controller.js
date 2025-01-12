import User from '../models/userSchema.js'
import { signupSchema } from '../utils/validation.js';
import { SUCCESS, FAIL, ERROR } from '../utils/httpStatus.js';
import bcrypt from 'bcrypt';
import { generateTokenAndSetCookie } from '../lib/generateToken.js';



export const signup = async(req, res) => {
    const { username, fullname, email, password } = req.body;
    const { error } = signupSchema.validate(req.body);
    if(error) return res.status(400).json({ status: FAIL, error: error.details[0].message });
    try {
        const findUserName = await User.findOne({ username }).select('-password');
        const findEmail = await User.findOne({ email }).select('-password');
        if(findUserName) {
            return res.status(302).json({ status: FAIL, error: 'username is already taken' });
        }
        if(findEmail) {
            return res.status(302).json({ status: FAIL, error: 'email is already taken' });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            fullname,
            password: hashPassword,
            email,
        });
        generateTokenAndSetCookie({ id: newUser._id }, res);
        await newUser.save();
        res.status(201).json({ status: SUCCESS, message: 'Signup Successfully' });
    } catch (error) {
        return res.status(500).json({ status: ERROR, error: error.message });
    }
};
export const login = async(req, res) => {    
    const { username, password } = req.body;
    try {
        const isUser = await User.findOne({ username });
        const comparePassword = await bcrypt.compare(password, isUser?.password || '');
        if(!isUser || !comparePassword) {
            return res.status(404).json({ status: FAIL, error: 'Invalid Username or Password' });
        }
        generateTokenAndSetCookie({ id: isUser._id }, res);
        isUser.password = null;
        res.status(200).json({ status: SUCCESS, user: isUser });
    } catch (error) {
        return res.status(500).json({ status: ERROR, error: error.message });
    }
};
export const logout = async(req, res) => {
    try {
        res.cookie('accessToken', '', {
            maxAge: 0,
        });
        res.status(200).json({ status: SUCCESS, message: 'Logged Out Successfully' });
    } catch (error) {
        return res.status(500).json({ status: ERROR, error: error.message });
    }
};
export const getMe = async(req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.status(200).json({ status: SUCCESS, user: user });
    } catch (error) {
        return res.status(500).json({ status: ERROR, error: error.message });
    }
};

// export const refreshToken = async (req, res) => {
//     const refreshToken = req.cookies.refreshToken;
//     if (!refreshToken) return res.status(401).json({ status: FAIL, error: 'No refresh token provided' });
//     try {
//         const payload = jwt.verify(refreshToken, process.env.SECRET_KEY);
//         console.log(payload, 'payload');
//         const accessToken = jwt.sign({ id: payload.id }, process.env.SECRET_KEY, { expiresIn: '1m' });
//         res.cookie('accessToken', accessToken, { httpOnly: true, secure: true, sameSite: 'Strict' });
//         res.cookie('accessToken', refreshToken, {
//             httpOnly: true,
//             secure: true,
//             sameSite: 'Strict',
//             maxAge: 1* 60 * 1000 // 1 min in milliseconds
//         })
//         res.cookie('refreshToken', refreshToken, {
//             httpOnly: true,
//             secure: true,
//             sameSite: 'Strict',
//             maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
//         })
//         res.status(200).json({ status: SUCCESS, message: 'Access token refreshed successfully'});
//     } catch (error) {
//         return res.status(500).json({ status: ERROR, error: error.message });
//     }
// }