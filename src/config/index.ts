import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,

  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRE_IN,
  bcrypt_salt_rounds: process.env.bcrypt_salt_rounds,
};
