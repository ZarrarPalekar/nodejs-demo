const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  console.log("req: ", req.header("Authorization"));
  try {
    const authHeader = req.header("Authorization");
    console.log("authHeader: ", authHeader);
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("Please authenticate.");
    }
    const token = authHeader.replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = auth;
