import passport from "passport";
import { setLoginSession } from "../../../../lib/auth";

export default async function handler(req, res, next) {
  passport.authenticate("kakao", async (err, user, info) => {
    console.log(info);
    const token = info.token;
    //await setLoginSession(res, token);
    res.redirect("/");
  })(req, res, next);
}
