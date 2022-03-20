import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import jwt from "jsonwebtoken";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log(accessToken);
      console.log(profile);

      // create a jwt token that is valid for 7 days
      const token = jwt.sign({ sub: profile.id }, process.env.JWT_TOKEN, {
        expiresIn: "3d",
      });

      return cb(null, { id: profile.id }, { message: "ok", token: token });
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //     return cb(err, user);
      //   });
    }
  )
);

export default async function handler(req, res, next) {
  passport.authenticate("google", {
    scope: ["profile"],
    session: false,
  })(req, res, next);
}
