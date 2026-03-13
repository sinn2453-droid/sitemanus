"use client";

import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { icon: "person", text: "Профіль" },
    { icon: "movie", text: "Reels" },
    { icon: "image", text: "Фото" },
    { icon: "redeem", text: "Подарунки" },
    { icon: "hub", text: "Канали" },
    { icon: "settings", text: "Налаштування" },
  ];

  return (
    <>
      {/* Кнопка "три риски" (Hamburger Menu) */}
      <button
        onClick={() => setOpen(true)}
        className="menuButton"
        aria-label="Open Menu"
      >
        <span className="material-symbols-rounded" style={{ fontSize: "28px" }}>
          menu
        </span>
      </button>

      {/* Оверлей (затемнення фону при відкритті) */}
      {open && (
        <div
          className="overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Бокова панель */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebarLogo">
          <span className="material-symbols-rounded logoIcon" style={{ color: "#6aa6ff" }}>
            auto_awesome
          </span>
          <span className="logoText">BUTBIT</span>
        </div>

        <div className="sidebarMenu">
          {menuItems.map((item, index) => (
            <div key={index} className="sidebarItem">
              <span className="material-symbols-rounded">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Кнопка закриття всередині панелі */}
        <button 
          onClick={() => setOpen(false)}
          style={{
            marginTop: "auto",
            padding: "12px",
            background: "rgba(255,255,255,0.1)",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px"
          }}
        >
          <span className="material-symbols-rounded">close</span>
          Закрити
        </button>
      </div>
    </>
  );
        }
              
