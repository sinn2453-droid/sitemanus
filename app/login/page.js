"use client";

import { supabase } from "../../lib/supabase";

export default function Login() {

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (

    <div className="loginScreen">

      <div className="glass loginCard">

        <div className="logo">

          <span className="material-symbols-rounded logoIcon">
            auto_awesome
          </span>

          <h1 className="logoText">
            BUTBIT
          </h1>

        </div>


        <p className="tagline">

          BUTBIT — сучасна соціальна мережа,
          де можна ділитися короткими відео,
          фотографіями та знаходити нових
          друзів з усього світу.

        </p>


        <div className="features">

          <div className="feature">
            <span className="material-symbols-rounded">
              videocam
            </span>
            Публікуйте відео
          </div>

          <div className="feature">
            <span className="material-symbols-rounded">
              favorite
            </span>
            Ставте лайки
          </div>

          <div className="feature">
            <span className="material-symbols-rounded">
              redeem
            </span>
            Даруйте подарунки
          </div>

        </div>


        <button
          className="googleGlassButton"
          onClick={loginWithGoogle}
        >

          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            width="22"
          />

          Увійти через Google

        </button>

      </div>

    </div>

  );
}
