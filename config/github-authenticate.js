import passport from "passport";
import config from "./serverConfig.js";
import GitHub from "passport-github2";

const GitHubStrategy = GitHub.Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: "c77988fd9b22a7aa0a90",
      clientSecret: "d4169cdc9ac480145fa8a50c3648cf20d63dbf12",
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log("entered github profile.json:");
      console.log(profile);
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
