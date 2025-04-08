//admin authentication  middleware
import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
  try {
    const { admintoken } = req?.headers;
    if (!admintoken) {
      return res
        .status(400)
        .json({ success: false, message: "Not authorized Login" });
    }

    const token_decode = jwt.verify(admintoken, process.env.JWt_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res
        .status(400)
        .json({ success: false, message: "Not authorized Login" });
    }

    next();
  } catch (error) {
    console.error("Error adding doctor:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export default authAdmin;
