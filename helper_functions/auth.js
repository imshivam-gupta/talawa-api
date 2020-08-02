const jwt = require("jsonwebtoken");

module.exports.createAccessToken = async (user) => {
    const userId = user.id;
    return await jwt.sign(
        {tokenVersion: user.tokenVersion, userId: userId, firstName: user._doc.firstName, lastName: user._doc.lastName, email: user._doc.email},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "15s"}
    );
}

module.exports.createRefreshToken = async (user) => {
    const userId = user.id;
    return await jwt.sign(
        { tokenVersion: user.tokenVersion, userId: userId, firstName: user._doc.firstName, lastName: user._doc.lastName, email: user._doc.email},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: "30d"}
    );

}