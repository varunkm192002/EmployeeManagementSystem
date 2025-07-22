import jwt from 'jsonwebtoken'
import User from '../models/user.js';

const verifyUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(404).json({ success: false, error: "Token Not Provided" });
        }

        const decoded = await jwt.verify(token, process.env.JWT_KEY)
        if (!decoded) {
            return res.status(404).json({ success: false, error: "Invalid Token" });
        }

        const user = await User.findOne({ _id: decoded._id }).select('-password')
        if (!user) {
            return res.status(404).json({ success: false, error: "User Not Found" })
        }
        req.user = user
        next()

    } catch (error) {
        return res.status(500).json({ success: false, error: "Server side error" })
    }
}

export default verifyUser