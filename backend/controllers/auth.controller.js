import User from '../models/userSchema.js'
import { signupSchema, loginSchema } from '../utils/validation.js';
import { SUCCESS, FAIL, ERROR } from '../utils/httpStatus.js';
import bcrypt from 'bcrypt';
import { generateTokenAndSetCookie } from '../lib/generateToken.js';

export const signup = async(req, res) => {
    const { username, fullname, email, password } = req.body;
    const { error } = signupSchema.validate(req.body);
    if(error) return res.status(400).json({ status: FAIL, error: error.details[0].message });
    try {
        const findUserName = await User.findOne({ username });
        const findEmail = await User.findOne({ email });
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
        res.status(201).json({ status: SUCCESS, data: {user: newUser} });
    } catch (error) {
        return res.status(500).json({ status: ERROR, error: error.message });
    }
};
export const login = async(req, res) => {
    const { username, password } = req.body;
    const { error } = loginSchema.validate(req.body);
    if(error) return res.status(400).json({ status: FAIL, error: error.details[0].message });
    try {
        const isUser = await User.findOne({ username });
        if(!isUser) {
            return res.status(404).json({ status: FAIL, error: 'Username or Password Incorrect' });
        }
        const comparePassword = await bcrypt.compare(password, isUser.password);
        if(!comparePassword) {
            return res.status(400).json({ status: FAIL, error: 'Username or Password Incorrect' });
        }
        res.status(200).json({ status: SUCCESS, data: {user: isUser} });
    } catch (error) {
        return res.status(500).json({ status: ERROR, error: error.message });
    }
};
export const logout = async(req, res) => {
    try {
        //remove here
        res.status(204).json({ status: SUCCESS, data: {user: 'Logged Out Successfully'} })
    } catch (error) {
        return res.status(500).json({ status: ERROR, error: error.message });
    }
};