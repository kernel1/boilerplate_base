import passport from "passport";
import { setLoginSession } from "../../../../lib/auth";

export default async function handler(req, res) {
  passport.authenticate("google", async (err, user, info) => {
    console.log(info);
    const token = info.token;
    await setLoginSession(res, token);
    res.redirect("/");
  })(req, res);
}
