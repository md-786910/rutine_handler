const jwt = require('jsonwebtoken')
const rutineModel = require("../db/schema")

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        console.log(token)
        const verifyToken = await jwt.verify(token, process.env.SECRET_KEY)

        if (verifyToken) {
            const rootUser = await rutineModel.findOne({ id: verifyToken._id, "tokens.token": token })
            req.token = token
            req.rootUser = rootUser
            req.userId = rootUser._id
            next()
        } else {
            res.status(404).send("Authenticated error")

        }

    } catch (error) {

        res.status(404).send("Authenticated error " + error.message)
    }

}
console.log(isAuthenticated)
module.exports = isAuthenticated