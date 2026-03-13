"use client";

import { useState } from "react";

export default function Sidebar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 999999,
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          border: "none",
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(10px)",
          fontSize: "22px",
          cursor: "pointer"
        }}
      >
        ☰
      </button>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              zIndex: 999998
            }}
          />

          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "260px",
              height: "100%",
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(20px)",
              padding: "20px",
              zIndex: 999999
            }}
          >
            <h2>BUTBIT</h2>

            <p>Профіль</p>
            <p>Reels</p>
            <p>Фото</p>
            <p>Подарунки</p>
            <p>Канали</p>
            <p>Налаштування</p>

          </div>
        </>
      )}
    </>
  );
}
