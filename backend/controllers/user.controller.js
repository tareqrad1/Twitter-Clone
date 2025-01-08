import Notification from '../models/notificationSchema.js';
import User from '../models/userSchema.js';
import { updateSchema } from '../utils/validation.js';
import { SUCCESS, FAIL, ERROR } from '../utils/httpStatus.js';
import bcrypt from 'bcrypt';

export const getUserProfile = async(req, res) => {
    const { username } = req.params;
    try {
        const user = await User.findOne({ username }).select('-password');
        if(!user) {
            return res.status(404).json({ status: FAIL, error: 'User Not Found' })
        }
        res.status(200).json({ status: SUCCESS, data: {user} });
    } catch (error) {
        return res.status(500).json({ status: ERROR, error: error.message });
    }
};

export const followUnfollow = async(req, res) => {
    const { id } = req.params;
    try {
        const modifyUser = await User.findById(id);
        const currentUser = await User.findById(req.user._id);
        if(!modifyUser || !currentUser) {
            return res.status(404).json({ status: FAIL, error: 'User Not Found' });
        }
        if(id === req.user._id.toString()) {
            return res.status(400).json({ status: FAIL, error: 'You Cant Follow/Unfollow Yourself' })
        }
        const isFollowing = currentUser.following.includes(id);
        if(isFollowing) { //unfollow
            await User.findByIdAndUpdate(id, {
                $pull: {
                    followers: req.user._id, 
                }
            })
            await User.findByIdAndUpdate(req.user._id, {
                $pull: {
                    following: id,
                }
            })
            res.status(200).json({ status: SUCCESS, message: 'Unfollowed Successfully' })
        }else {
			// Follow the user
			await User.findByIdAndUpdate(id, {
                $push: { 
                    followers: req.user._id 
                }
            });
			await User.findByIdAndUpdate(req.user._id, {
                $push: { 
                    following: id 
                } 
            });
			const newNotification = new Notification({
                type: 'follow',
                from: req.user._id,
                to: modifyUser._id,
            })
            await newNotification.save();
			res.status(200).json({ status: SUCCESS, message: "Followed Successfully" });
		}
    } catch (error) {
        return res.status(500).json({ status: ERROR, error: error.message });
    }
};

//suggested here

export const updateUserProfile = async(req, res) => {
    const { newUsername, newFullname, newEmail, currentPassword, newPassword, newBio } = req.body;
    const { error } = updateSchema.validate(req.body);
    if(error) {
        return res.status(400).json({ status: FAIL, error: error.details[0].message });
    }
    try {
        const user = await User.findById(req.user._id).select('-password');
        if(!user) {
            return res.status(404).json({ status:FAIL, error: 'User Not Found' });
        }
        if((!currentPassword && newPassword) || (currentPassword && !newPassword)) {
            return res.status(400).json({ status: FAIL, error: 'Provide both passwords' });
        }
        if(currentPassword && newPassword) {
            const isMatched = await bcrypt.compare(currentPassword, user.password);
            if(!isMatched) return res.status(404).json({ status: FAIL, error: 'Invalid Password' })
        }
        const salt = await bcrypt.genSalt(10);
        const hashNewPassword = await bcrypt.hash(newPassword, salt);
        
        user.username = newUsername || user.username;
        user.fullname = newFullname || user.fullname;
        user.email = newEmail || user.email;
        user.password = hashNewPassword || user.password;
        user.bio = newBio || user.bio;

        user = await user.save();
        res.status(201).json({ status:SUCCESS, data: {user: updatedUser} });
    } catch (error) {
        return res.status(500).json({ status: ERROR, error: error.message });
    }
};