import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const generateTokenAndSetCookie = async(payload, res) =>  {
    const accessToken = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: '1m',
    });
    // const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    //     expiresIn: '7d',
    // });
    res.cookie('accessToken', accessToken, {
        maxAge: 3 * 60 * 1000,
        httpOnly: true, // xss attack,
        sameSite: "strict", // cs attack
        secure: process.env.NODE_ENV || 'development',
    });
    // res.cookie('refreshToken', accessToken, {
    //     maxAge: 7*24*60*60*1000,
    //     httpOnly: true, // xss attack,
    //     sameSite: "strict", // cs attack
    //     secure: process.env.NODE_ENV || 'development',
    // });
    // return accessToken
};