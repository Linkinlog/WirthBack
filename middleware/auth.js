const jwt = require('jsonwebtoken')
const config =require('config')


module.exports = (req,res,next) => {
	const token = req.header('auth-token')
	if(!token){
		return res.json({msg: "No toke"})
	}
	try {
        // Decode jsonwebtoken and add it as the user to the request
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({msg: 'Token is not valid'})
    }
}