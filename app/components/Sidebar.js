"use client";

import { useState } from "react";

export default function Sidebar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* кнопка меню */}
      <button
        className="menuButton"
        onClick={() => setOpen(true)}
      >
        <span className="material-symbols-rounded">
          menu
        </span>
      </button>

      {/* затемнення */}
      {open && (
        <div
          className="overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* бокова панель */}
      <div className={`sidebar ${open ? "open" : ""}`}>

        {/* логотип */}
        <div className="sidebarLogo">

          <span className="material-symbols-rounded logoIcon">
            auto_awesome
          </span>

          <span className="logoText">
            BUTBIT
          </span>

        </div>


        {/* меню */}
        <div className="sidebarMenu">

          <div className="sidebarItem">
            <span className="material-symbols-rounded">
              person
            </span>
            Профіль
          </div>

          <div className="sidebarItem">
            <span className="material-symbols-rounded">
              videocam
            </span>
            Reels
          </div>

          <div className="sidebarItem">
            <span className="material-symbols-rounded">
              photo
            </span>
            Фото
          </div>

          <div className="sidebarItem">
            <span className="material-symbols-rounded">
              redeem
            </span>
            Подарунки
          </div>

          <div className="sidebarItem">
            <span className="material-symbols-rounded">
              groups
            </span>
            Канали
          </div>

          <div className="sidebarItem">
            <span className="material-symbols-rounded">
              chat
            </span>
            Повідомлення
          </div>

          <div className="sidebarItem">
            <span className="material-symbols-rounded">
              settings
            </span>
            Налаштування
          </div>

        </div>

      </div>
    </>
  );
}
