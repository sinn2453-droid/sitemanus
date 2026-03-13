"use client";

import { supabase } from "../../lib/supabase";

export default function Login() {

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Login</h1>

      <button onClick={loginWithGoogle}>
        Login with Google
      </button>
    </div>
  );
}
