import { useState } from "react";
import Layout from "../components/layout";

export default function Login() {
  return (
    <Layout>
      <div className="login">
        <a href="/api/auth/google">google</a>
        <a href="/api/auth/kakao">kakao</a>
      </div>
    </Layout>
  );
}
