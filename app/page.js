"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  if (!user) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>SiteManus</h1>
        <p>Увійдіть щоб користуватись застосунком</p>

        <button onClick={loginWithGoogle} className="button">
          Увійти через Google
        </button>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: "100px" }}>
      <div className="header">
        <div className="avatar"></div>
        <h2>Мій профіль</h2>
      </div>

      <div className="card">
        <h3>Публікацій ще немає</h3>
        <p>Опублікуйте фото або відео</p>
      </div>

      <div style={{ textAlign: "center" }}>
        <button className="button">Додати публікацію</button>
      </div>

      <div className="navbar">
        <div>Чати</div>
        <div>Контакти</div>
        <div>Налаштування</div>
        <div>Профіль</div>
      </div>
    </div>
  );
    }
