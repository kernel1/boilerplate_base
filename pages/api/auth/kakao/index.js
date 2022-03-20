import passport from "passport";
import KakaoStrategy from "passport-kakao";
import jwt from "jsonwebtoken";
passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_CLIENT_ID,
      callbackURL: "http://localhost:3000/api/auth/kakao/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log(accessToken);
      console.log(refreshToken);
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
  passport.authenticate("kakao", { session: false })(req, res, next);
}
