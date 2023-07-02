import JWT from "passport-jwt";
import User from "../models/user.js";
import config from "./serverConfig.js";

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey:'f3e53e87325824a856a4eccccf68f3889668d41a9277889f641a38db1ae0d9b082ac5181c65e504e47ad6418ad891aa99b39e4e9d4919e0680e23aaaa0c7b7b0'  ,
};

export const passportAuth = (passport) => {
  try {
    passport.use(
      new JwtStrategy(opts, async (jwt_payload, done) => {
        const user = await User.findOne({ _id: jwt_payload.id }).exec();
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
          // or you could create a new account
        }
      })
    );
  } catch (err) {
    throw err;
  }
};
