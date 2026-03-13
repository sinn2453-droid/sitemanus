"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };

  }, []);

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };


  if (loading) {
    return (
      <div className="loginScreen">
        <div className="glass loginCard">
          <p>Завантаження...</p>
        </div>
      </div>
    );
  }


  if (!user) {
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
            BUTBIT — це сучасна соціальна мережа,
            де люди діляться моментами життя,
            створюють короткі відео,
            публікують фото та знаходять
            однодумців з усього світу.
          </p>

          <div className="features">

            <div className="feature">
              <span className="material-symbols-rounded">
                videocam
              </span>
              Публікуйте короткі відео та фото
            </div>

            <div className="feature">
              <span className="material-symbols-rounded">
                favorite
              </span>
              Ставте лайки та підтримуйте авторів
            </div>

            <div className="feature">
              <span className="material-symbols-rounded">
                redeem
              </span>
              Даруйте цифрові подарунки
            </div>

            <div className="feature">
              <span className="material-symbols-rounded">
                groups
              </span>
              Знаходьте друзів та однодумців
            </div>

            <div className="feature">
              <span className="material-symbols-rounded">
                explore
              </span>
              Відкривайте новий цікавий контент
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


  return (

    <div style={{ paddingBottom:"120px", paddingTop:"40px" }}>

      <div className="glass profileCard">

        <div className="avatar"></div>

        <h2>Мій профіль</h2>

        <p>{user.email}</p>

      </div>


      <div className="glass card">

        <h3>Публікацій ще немає</h3>

        <p>
          Опублікуйте фото або відео,
          щоб поділитися своїми моментами
        </p>

      </div>


      <div style={{ textAlign:"center" }}>

        <button className="gradientButton">

          <span className="material-symbols-rounded">
            add
          </span>

          Додати публікацію

        </button>

      </div>


      <div style={{ textAlign:"center", marginTop:"20px" }}>

        <button onClick={logout}>
          Вийти
        </button>

      </div>


      <div className="navbar">

        <span className="material-symbols-rounded">
          home
        </span>

        <span className="material-symbols-rounded">
          search
        </span>

        <button className="addButton">
          +
        </button>

        <span className="material-symbols-rounded">
          chat
        </span>

        <span className="material-symbols-rounded">
          person
        </span>

      </div>

    </div>
  );
      }
