import passport from "passport";
import Google from "passport-google-oauth20";
import config from "./serverConfig.js";

const GoogleStrategy = Google.Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientID:'725549864518-qijtd049gpldrfu8fnlenspis5aaej7e.apps.googleusercontent.com',
      clientSecret:'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',
      callbackURL:'http://localhost:3000/auth/google/callback',
    },
    async function (accessToken, refreshToken, profile, done) {
      return done(null, profile._json);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
